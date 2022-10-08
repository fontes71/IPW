//1.
export function validateProperty(obj, propValidator){
    let p = obj[propValidator.name]
    return typeof p !=='undefined' && propValidator.validators.every((func) => func(p))
}

//2.
export function validateProperties(obj, propValidators){
    return propValidators.filter(val => !validateProperty(obj, val)).map(val => val.name)
}

//3.
Object.prototype.validateProperties = function(propValidators){return validateProperties(this, propValidators )}
