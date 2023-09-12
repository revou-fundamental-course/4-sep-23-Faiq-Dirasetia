function hitungLuasKeliling(){

    var Sisi = parseInt (document.getElementById("Sisi").value);
    document.getElementById("result1").innerHTML="L = S x S ";
    var Luas = Sisi * Sisi;
    document.getElementById("result2").innerHTML="L = " + Sisi + "x" + Sisi;
    var total = Luas;
    document.getElementById("result3").innerHTML="L = " + total;
}

function reset(){
    var reset = document.getElementById("hasil");
    var resetresult = document.getElementById("result1");
    element.reset();
}