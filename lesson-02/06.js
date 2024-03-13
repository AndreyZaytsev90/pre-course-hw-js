let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

const { name, surname, address } = passportWithAddress;
const copiedPassportWithAddress = {
    name,
    surname,
    address: { ...address }
};
copiedPassportWithAddress.address.city = 'Bobryisk'

console.log(passportWithAddress)
console.log(copiedPassportWithAddress)