// 로그인 탭 제목 클릭 시 해당 내용 활성화 js
// 제목 변수
const login_title = document.querySelectorAll('.login_title h2 > a')
// -------------- 쌤이랑 확인 ----------------
// 통합 내용 변수
const login_c_all = document.querySelectorAll('.login_container .login_c')

// 초기 모든내용숨기기 -> ID로그인만 보이기
const login_c_all_func = ()=>{
    for(let cc of login_c_all){cc.style.display='none';}
}
login_c_all_func()
login_c_all[0].style.display='block'

// 초기값 ID로그인 탭 활성화 시키기(active) *클릭전
login_title[0].parentElement.classList.add('active')

// 초기 탭 제목 디자인 숨기기
const title_active_remove = ()=>{
    for(let rr of login_title){rr.parentElement.classList.remove('active')}
}

// 탭 제목 클릭 시 클릭한 대상에만 디자인 적용하기
login_title.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        title_active_remove() //위에 적은 함수 호출 //제목탭 active 다 비활성화
        t.parentElement.classList.add('active') //클릭된건 활성화
        login_c_all_func() //위에 적은 함수 호출 // 내용탭 다 가리기
        login_c_all[i].style.display='block' //내가 클릭한 i(index)와 동일한 대상을 보이게 해라
    })
})
// -------------- 쌤이랑 확인 끝 ----------------

/* 
// --------------내가 작성한것----------------
// 통합 내용 div 변수 생성
const login_container = document.querySelectorAll('.login_container .login_c')

// 23/01/19 초기 일회용내용, QR코드 내용 숨기기
const tab_hide = ()=>{for(let c of login_container){c.style.display='none';}}
tab_hide()
login_container[0].style.display = 'block';

// 초기 login_title의 [0]번만 탭활성화된 모습으로 설정하기
const s_hide = ()=>{for(let s of login_title){s.parentElement.classList.remove('active')}} //나머지는숨기기
s_hide()
login_title[0].parentElement.classList.add('active') //[0]만 활성화

// 23/01/19 탭 활성화 시키기(active) *클릭했을때 해당 탭의 내용 출력하기
login_title.forEach((obj,inx)=>{
    obj.addEventListener('click',()=>{
        tab_hide()
        login_container[inx].style.display = 'block';
        s_hide()  //숨기는 함수호출
        login_title[inx].parentElement.classList.add('active')//클릭시 [인덱스]만 활성화
    })
})
--------------내가 작성한것 끝----------------
 */

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