import basicActions from './basicActions';
import devices from './devices';
import panelSwitcher from './panelSwitcher';
import table from './table';

const commands = [basicActions, devices, panelSwitcher, table];

export default [].concat(...commands);
