import basicActions from './basicActions';
import devices from './devices';
import panelSwitcher from './panelSwitcher';

const commands = [basicActions, devices, panelSwitcher];

export default [].concat(...commands);
