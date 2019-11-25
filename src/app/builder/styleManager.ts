const sectors = [{
  id: 'basicText',
  name: 'Basic Text',
  buildProps: ['color', 'font-size', 'font-family', 'text-align', 'line-height'],
}, {
  id: 'decorations',
  name: 'Decorations',
  buildProps: ['background-color', 'background-image'],
}];

export const getSectorProps = (sectorId: string) => {
  const sector = sectors.find(({ id }) => id === sectorId);
  return sector ? sector.buildProps : null;
};

export default {
  appendTo: '.styles-container',
  sectors,
};
