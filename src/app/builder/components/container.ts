const definition = {
  model: {
    defaults: {
      tagName: 'div',
      draggable: false,
      droppable: true,
      stylable: false,
      removable: false,
      selectable: false,
    },
  },
  view: {
    onRender: ({ el }) => {
      console.log(el);
      el.style.height = '100%';
    },
  },
};

export default {
  name: 'container',
  definition,
};
