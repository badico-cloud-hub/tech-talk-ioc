
export function controller(dep3, param1, param2){
   return dep3.action(param1, param2);
}

export function factoryController(dep3) {
    return (param1, param2) => controller(dep3, param1, param2)
}
