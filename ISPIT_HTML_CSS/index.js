function izracunajBMI() {
    //DEFINIRANJE VARIJABLI IMENA VISINA I TEZINA KOJE POPRIMAJU VRIJEDNOST UNOSA U HTML DOKUMENT
    var visina = parseFloat(document.getElementById("visina").value);
    var tezina = parseFloat(document.getElementById("tezina").value);
    
    //DEFINIRANJE VARIJABLE BMI KOJA POPRIMA VRIJEDNOST ZADANE JEDNADZBE
    var bmi = tezina/((visina/100) * (visina/100));
    
    //DOHVACAMO ELEMNT HTML-A KOJEMU SMO ZADALI ID REZULTAT I MIJENJAMO MU VRIJEDNOST U ODNOSU NA REZULTAT JEDNADZBE
    document.getElementById("rezultat").innerText = "Vaš BMI indeks je: " + bmi.toFixed(2);
    
    //KONTROLA TOKA KOJA ODLUCUJE O KATEGORJI U KOJU OSOBA SPADA U ODNOSU NA NJEGOVU/NJEZINU TEZINU I VISINU
    if(bmi < 20) {
        document.getElementById("kategorizacija").innerText = "Kategorizacija: Pothranjenost";
        //MIJENJA BOJU ELEMENTA U HTML KODU
        document.getElementById("kategorizacija").style = "color: #4f04d1";
    }
    else if (bmi > 20 && bmi < 25) {
        document.getElementById("kategorizacija").innerText = "Kategorizacija: Idealna težina";
        document.getElementById("kategorizacija").style = "color: #42d104";
    }
    else if (bmi > 25 && bmi < 30) {
        document.getElementById("kategorizacija").innerText = "Kategorizacija: Prekomjerena tjelesna masa";
        document.getElementById("kategorizacija").style = "color: #d18604";
    }
    else {
        document.getElementById("kategorizacija").innerText= "Kategorizacija: Pretilost";
        document.getElementById("kategorizacija").style = "color: #b50000";
    }
}