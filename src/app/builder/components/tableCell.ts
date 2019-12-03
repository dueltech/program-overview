import { createCol, createRow } from '../blocks/basic/table';

export const onSelect = (model) => {
  const toolbar = model.getEl().querySelector('.cell-toolbar');
  toolbar.style.display = 'block';
};

export const onDeselect = (model) => {
  const toolbar = model.getEl().querySelector('.cell-toolbar');
  toolbar.style.display = 'none';
};

const definition = {
  extend: 'cell',
  view: {
    events: {
      'click .insert-row': 'insertRow',
      'click .insert-col': 'insertColumn',
    },
    insertRow() {
      const selected = this.model;
      const rowComponent = selected.parent();
      const rowIndex = rowComponent.collection.indexOf(rowComponent);
      const cells = rowComponent.components().length;
      const rowContainer = rowComponent.parent();
      rowContainer.components().add(
        createRow(cells),
        { at: rowIndex + 1 },
      );
    },
    insertColumn() {
      const selected = this.model;
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
    },
    onRender({ el }) {
      const style = 'display:none;position:absolute;top:100%;';
      el.style.position = 'relative';
      el.insertAdjacentHTML('beforeend', `
      <div class="cell-toolbar">
        <button class="insert-row">Insert row below</button>
        <button class="insert-col">Insert column right</button>
      </div>
      `);
    },
  },
};

export default {
  name: 'cell',
  definition,
};
