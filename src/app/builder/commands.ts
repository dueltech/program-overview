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
    run(editor, sender) {
      this.getTraitsEl(editor).style.display = '';
    },
    stop(editor, sender) {
      this.getTraitsEl(editor).style.display = 'none';
    },
  },
];
