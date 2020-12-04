function handler(event, context, callback) {
    const protected = process.env[`IS_PROTECTED`];
    const isProtected = () => !!protected;
    
    if (isProtected() && event.headers.authorization) {
        return callback(null, JSON.stringify({
            message: 'You are not authorized! Please refresh your credentials'
        })) 
       
    }
    return callback(null, JSON.stringify({
        message: 'You are authorized'
    }))
} 