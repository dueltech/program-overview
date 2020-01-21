const sectors = [{
  id: 'basicText',
  name: 'Basic Text',
  buildProps: ['color', 'font-size', 'font-family', 'text-align', 'line-height', 'letter-spacing', 'font-weight', 'text-transform'],
}, {
  id: 'decorations',
  name: 'Decorations',
  buildProps: ['background-color', 'background-image', 'border', 'border-radius'],
}, {
  id: 'dimensions',
  name: 'Dimensions',
  buildProps: ['width', 'height', 'max-width', 'max-height', 'margin', 'padding', 'box-sizing'],
}, {
  id: 'layout',
  name: 'Layout',
  buildProps: ['display', 'justify-content', 'align-items', 'flex-direction', 'flex-wrap', 'flex-grow', 'top', 'bottom', 'left', 'right'],
  // buildProps: ['display', 'justify-content', 'align-items', 'flex-direction', 'flex-wrap', 'top', 'bottom', 'left', 'right'],
  open: false,
}];

export const getSectorProps = (sectorId: string) => {
  const sector = sectors.find(({ id }) => id === sectorId);
  return sector ? sector.buildProps : null;
};

export default {
  appendTo: '.styles-container',
  sectors,
  clearProperties: 1,
};
