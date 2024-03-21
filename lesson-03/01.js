const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter((el) => {
        return el === 'черный' || el === 'желтый' || el === 'красный'
    }).join('-')
}

console.log(createColorString());

