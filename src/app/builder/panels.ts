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
        id: 'export-html',
        className: 'btn-open-export',
        label: 'Export (HTML)',
        command: 'export-template',
        context: 'export-template',
      }, {
        id: 'export-json',
        className: 'btn-open-export',
        label: 'Export (JSON)',
        context: 'export-template',
        command(editor) {
          const exported = {
            components: editor.getComponents(),
            style: editor.getStyle(),
          };
          editor.Modal.setTitle('Export JSON')
            .setContent(`<textarea style="width:100%; height: 250px;">${JSON.stringify(exported)}</textarea>`)
            .open();
        },
      },
      {
        id: 'import-json',
        className: 'btn-open-import',
        label: 'Import',
        context: 'import-json',
        command(editor) {
          const wrapper = document.createElement('div');
          wrapper.innerHTML = '<textarea id="import-json" style="width:100%; height: 250px;"></textarea>';
          const importButton = document.createElement('button');
          importButton.innerText = 'Import';
          importButton.addEventListener('click', () => {
            const textarea = document.getElementById('import-json') as HTMLTextAreaElement;
            const importObj = JSON.parse(textarea.value);
            editor.setComponents(importObj.components);
            editor.setStyle(importObj.style);
            editor.Modal.close();
          });
          wrapper.appendChild(importButton);
          editor.Modal.setTitle('Import JSON')
            .setContent(wrapper)
            .open();
        },
      },
    ],
  }
];
