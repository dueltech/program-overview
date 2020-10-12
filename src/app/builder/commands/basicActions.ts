import { getFonts, setFonts, resetFonts } from '../fontManager';
import styles from '../styles';

const customTextCommands = (name: string, container: string, title: string) => [
  {
    id: `get-${name}`,
    run() {
      return localStorage.getItem(name) || '';
    }
  },
  {
    id: `set-${name}`,
    run(editor, sender, options: {value: string}) {
      const val = options.value || '';
      localStorage.setItem(name, val);
      if (container === '#custom-scripts') {
        const head = editor.Canvas.getDocument().head;
        head.insertAdjacentHTML('beforeend', val);
      } else {
        editor.Canvas.getBody().querySelector(container).innerHTML = val;
      }
    }
  },
  {
    id: `${name}-modal`,
    run(editor) {
      const text = editor.runCommand(`get-${name}`);
      editor.Modal.setTitle(title)
        .setContent(`
        <textarea style="width:100%; height: 250px;">${text}</textarea>
        <button>Save</button>
        `)
        .open();
      const contentEl = editor.Modal.getContentEl();
      const textarea = contentEl.querySelector('textarea');
      const button = contentEl.querySelector('button');
      button.addEventListener('click', () => {
        editor.runCommand(`set-${name}`, {value: textarea.value});
        editor.Modal.close();
      });
    }
  },
];

export default [
  ...customTextCommands('custom-css', '#custom-styles', 'Custom CSS'),
  ...customTextCommands('custom-scripts', '#custom-scripts', 'Custom Scripts'),
  {
    id: 'export-json',
    run(editor) {
      const customCss = editor.runCommand('get-custom-css');
      const customScripts = editor.runCommand('get-custom-scripts');
      const exported = {
        components: editor.getComponents(),
        style: editor.getStyle(),
        fonts: getFonts(),
        customCss,
        customScripts,
      };
      const jsonContent = JSON.stringify(exported);
      const fileHref = `data:'text/json;charset=utf-8,${encodeURIComponent(jsonContent)}`;
      editor.Modal.setTitle('Export JSON')
        .setContent(`
        <textarea style="width:100%; height: 250px;">${jsonContent}</textarea>
        <a href="${fileHref}" download="program-overview.json">Download file</a>
        `)
        .open();
    },
  },
  {
    id: 'import-json',
    importJson(editor, jsonData: string) {
      // Fix broken JSON configs, for some reason p elements aren't handled correctly
      const importObj = JSON.parse(jsonData.replace(/"tagName":\s?"p"/gi, '"tagName":"div"'));
      editor.setComponents(importObj.components);
      editor.setStyle(importObj.style);
      setFonts(editor, importObj.fonts);
      editor.runCommand('set-custom-css', {value: importObj.customCss});
      editor.runCommand('set-custom-scripts', {value: importObj.customScripts});
      editor.Modal.close();
    },
    run(editor) {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = '<textarea id="import-json" style="width:100%; height: 250px;"></textarea>';
      const importButton = document.createElement('button');
      importButton.innerText = 'Import';
      importButton.addEventListener('click', () => {
        const textarea = document.getElementById('import-json') as HTMLTextAreaElement;
        this.importJson(editor, textarea.value);
      });
      const input = document.createElement('input');
      input.type = 'file';
      input.name = 'json-import';
      input.accept = '.json';
      input.addEventListener('change', () => {
        if (input.files.length > 0) {
          const file = input.files[0];
          const reader = new FileReader();
          reader.onload = () => {
            this.importJson(editor, reader.result);
          };
          reader.readAsText(file);
        }
      });
      wrapper.appendChild(importButton);
      wrapper.insertAdjacentHTML('beforeend', '<span class="footer-text">or</span>');
      wrapper.appendChild(input);
      editor.Modal.setTitle('Import JSON')
        .setContent(wrapper)
        .open();
    },
  },
  {
    id: 'clear-canvas',
    run(editor) {
      editor.Commands.run('core:canvas-clear');
      resetFonts(editor);
      editor.setComponents(editor.getConfig().components);
      editor.setStyle('');
      editor.runCommand('set-custom-css', {value: ''});
      editor.runCommand('set-custom-scripts', {value: ''});
    }
  }
];
