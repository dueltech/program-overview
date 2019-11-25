import { getSectorProps } from '../styleManager';

const definition = {
  isComponent: (el) => el.tagName === 'H2',
  model: {
    defaults: {
      tagName: 'h2',
      name: 'Title',
      stylable: getSectorProps('basicText'),
    },
  },
};

export default {
  name: 'title',
  definition,
};
