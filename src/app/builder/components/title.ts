import { getSectorProps } from '../styleManager';

const definition = {
  isComponent: (el) => el.tagName === 'H2',
  extend: 'text',
  model: {
    defaults: {
      tagName: 'h2',
      name: 'Title',
      editable: true,
      unstylable: getSectorProps('decorations'),
    },
  },
};

export default {
  name: 'title',
  definition,
};
