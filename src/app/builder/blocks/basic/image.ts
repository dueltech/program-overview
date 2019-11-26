import { getSectorProps } from '../../styleManager';

const definition = {
  label: 'Image',
  category: { id: 'basic', label: 'Basic' },
  content: {
    name: 'Image',
    unstylable: getSectorProps('basicText'),
    tagName: 'img',
    type: 'image',
    editable: true,
  },
};

export default {
  name: 'image',
  definition,
};
