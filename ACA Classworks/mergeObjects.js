function merge() {
    let mergedObject = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        for (let key in obj) { mergedObject[key] = obj[key];}
    }
    // for (let attrname in obj) { mergedObject[attrname] = obj[attrname]; }
    // for (let attrname in obj2) { mergedObject[attrname] = obj2[attrname]; }
    return mergedObject;
}
console.log(merge({name: 'John'}, {age: 30},{city: 'New York'}, {salary: '$1000'}));
// console.log(merge({name: 'John'}, {name: 'Sara'}));