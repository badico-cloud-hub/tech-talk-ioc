import dep1 from '../xx/xx/'
import dep2 from '../xx/xx/'

const dep3 = dep2(dep1, {
    configParam: true,
})
// reutilizada em 3 ou quatro controllers

export function controller(param1, param2){
   return dep3.action(param1, param2);
} 
