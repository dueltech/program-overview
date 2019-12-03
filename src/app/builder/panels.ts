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
    }, {
      id: 'show-traits',
      active: true,
      label: 'Traits',
      command: 'show-traits',
      togglable: false,
    }, {
      id: 'show-fonts',
      active: true,
      label: 'Fonts',
      command: 'show-fonts',
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
        active: true,
        className: 'fa fa-square-o',
        command: 'sw-visibility',
        attributes: { title: 'View borders' },
      }, {
        id: 'undo',
        className: 'fa fa-undo',
        command: 'core:undo',
        attributes: { title: 'Undo' },
      }, {
        id: 'redo',
        className: 'fa fa-repeat',
        command: 'core:redo',
        attributes: { title: 'Redo' },
      }, {
        id: 'export-zip',
        className: 'fa fa-code',
        command: 'gjs-export-zip',
        attributes: { title: 'Export code (as zip)' },
      }, {
        id: 'export-json',
        className: 'fa fa-download',
        command: 'export-json',
        attributes: { title: 'Save JSON' },
      },
      {
        id: 'import-json',
        className: 'fa fa-upload',
        command: 'import-json',
        attributes: { title: 'Import JSON' },
      },
      {
        id: 'clear-canvas',
        className: 'fa fa-trash',
        command: 'clear-canvas',
        attributes: { title: 'Clear Canvas' },
      }
    ],
  },
  {
    id: 'panel-devices',
    el: '.panel__devices',
    buttons: [{
      id: 'device-desktop',
      command: 'set-device-desktop',
      className: 'fa fa-desktop',
      active: true,
      togglable: false,
      attributes: { title: 'Desktop' },
    }, {
      id: 'device-mobile',
      command: 'set-device-mobile',
      className: 'fa fa-mobile',
      togglable: false,
      attributes: { title: 'Mobile' },
    }],
  }
];
