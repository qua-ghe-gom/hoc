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

//xác thực ẩn danh
function registerAnonymously() {
    firebase.auth().signInAnonymously()
      .then((userCredential) => {
        // Xác thực thành công
        let user = userCredential.user;
        console.log("Đăng ký ẩn danh thành công. User ID: " + user.uid);
        alert("Đã đăng ký thành công")
        // Tiếp tục xử lý sau khi xác thực thành công
      })
      .catch((error) => {
        // Xảy ra lỗi trong quá trình xác thực
        console.error("Lỗi đăng ký ẩn danh: " + error.message);
      });
  }



  // Thay đổi hàm registerAnonymously thành hàm registerWithFacebook
function registerWithFacebook() {
    // Tạo một nhà cung cấp xác thực Facebook
    var provider = new firebase.auth.FacebookAuthProvider();

    // Thực hiện xác thực sử dụng nhà cung cấp Facebook
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        // Xác thực thành công, bạn có thể truy cập thông tin người dùng ở result.user
        console.log(result.user);
    })
    .catch(function(error) {
        // Xảy ra lỗi trong quá trình xác thực
        console.error(error);
    });
  }
