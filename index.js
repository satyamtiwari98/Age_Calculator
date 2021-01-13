function ageCalculator() {
    var y = 2;
    var x = parseFloat(document.getElementById("input1").value);
    var a = Number((document.getElementById("select1").value));
    x = x + a / 12;
    console.log(typeof x);
    console.log(x);

    if (x >= 21) {
        x = x - 21;
        let r = x / 4;
        r = r + 2;
        console.log(r);
        ageCalculatorExtended(r);
    }

    else if (x < 21) {
        x = x / 10.5;
        ageCalculatorExtended(x);

    }
}

function ageCalculatorExtended(x) {
    let y = (parseInt(x))
    console.log(y)
    let m = x - y
    m = m * 12
    let z = (parseInt(m))
    console.log(z)
    let d = m - z
    d = d * 30;
    d = Math.ceil(d);
    document.getElementById("year1").value = ` ${y} year ${z} month ${d} days`;

}

function clear() {
    document.getElementById("input1").value = "";
    document.getElementById("year1").value = "";
}