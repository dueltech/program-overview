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
        active: true, // active by default
        className: 'btn-toggle-borders',
        label: '<u>B</u>',
        command: 'sw-visibility', // Built-in command
      }, {
        id: 'export-zip',
        className: 'btn-open-export',
        label: 'Export (Zip)',
        command: 'gjs-export-zip',
        context: 'export-template',
      }, {
        id: 'export-json',
        className: 'btn-open-export',
        label: 'Export (JSON)',
        context: 'export-template',
        command: 'export-json',
      },
      {
        id: 'import-json',
        className: 'btn-open-import',
        label: 'Import',
        context: 'import-json',
        command: 'import-json',
      },
      {
        id: 'clear-canvas',
        className: 'clear-canvas',
        label: 'Clear Canvas',
        context: 'clear-canvas',
        command: 'clear-canvas',
      }
    ],
  },
  {
    id: 'panel-devices',
    el: '.panel__devices',
    buttons: [{
      id: 'device-desktop',
      label: 'D',
      command: 'set-device-desktop',
      active: true,
      togglable: false,
    }, {
      id: 'device-mobile',
      label: 'M',
      command: 'set-device-mobile',
      togglable: false,
    }],
  }
];
