import {expect} from 'chai';
import assert from 'node:assert'
import {validateProperty} from "../Serie1_ex123.js";
import {validateProperties} from "../Serie1_ex123.js";
import { associateWithPrototypeTest } from '../Serie1_ex4.js';
import { checkUsersValid } from '../Serie1_ex5.js';
import { Spy } from '../Serie1_ex6.js';


const validator1 = {name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"]  }
const validator2 = {name : "p2" , validators: [s => typeof s == 'string' && s.length == 2, s => s[0]=="c"]  }

const validators = [
    {
    name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"] 
    },
    {
    name : "p2" , validators: [s => Number.isInteger(s)] 
    }
]

let array1 = ["one", "two", "three", "four"]
let array2 = ["one", "two", "one", "three", "four", "one"]
let array3 = ["two", "two", "two", "two"]
let array4 = ['2', '4', '7', '10']

const obj1 = { p1 : "a" }
const obj2 = { p1 : 123  }
const obj3 = { p1 : "abc" , p2 : 123 }
const obj4 = { p2: "b" }
const obj5 = { p2: "cv" }

var goodUsers1 = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
]

var goodUsers2 = [
    { id: 5 },
    { id: 7 },
    { id: 9 }
] 

describe('Exerc1 tests', () => {
    it('obj1_val1', () => {
        expect(validateProperty(obj1,validator1)).to.equal(false);
    })
    it('obj1_val2', () => {
        expect(validateProperty(obj1,validator2)).to.equal(false);
    })
    it('obj3_val1', () => {
        expect(validateProperty(obj3,validator1)).to.equal(true);
    })
    it('obj3_val2', () => {
        expect(validateProperty(obj3,validator2)).to.equal(false);
    })
    it('obj5_val1', () => {
        expect(validateProperty(obj5,validator1)).to.equal(false);
    })
    it('obj5_val2', () => {
        expect(validateProperty(obj5,validator2)).to.equal(true);
    })
})



describe('Exerc2 tests', () => {
    it('obj1', () => {
    assert.deepEqual(validateProperties(obj1,validators), ["p1", "p2"])
    }
    )
    it('obj2', () => {
        assert.deepEqual(validateProperties(obj2,validators), ["p1", "p2"])
        }
    )
    it('obj3', () => {
        assert.deepEqual(validateProperties(obj3,validators), [])
        }
    )
    it('obj4', () => {
        assert.deepEqual(validateProperties(obj4,validators), ["p1", "p2"])
        }
    )
})

describe('Exerc3 tests', () => {
    it('obj1', () => {
        assert.deepEqual(obj1.validateProperties(validators), ["p1", "p2"])
        }
        )
    it('obj2', () => {
        assert.deepEqual(obj2.validateProperties(validators), ["p1", "p2"])
        }
    )
    it('obj3', () => {
        assert.deepEqual(obj3.validateProperties(validators), [])
        }
    )
    it('obj4', () => {
        assert.deepEqual(obj4.validateProperties(validators), ["p1", "p2"])
        }
    )    
})

describe('Exerc4 tests', () => {
    it('array1', () => {
        assert.deepEqual(associateWithPrototypeTest(array1,  str => str.length ), { one: 3, two: 3, three: 5, four: 4})
        }
    )
    it('array2', () => {
        assert.deepEqual(associateWithPrototypeTest(array2,  str => str.length ), {  two: 3, three: 5, four: 4, one: 3})
        }
    )
    it('array3', () => {
        assert.deepEqual(associateWithPrototypeTest(array3,  str => str.length ), { two: 3})
        }
    )
    it('array4', () => {
        assert.deepEqual(associateWithPrototypeTest(array4,  num => num*2 ), { 2: 4, 4: 8, 7: 14, 10: 20})
        }
    )
})

describe('Exerc5 tests', () => {
    var testAllValid1 = checkUsersValid(goodUsers1)
    var testAllValid2 = checkUsersValid(goodUsers2)
    it('goodUsers1_validUsers', () => {
        expect(testAllValid1([{ id: 2 }, { id: 1 }])).to.equal(true);
    })
    it('goodUsers1_invalidUsers', () => {
        expect(testAllValid1([{ id: 2 }, { id: 4 }, { id: 1 }])).to.equal(false);
    })
    it('goodUsers2_validUsers', () => {
        expect(testAllValid2([{ id: 7 }, { id: 5 }])).to.equal(true);
    })
    it('goodUsers2_invalidUsers', () => {
        expect(testAllValid2([{ id: 2 }, { id: 1 }])).to.equal(false);
    })
})

describe('Exerc6 tests', () => {
    var spy = Spy(console, 'error')
    console.error('calling console.error')
    console.error('calling console.error')
    console.error('calling console.error')
    console.error('calling console.error')
    console.error('calling console.error')
    console.error('calling console.error')
    it('spy', () => {
        assert.deepEqual(spy.count, 6)
        }
    )
})
