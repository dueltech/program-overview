import { getSectorProps } from '../styleManager';

const definition = {
  isComponent: (el) => el.tagName === 'H2',
  model: {
    defaults: {
      tagName: 'h2',
      name: 'Title',
      unstylable: getSectorProps('decorations'),
    },
  },
};

export default {
  name: 'title',
  definition,
};
