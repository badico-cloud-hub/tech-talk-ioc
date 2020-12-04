import { factoryControllerA } from './B v1-factory';
import { factoryControllerB } from './B v1-factory';
import dep1 from '../xx/xx/'
import dep2 from '../xx/xx/'

const controllerA = factoryControllerA(dep2(dep1, {
    configParam: true,
}));

const controllerB = factoryControllerB(dep2(dep1, {
    configParam: false,
}));

// se o numero de controllers aumentam aqui... bom, ja vira uma bagunca

function handlerA(event, context, callback) {    
    if (isProtected() && event.headers.authorization) {
        return callback(null, JSON.stringify({
            message: 'You are not authorized! Please refresh your credentials'
        })) 
       
    }
    const response = controllerA(event, context);
    return callback(null, JSON.stringify({
        message: 'You are authorized',
        payload: response
    }));
}

function handl  erB(event, context, callback) {    
    if (isProtected() && event.headers.authorization) {
        return callback(null, JSON.stringify({
            message: 'You are not authorized! Please refresh your credentials'
        })) 
       
    }
    const response = controllerB(event, context);
    return callback(null, JSON.stringify({
        message: 'You are authorized',
        payload: response
    }));
}

