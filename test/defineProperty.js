var Test = {}
Object.defineProperty(Test, 'hasUser', {
    configurable:false,
    enumerable:false,
    value:true,
    writable:false
})

Test.hasUser ='1'
delete Test.hasUser

console.log('--',Test.hasUser)