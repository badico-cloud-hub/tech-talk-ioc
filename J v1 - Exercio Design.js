const container = new container();


function controller(dep3, param1, param2){
    return dep3.action(param1, param2);
}
container.service('dep3', (c) => c.dep2(c.dep1, {
    configParam: true,
}));

// singleton
container.singleton(dep1);
container.singleton(dep2);
container.singleton(controller)