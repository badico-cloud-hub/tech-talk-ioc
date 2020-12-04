const protected = process.env[`IS_PROTECTED`];
const isProtected = () => !!protected;

function handler(event, context, callback) {    
    if (isProtected() && event.headers.authorization) {
        return callback(null, JSON.stringify({
            message: 'You are not authorized! Please refresh your credentials'
        })) 
       
    }
    return callback(null, JSON.stringify({
        message: 'You are authorized'
    }))
} 