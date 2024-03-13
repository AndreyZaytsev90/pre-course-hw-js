let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

const newPassportWithAddress = structuredClone(passportWithAddress)
newPassportWithAddress.address.city = 'Bobryisk'

console.log(passportWithAddress)
console.log(newPassportWithAddress)