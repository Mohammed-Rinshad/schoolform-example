const firebaseConfig = {
    apiKey: "AIzaSyCGmzehIMxKChOaMmky_x2a68PQtA1Fkpw",
    authDomain: "formschool-2db2d.firebaseapp.com",
    databaseURL: "https://formschool-2db2d-default-rtdb.firebaseio.com",
    projectId: "formschool-2db2d",
    storageBucket: "formschool-2db2d.appspot.com",
    messagingSenderId: "739654459279",
    appId: "1:739654459279:web:fd16b23cd1a04cb894b5fa",
    measurementId: "G-E8TGCMCHW4"
  };

firebase.initializeApp(firebaseConfig)    

let formschool = document.getElementById('formschool')
let schoolformDB  = firebase.database().ref('formschool')

function save(){
    let si = document.getElementById('si.no').value
    let name = document.getElementById('name').value
    let amount = document.getElementById('amount').value
    savedbdata(si,name,amount)
}

let savedbdata = (si,name,amount) => {
    let newschoolformDB = schoolformDB.push()
    newschoolformDB.set({
        si : si,
        name : name,
        amount : amount
    })
}

/*const firebaseConfig = {
    apiKey: "AIzaSyA9SsMTQ70A3qd5OjR_c40Mgzae3itWfVU",
    authDomain: "schoolform2-b6a1d.firebaseapp.com",
    databaseURL: "https://schoolform2-b6a1d-default-rtdb.firebaseio.com",
    projectId: "schoolform2-b6a1d",
    storageBucket: "schoolform2-b6a1d.appspot.com",
    messagingSenderId: "217187318067",
    appId: "1:217187318067:web:91d155a3620ca706196646",
    measurementId: "G-KLZWN7LSYX"
  };
  firebase.initializeApp(firebaseConfig);

let schoolformDB = firebase.database().ref('schoolform2')
document.getElementById('schoolform2').addEventListener('submit',submitform)

function submitform(e){
     e.preventDefault()
     let name = getElementByVal('name')
     let amount = getElementByVal('amount')
    savedbdata(name,amount)
}

let savedbdata = (name,amount) => {
    let newschoolform = schoolformDB.push()
    newschoolform.set({
        name : name,
        amount: amount
    })
}

let getElementByVal = (id) =>{
    return document.getElementById(id).value
}*/