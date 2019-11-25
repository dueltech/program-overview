import { getSectorProps } from '../../styleManager';

const definition = {
  label: 'Header',
  category: { id: 'advanced', label: 'Advanced' },
  content: {
    tagName: 'header',
    draggable: '#builder-container',
    unstylable: getSectorProps('basicText'),
    components: '<h2>Main title</h2>',
  },
};

export default {
  name: 'header',
  definition,
};
