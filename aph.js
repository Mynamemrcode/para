var inputs=[];
function get1() {
for(var i=1; i<5 ; i++) {
    inputs.push(document.getElementById("input_"+i).value);
}
document.getElementById("show1").innerHTML = inputs.join(". ");
}
var inputsr=[];
function get2() {
for(var j=1; j<5 ; j++) {
    inputsr.push(document.getElementById("input"+j).value);
}
document.getElementById("show2").innerHTML = inputsr.join(". ");
}