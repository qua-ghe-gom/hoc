class Signup {
    constructor() {
        this.output = `<form action="#">
        <div class="mx-5 mt-5">
            <h2>Sign in</h2>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label for="mail" class="form-label">Email</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label for="cf-password" class="form-label">Confirm Password</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3 text-center">
                <button type="button" class="btn btn-dark">Register</button>
            </div>
        </div>
    </form>`;
    }
     checkUsername(param) {
        // Tên đăng nhập phải khác "admin"
        var username = param.value.trim();
        if (username.toLowerCase() === "admin") {
            alert('Tên đăng nhập không hợp lệ. Vui lòng chọn tên đăng nhập khác.');
            param.focus();
        } else {
            alert('OK rồi đây, Tên đăng nhập này hợp lệ.');
        }
    }
    

     checkEmail(param) {
        // Kiểm tra tên miền có phải là "@gmail.com"
        var email = param.value.trim();
        if (email.endsWith('@gmail.com')) {
            alert('OK rồi đây, Email này hợp lệ.');
        } else {
            alert('Hãy nhập địa chỉ email hợp lệ. Ví dụ: [email protected]');
            param.focus();
        }
    }
    
     checkPhone(param) {
        // Chỉ cho phép người dùng nhập dấu "+" và số
        var phone = param.value.trim();
        var phoneRegex = /^\+?\d+$/;
        if (phoneRegex.test(phone)) {
            alert('OK rồi đây, Số điện thoại này hợp lệ.');
        } else {
            alert('Hãy nhập số điện thoại hợp lệ. Chỉ cho phép dấu "+" và số.');
            param.focus();
        }
    }
    
     checkPassword(param) {
        // Mật khẩu phải gồm chữ cái và số
        var password = param.value.trim();
        var hasLetter = /[A-Za-z]/.test(password);
        var hasNumber = /\d/.test(password);
        if (hasLetter && hasNumber) {
            alert('OK rồi đây, Mật khẩu này hợp lệ.');
        } else {
            alert('Hãy nhập mật khẩu hợp lệ. Mật khẩu phải gồm chữ cái và số.');
            param.focus();
        }
    }
    
     checkConfirmPassword(passwordParam, confirmPasswordParam) {
        // 2 trường password phải giống nhau
        var password = passwordParam.value.trim();
        var confirmPassword = confirmPasswordParam.value.trim();
        if (password === confirmPassword) {
            alert('OK rồi đây, Xác nhận mật khẩu giống với mật khẩu đã nhập.');
        } else {
            alert('Xác nhận mật khẩu không khớp với mật khẩu đã nhập.');
            confirmPasswordParam.focus();
        }
    }

    check() {
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('mail');
        const phoneInput = document.getElementById('phone');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('cf-password');

        this.checkUsername(usernameInput);
        this.checkEmail(emailInput);
        this.checkPhone(phoneInput);
        this.checkPassword(passwordInput);
        this.checkConfirmPassword(passwordInput, confirmPasswordInput);
    }

}


let register_area = document.querySelector(".register_area");
let signupForm = new Signup();
register_area.innerHTML = signupForm.output;
