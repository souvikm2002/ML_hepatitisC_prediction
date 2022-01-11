function onClickedPredictDisease(){
    console.log("Predict disease button clicked");
    var age = document.getElementById("uiAge");
    var sex = document.getElementById("uiGender");
    var alb = document.getElementById("uiAlb");
    var alp = document.getElementById("uiAlp");
    var alt = document.getElementById("uiAlt");
    var ast = document.getElementById("uiAst");
    var bil = document.getElementById("uiBil");
    var che = document.getElementById("uiChe");
    var chol = document.getElementById("uiChol");
    var crea = document.getElementById("uiCre");
    var ggt = document.getElementById("uiGgt");
    var prot = document.getElementById("uiProt");
    var preDis = document.getElementById("uiPredictedDisease");
  
    var url = "http://127.0.0.1:5000/predict_disease"; //Use this if you are NOT using nginx
    // var url = "/api/predict_disease";               // Use this if  you are using nginx.
  
    $.post(url, {
        age : parseInt(age.value),
        alb : parseFloat(alb.value),
        alp : parseFloat(alp.value),
        alt : parseFloat(alt.value),
        ast : parseFloat(ast.value),
        bil : parseFloat(bil.value),
        che : parseFloat(che.value),
        chol : parseFloat(chol.value),
        crea : parseFloat(crea.value),
        ggt : parseFloat(ggt.value),
        prot : parseFloat(prot.value),
        sex : sex.value

    },function(data, status) {
        console.log(data.predicted_disease);
        preDis.innerHTML = "<h2>" + data.predicted_disease.toString() + " </h2>";
        console.log(status);
    });
}

var btn = document.getElementById("pre_submit");
btn.addEventListener("click", function() {
	//Do something here
    onClickedPredictDisease();
}, false);
