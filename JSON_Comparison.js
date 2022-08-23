
var objPerson1_Unord = {
    name: "Person 1",
    age: 24,
};

var objPerson2_Unord = {
    age: 24,
    name: "Person 1",
};

console.log('Unordered Object 1 :', objPerson1_Unord );
console.log('Unordered Object 2 :', objPerson2_Unord);

const objPerson1_Ord = {};
const objPerson2_Ord = {};


Object.keys(objPerson1_Unord).sort().forEach(key => {
    objPerson1_Ord[key] = objPerson1_Unord[key];
});

Object.keys(objPerson2_Unord).sort().forEach(key =>{
     objPerson2_Ord[key] = objPerson2_Unord[key];
});

console.log('Ordered Object 1 :', objPerson1_Ord);
console.log('Ordered Object 2 :', objPerson2_Ord);


if(JSON.stringify(objPerson1_Ord) == JSON.stringify(objPerson2_Ord))
{
    console.log('Both the Objects are having same keys & values');
}
else
{
    console.log('Not Same');
}