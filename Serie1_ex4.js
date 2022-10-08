Array.prototype.associateWith = function(transformation){
    const obj = {}
    this.forEach( element => {
        if (obj.hasOwnProperty(element))  delete obj[element]
        obj[element] = transformation(element)
        }
    )
return obj
}

//Not part of exercise 4. 
//This functions usage is to export the prototype in order for it to be tested in the tests file.
export function associateWithPrototypeTest(array, transformation) {
    return array.associateWith(transformation)
}