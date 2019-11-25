import { getSectorProps } from '../../styleManager';

const definition = {
  label: 'Header',
  category: { id: 'advanced', label: 'Advanced' },
  content: {
    tagName: 'header',
    draggable: '#builder-container',
    stylable: getSectorProps('decorations'),
    components: '<h2>Main title</h2>',
  },
};

export default {
  name: 'header',
  definition,
};
