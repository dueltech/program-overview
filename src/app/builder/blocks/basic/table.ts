export const createCol = (head: boolean = false) => ({
  tagName: head ? 'th' : 'td',
  type: 'cell',
  components: '<span>Text</span>',
});

export const createRow = (cells: number, head: boolean = false) => ({
  tagName: 'tr',
  type: 'row',
  components: Array(cells).fill(createCol(head)),
});

const definition = {
  label: 'Table',
  category: { id: 'basic', label: 'Basic' },
  content: {
    tagName: 'table',
    type: 'table',
    components :  [{
      tagName: 'thead',
      type: 'thead',
      components: createRow(4, true),
    }, {
      tagName: 'tbody',
      type: 'tbody',
      components: createRow(4),
    }],
  },
};

export default {
  name: 'table',
  definition,
};
