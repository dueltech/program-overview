import { getSectorProps } from '../styleManager';
const definition = {
  model: {
    defaults: {
      tagName: 'div',
      draggable: false,
      droppable: true,
      removable: false,
      unstylable: getSectorProps('basicText'),
      classes: 'builder-container',
    },
  },
  view: {
    onRender: ({ el }) => {
      el.style.height = '100%';
    },
  },
};

export default {
  name: 'container',
  definition,
};
