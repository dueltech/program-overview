import { getSectorProps } from '../../styleManager';

const definition = {
  label: 'Section',
  view: {
    onRender: ({ el }) => {
      el.style.height = '100%';
    },
  },
  category: { id: 'advanced', label: 'Advanced' },
  content: {
    tagName: 'section',
    draggable: '#builder-container',
    unstylable: getSectorProps('basicText'),
    components: '<h2>Section title</h2>'
  },
};

export default {
  name: 'section',
  definition,
};
