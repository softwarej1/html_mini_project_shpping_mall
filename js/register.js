// ---------------- 키보드 클릭 시 evnet ------------------------
function keyInit(keyNum){
    if(keyNum === 13){
        submit();
    }
}

// ---------------- 회원 가입 버튼 ---------------------------
/*
    회원 정보 입력 시 localStorage에 email, password, name, phone 정보를 저장
*/
function submit(){
    let email = document.getElementById("register_email_input"); // 이메일
    let password = document.getElementById("register_password_input"); // 패스워드
    let againPassword = document.getElementById("register_again_password_input"); // 패스워드 재입력
    let name = document.getElementById("register_name_input"); // 이름
    let phone = document.getElementById("register_phone_input"); // 폰 번호
   
    // 이메일 length가 0일 시
    if(email.value.length === 0){
        alert("이메일을 입력해주세요.");
        email.focus();
        return; 
    }
    
    // 패스워드의 길이가 7자리 이하일 시
    if(password.value.length <= 7){
        alert("비밀번호를 8자리 이상 다시 입력해주세요.");
        password.select();
        return; 
    }
    
    // password와 재입력된 패스워드의 value가 같지 않을 시
    if(password.value !== againPassword.value){
        alert("비밀번호와 맞지 않습니다.");
        againPassword.select();
        return; 
    }
    
    // 이름의 value 길이가 1보다 작거나 같을 시
    if(name.value.length < 1){
        alert("2글자 이상 입력해주세요.");
        name.focus();
        return; 
    }
    
    // phonePattern Ex ] 010 - 0000 - 0000
    // .test() -> 정규 표현식 메서드 -> 패턴이 일치 시 true 아닐 시 false 반환
    let phonePattern = /^\d{3}-\d{4}-\d{4}$/;
    if(!phonePattern.test(phone.value)){
        alert("전화번호를 입력해주세요.");
        phone.focus();
        return;
    }

    let emailData = localStorage.getItem("email");
    let passwordData = localStorage.getItem("password");
    let nameData = localStorage.getItem("LoginName");
    let phoneData = localStorage.getItem("phone");

    // emailData, passwordData, nameData, phoneData 가 없을 시 Exception 처리 -> emailData = ""
    if(emailData === null) {
        emailData = "";
    }
    if(passwordData === null) {
        passwordData = "";
    }
    if(nameData === null) {
        nameData = "";
    }
    if(phoneData === null) {
        phoneData = "";
    }

    // split(",") -> 배열로 변환
    let emailArr = emailData.split(",");
    let passwordArr = passwordData.split(",");
    let nameArr = nameData.split(",");
    let phoneArr = phoneData.split(",");

    for(let idx = 0; idx < emailArr.length; idx++){
        if(emailArr[idx] === email.value){
            alert("같은 계정의 이메일이 존재합니다.");
            return;
        }
    }

    // emailArr.push() -> value 뒤에 넣기
    emailArr.push(email.value);
    passwordArr.push(password.value);
    nameArr.push(name.value);
    phoneArr.push(phone.value);

    // emailArr.join(",") -> 다시 배열을 문자열로
    let emailStr = emailArr.join(",");
    let passwordStr = passwordArr.join(",");
    let nameStr = nameArr.join(",");
    let phoneStr = phoneArr.join(",");

    localStorage.setItem("email", emailStr);
    localStorage.setItem("password", passwordStr);
    localStorage.setItem("LoginName", nameStr);
    localStorage.setItem("phone", phoneStr);

    alert(name.value + "님 회원가입이 완료 되었습니다.");
    window.location.href = "./login.html";
}