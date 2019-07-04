function shuffleArray(array) { //generate randm numbers
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
    return array.slice(0, 4).join('');
};

var numbers = [0,1,2,3,4,5,6,7,8,9];
var secret_number = shuffleArray(numbers);
console.log( secret_number ); //Cada que se cargue la pag aparece un num random

function validate(new_number, marray) {//entra el mnumero del user y lo revisa
    var isnum = /^\d+$/.test(new_number); //comprueba q lo escrito sean numeros
    if ((new_number.length != 4) || (marray[0] === marray[1] || marray[1] === marray[2] || marray[2] === marray[3] || marray[3] === marray[4]) || (isnum === false)) {
        $('.error').css("color", "red");
    } else {
        $('.error').css("color", "white");
        haveFourDigits(new_number, secret_number);
    };
};