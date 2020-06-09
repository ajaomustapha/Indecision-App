var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);


let nameLet = 'Anna';
nameLet = 'Maximillian'
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

//Block Scoping

var  fullName = 'Ajao Mustapha'

if (fullName) {
    const firstName = fullName.split(' ')[0]
    console.log(firstName);
}

console.log(firstName);