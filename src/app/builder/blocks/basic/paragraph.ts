const definition = {
  label: 'Paragraph',
  category: { id: 'basic', label: 'Basic' },
  content: {
    name: 'Paragraph',
    tagName: 'div',
    editable: true,
    type: 'default',
    components: [{
      type: 'text',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    }],
  },
};

export default {
  name: 'paragraph',
  definition,
};
