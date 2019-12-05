const definition = {
  label: 'Button',
  category: { id: 'basic', label: 'Basic' },
  content: {
    name: 'Button',
    tagName: 'a',
    type: 'link',
    classes: 'button',
    editable: true,
    components: [{
      type: 'textnode',
      content: 'Button',
    }],
  },
};

export default {
  name: 'button',
  definition,
};
