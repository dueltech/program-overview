import { addFont, Font } from './fontManager';

export default [
  {
    id: 'show-layers',
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getLayersEl(row) { return row.querySelector('.layers-container'); },
    run(editor) {
      const lmEl = this.getLayersEl(this.getRowEl(editor));
      lmEl.style.display = '';
    },
    stop(editor) {
      const lmEl = this.getLayersEl(this.getRowEl(editor));
      lmEl.style.display = 'none';
    },
  },
  {
    id: 'show-styles',
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getStyleEl(row) { return row.querySelector('.styles-container'); },
    run(editor) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = '';
    },
    stop(editor) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = 'none';
    },
  },
  {
    id: 'show-traits',
    getTraitsEl(editor) {
      const row = editor.getContainer().closest('.editor-row');
      return row.querySelector('.traits-container');
    },
    run(editor) {
      this.getTraitsEl(editor).style.display = '';
    },
    stop(editor) {
      this.getTraitsEl(editor).style.display = 'none';
    },
  },
  {
    id: 'show-fonts',
    getFontsEl(editor) {
      const row = editor.getContainer().closest('.editor-row');
      return row.querySelector('.fonts-container');
    },
    run(editor) {
      this.getFontsEl(editor).style.display = '';
    },
    stop(editor) {
      this.getFontsEl(editor).style.display = 'none';
    },
  },
  {
    id: 'add-font',
    run(editor) {
      const fontHref = document.getElementById('font-href') as HTMLInputElement;
      const fontName = document.getElementById('font-name') as HTMLInputElement;
      const fontDeclaration = document.getElementById('font-declaration') as HTMLInputElement;
      if (fontHref.value && fontName.value && fontDeclaration.value) {
        const font: Font = {
          href: fontHref.value,
          name: fontName.value,
          declaration: fontDeclaration.value,
        };
        addFont(editor, font);
        fontHref.value = '';
        fontName.value = '';
        fontDeclaration.value = '';
      }
    },
  },
];
