import { createCol, createRow } from '../blocks/basic/table';

export default [
  {
    id: 'new-row',
    run(editor) {
      const selected = editor.getSelected();
      if (selected.is('cell')) {
        const rowComponent = selected.parent();
        const rowIndex = rowComponent.collection.indexOf(rowComponent);
        const cells = rowComponent.components().length;
        const rowContainer = rowComponent.parent();
        rowContainer.components().add(
          createRow(cells),
          { at: rowIndex + 1 },
        );
      }
    }
  },
  {
    id: 'new-column',
    run(editor) {
      const selected = editor.getSelected();
      if (selected.is('cell')) {
        const colIndex = selected.collection.indexOf(selected);
        const table = selected.closest('table');
        const headRows = table.find('thead > tr').map((row) => ({ row, head: true }));
        const bodyRows = table.find('tbody > tr').map((row) => ({ row, head: false }));
        const rows = headRows.concat(bodyRows);
        rows.forEach(({ row, head }) => {
          row.components().add(
            createCol(head),
            { at: colIndex + 1 },
          );
        });
      }
    }
  },
];
