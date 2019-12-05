const definition = {
  label: 'Link',
  category: { id: 'basic', label: 'Basic' },
  content: {
    name: 'Link',
    tagName: 'a',
    type: 'link',
    editable: true,
    components: [{
      type: 'textnode',
      content: 'Link',
    }],
  },
};

export default {
  name: 'link',
  definition,
};
