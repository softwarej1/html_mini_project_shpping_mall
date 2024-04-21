// ---------------- 키보드 클릭 시 evnet ------------------------
function keyInit(keyNum){
    // keyNum -> 13번 : Enter
    if(keyNum === 13){
        login();
    }
}

// ----------------------- 로그인 ----------------------------------
/*
    저장된 회원정보를 받아 입력한 정보와 일치하는지 확인
*/

function login(){
    let email = document.getElementById("login_email_input");
    let password = document.getElementById("login_password_input");

    let storageEmail = localStorage.getItem("email");
    let storagePassword = localStorage.getItem("password");
    let storageName = localStorage.getItem("LoginName");

    let vEmailArr = storageEmail.split(",");
    let vPasswordArr = storagePassword.split(",");
    let vNameArr = storageName.split(",");

    for(let idx = 0; idx < vEmailArr.length; idx++){
        // email.value, password.value가 저장된 회원 정보 EmailArr[], PasswordArr[]와 일치하는지
        if(email.value === vEmailArr[idx] && password.value === vPasswordArr[idx]){
            alert(vNameArr[idx] + "님 환영합니다.");
        }
    }

    window.location.href = "../index.html";
}