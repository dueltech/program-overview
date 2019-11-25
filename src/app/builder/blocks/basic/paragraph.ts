import { getSectorProps } from '../../styleManager';

const definition = {
  label: 'Paragraph',
  category: { id: 'basic', label: 'Basic' },
  content: {
    stylable: getSectorProps('basicText'),
    tagName: 'p',
    type: 'text',
    components: [{
      type: 'textnode',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    }],
  },
};

export default {
  name: 'paragraph',
  definition,
};
