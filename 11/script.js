function checkNumber() {
    let num = document.getElementById('number').value;
    let result = document.getElementById('result');
    let value = document.getElementById('inputValue');
    result.innerHTML = '';

    try {
        if (num == "") throw 'empty';
        if (isNaN(num)) throw 'not a number';
        num = Number(num); // convert to number
        if (num < 0) throw 'negative';
        if (num > 10) throw 'exceeded';
    } catch (err) {
        result.innerHTML = 'Input is ' + err;
    } finally {
        value.innerHTML = 'Input is ' + num;
    }
}