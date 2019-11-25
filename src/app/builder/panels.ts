export default [
  {
    id: 'layers',
    el: '.panel__right',
    resizable: {
      maxDim: 350,
      minDim: 200,
      tc: 0, // Top handler
      cl: 1, // Left handler
      cr: 0, // Right handler
      bc: 0, // Bottom handler
      keyWidth: 'flex-basis',
    },
  },
  {
    id: 'panel-switcher',
    el: '.panel__switcher',
    buttons: [{
      id: 'show-layers',
      active: true,
      label: 'Layers',
      command: 'show-layers',
      togglable: false,
    }, {
      id: 'show-style',
      active: true,
      label: 'Styles',
      command: 'show-styles',
      togglable: false,
    }],
  },
  {
    id: 'panel-top',
    el: '.panel__top',
  },
  {
    id: 'basic-actions',
    el: '.panel__basic-actions',
    buttons: [
      {
        id: 'visibility',
        active: true, // active by default
        className: 'btn-toggle-borders',
        label: '<u>B</u>',
        command: 'sw-visibility', // Built-in command
      }, {
        id: 'export',
        className: 'btn-open-export',
        label: 'Exp',
        command: 'export-template',
        context: 'export-template', // For grouping context of buttons from the same panel
      }, {
        id: 'show-json',
        className: 'btn-show-json',
        label: 'JSON',
        context: 'show-json',
        command(editor) {
          editor.Modal.setTitle('Components JSON')
            .setContent(`<textarea style="width:100%; height: 250px;">
              ${JSON.stringify(editor.getComponents())}
            </textarea>`)
            .open();
        },
      },
    ],
  }
];
