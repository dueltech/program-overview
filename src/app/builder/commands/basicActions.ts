import { getFonts, setFonts, resetFonts } from '../fontManager';
import styles from '../styles';

export default [
  {
    id: 'get-custom-css',
    run() {
      return localStorage.getItem('custom-css') || '';
    }
  },
  {
    id: 'set-custom-css',
    run(editor, sender, options: {value: string}) {
      const val = options.value || '';
      localStorage.setItem('custom-css', val);
      editor.Canvas.getBody().querySelector('#custom-styles').innerHTML = val;
    }
  },
  {
    id: 'custom-css-modal',
    run(editor) {
      const customCss = editor.runCommand('get-custom-css');
      editor.Modal.setTitle('Custom CSS')
        .setContent(`
        <textarea style="width:100%; height: 250px;">${customCss}</textarea>
        <button>Save</button>
        `)
        .open();
      const contentEl = editor.Modal.getContentEl();
      const textarea = contentEl.querySelector('textarea');
      const button = contentEl.querySelector('button');
      button.addEventListener('click', () => {
        editor.runCommand('set-custom-css', {value: textarea.value});
        editor.Modal.close();
      });
    }
  },
  {
    id: 'export-json',
    run(editor) {
      const customCss = editor.runCommand('get-custom-css');
      const exported = {
        components: editor.getComponents(),
        style: editor.getStyle(),
        fonts: getFonts(),
        customCss,
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
      const importObj = JSON.parse(jsonData);
      editor.setComponents(importObj.components);
      editor.setStyle(importObj.style);
      setFonts(editor, importObj.fonts);
      editor.runCommand('set-custom-css', {value: importObj.customCss});
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
    }
  }
];
