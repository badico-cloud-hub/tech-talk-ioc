import dep1 from '../xx/xx/'
import dep2 from '../xx/xx/'

function controller(dep3, param1, param2){
    return dep3.action(param1, param2);
}

const container = new container();

// register factory
container.register(controller);
container.service('dep3', (c) => c.dep2(c.dep1, {
    configParam: true,
}));

// singleton
container.service('dep1', () => dep1);
container.service('dep2', () => dep2);
container.service('controller', () => controller)