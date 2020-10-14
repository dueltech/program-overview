declare global {
  interface Window { DuelVision: any; }
}

import { getSectorProps } from '../styleManager';

const definition = (editor) => ({
  model: {
    toJSON() {
      const result = editor.DomComponents.getType('default').model.prototype.toJSON.apply(this);
      result.attributes.galleryConfig = this.attributes.galleryConfig;
      return result;
    },
    defaults: {
      tagName: 'div',
      traits: [{
        label: 'Gallery config',
        name: 'galleryConfig',
        changeProp: 1,
      }],
      classes: 'duel-gallery-container',
      galleryConfig: '',
      unstylable: getSectorProps('basicText'),
      content: `
        <div id="duelvision-component" style="width: 100%;"></div>
      `,
      script: `
        const config = '{[ galleryConfig ]}';
        this.querySelector('#duelvision-component').innerHTML = '';
        if (config) {
          try {
            const parsed = JSON.parse(config);
            const loadGallery = () => {
              const assignVision = (o) => {
                (window.DuelVision.s = window.DuelVision.s || []).push(o);
              };
              window.DuelVision = window.DuelVision || assignVision;
              window.DuelVision.load(parsed);
            };
            if (!window.DuelVision) {
              const script = document.createElement('script');
              script.onload = loadGallery;
              script.src = 'https://vision.duel.me/loader.js';
              document.body.appendChild(script);
            } else {
              loadGallery();
            }
          } catch (error) {
            console.error('Failed loading Duel gallery');
          }
        }`,
    },
  },
  view: {
    init() {
      this.listenTo(this.model, 'change:galleryConfig', () => {
        const component = editor.getSelected();
        const galleryConfig = component.getTrait('galleryConfig').props().value;
        component.setAttributes({ galleryConfig });
        this.updateScript();
      });
    },
    onRender: ({ el }) => {
      el.style.minHeight = '200px';
      el.style.width = '100%';
      const button = document.createElement('button');
      button.innerText = 'Select Gallery (this button won\'t be rendered on your site)';
      button.addEventListener('click', () => {
        editor.runCommand('show-traits');
        editor.stopCommand('show-layers');
        editor.stopCommand('show-styles');
        editor.stopCommand('show-fonts');
      });
      el.insertBefore(button, el.firstChild);
    },
  },
});

export default {
  name: 'duel-gallery-container',
  definition: (editor) => definition(editor),
};
