import { factoryController } from './B v1-factory';
import dep1 from '../xx/xx/'
import dep2 from '../xx/xx/'

const controller = factoryController(dep2(dep1, {
    configParam: true,
}));

function handler(event, context, callback) {    
    if (isProtected() && event.headers.authorization) {
        return callback(null, JSON.stringify({
            message: 'You are not authorized! Please refresh your credentials'
        })) 
       
    }
    const response = controller(event, context);
    return callback(null, JSON.stringify({
        message: 'You are authorized',
        payload: response
    }));
}
