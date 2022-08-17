function geeks() {

    var demo = document.getElementById("car");
    demo.style.color = "green";

    let para = document.getElementById("bike");
    para.style.backgroundColor = "grey";

    let myNewPara = document.createElement("p");
    let paraText = document.createTextNode(`Vinay is a dev`);
    myNewPara.appendChild(paraText);

    document.body.appendChild(myNewPara);

}
