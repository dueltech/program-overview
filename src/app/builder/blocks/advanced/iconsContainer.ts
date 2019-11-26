import { getSectorProps } from '../../styleManager';

const definition = {
  label: 'Icons Container',
  category: { id: 'advanced', label: 'Advanced' },
  content: {
    name: 'Icons Container',
    tagName: 'div',
    unstylable: getSectorProps('basicText'),
    classes: 'icons',
  },
};

export default {
  name: 'iconsContainer',
  definition,
};
