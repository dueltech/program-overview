export default [
  {
    id: 'set-device-desktop',
    run(editor) {
      editor.setDevice('Desktop');
    },
  },
  {
    id: 'set-device-mobile',
    run(editor) {
      editor.setDevice('Mobile');
    },
  },
];
