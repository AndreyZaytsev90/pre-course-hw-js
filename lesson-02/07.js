let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
console.log(passportMarried)
let {name: newName, surname: newSurname, address: newAddress} = passportMarried;
let newPassportMarried = {
    name: newName,
    surname: newSurname,
    married: true,
    address: newAddress
};

console.log(newPassportMarried);