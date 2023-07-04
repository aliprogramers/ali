function hz() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let result = Number(num1) + Number(num2)
    console.log(result);
    document.getElementById('result').innerHTML = result
}
function x() {
    let inputs2 = document.getElementById('inputs').value
    let inputs = document.getElementById('inputs2').value
    let result = Number(inputs) - Number(inputs2)
    alert(result)
}
function x2() {
    let inputs2 = document.getElementById('inputs').value
    let inputs = document.getElementById('inputs2').value
    let result = Number(inputs) + Number(inputs2)
    alert(result)
}
function x1() {
    let inputs2 = document.getElementById('inputs').value
    let inputs = document.getElementById('inputs2').value
    let inputs3 = document.getElementById('inputs3').value
    let result = Number(inputs) * Number(inputs2)
    alert(result)
}
function x3() {
    let inputs2 = document.getElementById('inputs').value
    let inputs = document.getElementById('inputs2').value
    let inputs3 = document.getElementById('inputs3').value
    let result = Number(inputs) / Number(inputs2)
    alert(result)
}

