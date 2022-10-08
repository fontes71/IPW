export function Spy(obj, method){
    let spy = { count: 0  }
    let original = obj[method]
    obj[method] = function() {
        spy.count= spy.count+1
        return original.apply(obj)
    }
    return spy
}
