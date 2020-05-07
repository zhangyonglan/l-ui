import Button from './button';
import Icon from './icon';
import searchButton from './searchButton';
import resetButton from './resetButton';
import listSearch from './listSeach';
const components = [Button, Icon, listSearch];


const install = function (Vue) {
    if (install.installed) return;
    components.map(component => Vue.component(component.name, component));
}

export default install;