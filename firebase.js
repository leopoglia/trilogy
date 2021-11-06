const firebaseConfig = {
    apiKey: "AIzaSyDExzgvyT17ijEfDmpjxXAvBAbKUf_LqKs",
    authDomain: "trilogy-cb06b.firebaseapp.com",
    projectId: "trilogy-cb06b",
    storageBucket: "trilogy-cb06b.appspot.com",
    messagingSenderId: "842501809889",
    appId: "1:842501809889:web:139e0214628a41412df9a0",
    measurementId: "G-28XYWPKP0L"
  };

var db = firebase.firestore();

function adicionarDados(email, senha){
    db.collection("trilogy").add({
        email: "email",
        senha:"senha"
    })
    
}