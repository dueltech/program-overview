import { getSectorProps } from '../../styleManager';

const definition = {
  label: 'Section',
  category: { id: 'advanced', label: 'Advanced' },
  content: {
    tagName: 'section',
    draggable: '.builder-container',
    unstylable: getSectorProps('basicText'),
    components: '<h2>Section title</h2>'
  },
};

export default {
  name: 'section',
  definition,
};
