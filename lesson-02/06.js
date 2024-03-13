let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
console.log(passportWithAddress)
const newPassport = structuredClone(passportWithAddress)
newPassport.address.city = 'Bobryisk'
console.log(newPassport)