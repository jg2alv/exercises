const query = (e) => document.querySelector(e);
query("section div button").addEventListener("click", () => {
    let birthYear = query("section div p input").value;
    if (birthYear == "") { birthYear = 0 }
    const age = new Date().getFullYear() - birthYear;
    let sex = document.getElementsByName("sex");
    let status;
    if (sex[0].checked == true) {
        sex = "Male";
        if (age >= 0 && age < 10) {
            status = "Baby";
        } else if (age < 21) {
            status = "Young";
        } else if (age < 60) {
            status = "Adult";
        } else {
            status = "Elder";
        }
    } else {
        sex = "Female";
        if (age >= 0 && age < 10) {
            status = "Baby";
        } else if (age < 21) {
            status = "Young";
        } else if (age < 60) {
            status = "Adult";
        } else {
            status = "Elder";
        }
    }
    query("div:last-child").innerHTML = `<strong>${sex}, ${age} years old</strong><br><img src='img/${status}@${sex}.jpeg' alt='${status}@${sex}' style='border-radius: 50%;'>`;
})