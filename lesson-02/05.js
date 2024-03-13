let passport = {
    name: "Petr",
    surname: "Petrov",
};
console.log(passport.name)

const newPassport = passport
newPassport.name = 'Ivan'

console.log(newPassport.name)