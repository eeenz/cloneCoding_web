// 로그인 탭 제목 클릭 시 해당 내용 활성화 js
// 0. (초기) 로그인내용O, 일회용내용X, QR코드내용X , id로그인 제목 활성화 (CSS에서 활성화는 처리했음)
// 1. ID로그인을 클릭하면 로그인내용O, 일회용내용X, QR코드내용X
// 2. 일회용번호 클릭하면 로그인내용X, 일회용내용O, QR코드내용X
// 3. QR코드 클릭하면 로그인내용X, 일회용내용X, QR코드내용O
// 제목 변수
const login_title = document.querySelectorAll('.login_title h2 a')
// 내용 변수
const id_login_container = document.querySelector('.login_container .id_login')
const disposable_login_container = document.querySelector('.login_container .disposable_login')
const qr_login_container = document.querySelector('.login_container .qr_login')
console.log(login_title,id_login_container,disposable_login_container,qr_login_container)

// 23/01/15 초기 일회용내용, QR코드 내용 숨기기
disposable_login_container.style.display = 'none';
qr_login_container.style.display = 'none';

// 23/01/16 초기값 ID로그인 탭 활성화 시키기(active) *클릭전
// 위에 작성된 login_title변수로
login_title[0].parentElement.classList.add('active')
/* 
새로운 변수 만든버전
const tap_h2 = document.querySelectorAll('.login_title h2')
tap_h2[0].classList.add('active') 
*/

// 2. 일회용번호 클릭하면 로그인내용X, 일회용내용O, QR코드내용X
login_title[1].addEventListener('click', ()=>{
    id_login_container.style.display = 'none';
    disposable_login_container.style.display = 'block';
    qr_login_container.style.display = 'none';
    login_title[0].parentElement.classList.remove('active')
    login_title[1].parentElement.classList.add('active')
    login_title[2].parentElement.classList.remove('active')
})
// 3. QR코드 클릭하면 로그인내용X, 일회용내용X, QR코드내용O
login_title[2].addEventListener('click',()=>{
    id_login_container.style.display = 'none';
    disposable_login_container.style.display = 'none';
    qr_login_container.style.display = 'block';
    login_title[0].parentElement.classList.remove('active')
    login_title[1].parentElement.classList.remove('active')
    login_title[2].parentElement.classList.add('active')
})
// 1. ID로그인을 클릭하면 로그인내용O, 일회용내용X, QR코드내용X
login_title[0].addEventListener('click',()=>{
    id_login_container.style.display = 'block';
    disposable_login_container.style.display = 'none';
    qr_login_container.style.display = 'none';
    login_title[0].parentElement.classList.add('active')
    login_title[1].parentElement.classList.remove('active')
    login_title[2].parentElement.classList.remove('active')
})
// ===============================================

console.log('로그인 메세지 출력')
// 아이디 로그인 시 틀린 정보 는 입력되지 않은 정보에 따라 error message 출력하기
// 1. 아이디 미입력 후 로그인 버튼 클릭 => '아이디를 입력해 주세요'
// 2. 아이디 입력, 비밀번호 미입력 후 로그인 버튼 클릭 => '비밀번호를 입력해 주세요'
// 3. 아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞지 않으면 => '아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.'
// 4. 아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞다면 => 로그인 성공 팝업 '어서오세요 OO님'
const userIdInput = document.querySelector('#userId')
const userPwInput = document.querySelector('#userPw')
const error_message = document.querySelector('.error_message')
const loginBtn = document.querySelector('#loginBtn')
const userList = [{
    id:'admin',
    name:'어드민',
    pw:'1234',
}]
console.log(userIdInput,userPwInput,error_message,loginBtn)

loginBtn.addEventListener('click',()=>{
    if(userIdInput.value == ''){ // Q1.아이디 빈 문자열 검사 => 빈문자열이 참이라면
        error_message.innerHTML =  '아이디를 입력해 주세요' //=> 참일 때 실행 결과
    }else if(userPwInput.value == ''){ // Q2.아이디 입력이 되어 위 단계에서 넘어 왔으므로 아이디 확인은 필요가 없다.
        error_message.innerHTML =  '비밀번호를 입력해 주세요'
    }else if(userIdInput.value == userList[0].id && userPwInput.value == userList[0].pw){
        alert(`어서오세요 ${userList[0].name}님 환영합니다.`)
    }else {
        error_message.innerHTML =  `아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br> 입력하신 내용을 다시 확인해주세요.`
        userPwInput.value == ''; // 아이디는 남아있는데 비밀번호는 없어지게
    }
})
// 일회용 번호
// 1. 번호 미입력 후 로그인 버튼 클릭 => '일회용 로그인 번호를 입력하세요.'
// 2. 번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞지 않으면 => '일회용 로그인 번호를 확인한 후 다시 입력해 주세요.'
// 3. 번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞다면 => 로그인 성공 팝업 '어서오세요 OO님'
const input_num = document.querySelector('#input_num')
const tap2_loginBtn = document.querySelector('.tap2_loginBtn')
const tap2_error_message = document.querySelector('.disposable_login > .error_message')
const uselessNum = [{
    num:'123456',
    name:'user'
}]
console.log(input_num,tap2_loginBtn,tap2_error_message,uselessNum[0])

tap2_loginBtn.addEventListener('click',()=>{
    if(input_num.value == ''){
        tap2_error_message.innerHTML = '일회용 로그인 번호를 입력하세요.'
    }else if(input_num.value == uselessNum[0].num){
        input_num.value == ''
        alert(`어서오세요 ${uselessNum[0].name}님 환영합니다.`)
    }else {
        tap2_error_message.innerHTML = '일회용 로그인 번호를 확인한 후 다시 입력해 주세요.'
    }
})