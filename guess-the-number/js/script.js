function checkNumber() {
    var input1 = document.getElementsByTagName("input")[0].value;
    var input2 = document.getElementsByTagName("input")[1].value;
    if (input1 != "" && input1 == input2) {
        alert(input1 + " = " + input2);
    } else if (input1 != "") {
        alert(input1 + " != " + input2);
    } else {
        alert("Please, type numbers to be compared!")
    }
    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[1].value = "";
}