import { getSectorProps } from '../styleManager';

const definition = {
  model: {
    defaults: {
      tagName: 'div',
      name: 'Icons Container',
      unstylable: getSectorProps('basicText'),
      classes: 'icons',
      traits: [{
        type: 'checkbox',
        name: 'mobile-2',
        label: 'Force 2 columns on mobile'
      }]
    },
  },
};

export default {
  name: 'icons-container',
  definition,
};
