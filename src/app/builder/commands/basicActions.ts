import { getFonts, setFonts, resetFonts } from '../fontManager';
import styles from '../styles';

export default [
  {
    id: 'export-json',
    run(editor) {
      const exported = {
        components: editor.getComponents(),
        style: editor.getStyle(),
        fonts: getFonts(),
      };
      const jsonContent = JSON.stringify(exported);
      editor.Modal.setTitle('Export JSON')
        .setContent(`<textarea style="width:100%; height: 250px;">${jsonContent}</textarea>`)
        .open();
    },
  },
  {
    id: 'import-json',
    run(editor) {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = '<textarea id="import-json" style="width:100%; height: 250px;"></textarea>';
      const importButton = document.createElement('button');
      importButton.innerText = 'Import';
      importButton.addEventListener('click', () => {
        const textarea = document.getElementById('import-json') as HTMLTextAreaElement;
        const importObj = JSON.parse(textarea.value);
        editor.setComponents(importObj.components);
        editor.setStyle(importObj.style);
        setFonts(editor, importObj.fonts);
        editor.Modal.close();
      });
      wrapper.appendChild(importButton);
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
      editor.setStyle(styles);
    }
  }
];
