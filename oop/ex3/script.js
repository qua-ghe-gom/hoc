// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbeK9Jl9FaE6rxW80CZKOriP8YSow00jc",
    authDomain: "lop12-3c6b1.firebaseapp.com",
    projectId: "lop12-3c6b1",
    storageBucket: "lop12-3c6b1.appspot.com",
    messagingSenderId: "584981815190",
    appId: "1:584981815190:web:800bf1b365b8ad2bbf87b7"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// khai báo auth và data cho host
const auth=firebase.auth();
const database=firebase.database();

function register(){
    let email=document.querySelector('#email').value;
    let username=document.querySelector("#username").value;
    let password=document.querySelector('#password').value;


    if(validateEmail(email)==false||validatePassword(password)==false){
        alert("email or password is invalind!!!");
        return;
    }
    if(validateField(username)==false||validateField(email)==false){
        alert("one or more field is null");
        return;
    }
    auth.createUserWithEmailAndPassword(email, password)
        .then(()=>{
            //khai báo biến user
            let user=auth.currentUser;
            //khai báo database để thêm user
            let database_ref =database.ref();

            //tạo object chứa dữ liệu user
            let user_data={
                email: email,
                username:username,
                password:password,
                last_login: Date.now(),

            };
            //thêm user vào database
            database_ref.child('users/'+user.uid).set(user_data);
            alert('Đăng ký thành công');
        })
        .catch(error => {
            let error_code = error.code;
            let error_message = error.message;
          });
}


function validateEmail(email){
    let expression= /^[^@]+@\w+(\.\w+)+\w$/;
    if(expression.test(email)==true){
        //email có tên miền
        return true;
    }else{
        //email k có tên miền
        return false;
    }
}
function validatePassword(password){
    if (password.length >= 6) {
        return true; // Mật khẩu hợp lệ
      } else {
        return false; // Mật khẩu không đạt yêu cầu
      }
}

function validateField(field){
    if(field==null){
        return false;
    }
    if(field.length<=0){
        return false;
    }
    else{
        return true;
    }
}