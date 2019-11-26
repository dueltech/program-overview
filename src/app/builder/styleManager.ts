const sectors = [{
  id: 'basicText',
  name: 'Basic Text',
  buildProps: ['color', 'font-size', 'font-family', 'text-align', 'line-height', 'letter-spacing'],
}, {
  id: 'decorations',
  name: 'Decorations',
  buildProps: ['background-color', 'background-image', 'border', 'border-radius'],
}, {
  id: 'dimensions',
  name: 'Dimensions',
  buildProps: ['width', 'height', 'margin', 'padding', 'box-sizing'],
}];

export const getSectorProps = (sectorId: string) => {
  const sector = sectors.find(({ id }) => id === sectorId);
  return sector ? sector.buildProps : null;
};

export default {
  appendTo: '.styles-container',
  sectors,
};
