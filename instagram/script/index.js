// Q. "like_off.png" 클릭 시 src속성 값을 "like_on.png" 로 변경하기
const like = document.querySelectorAll('.like')
const comment = document.querySelectorAll('.chat')
const paper = document.querySelectorAll('.send')
// like.src='./images/like_on.png';
// like.src='./images/like_off.png';
// like.src='./images/comment_on.png';
// like.src='./images/comment_off.png'; ...동일 규칙명

// onoff ver1
/* function onOff(name, status){ //이름과 상태가 바뀌므로 2개 생성
    return `./images/${name}_${status}.png`
}
like.addEventListener('click',function(){
    // console.log(like)
    // console.log(like.children)
    // console.log(like.children[0])
    // console.log(like.children[0].src)
    like.children[0].src = onOff('like', 'on')
}) */

/* // onoff ver.2
function onOff_v2(target, name, status){ 
    return target.children[0].src = `./images/${name}_${status}.png`
}
like.addEventListener('click',function(){
    onOff_v2(like, 'like', 'on')
}) */

// onoff ver.3 3개의 아이콘 on으로 변경
function onOff_v2(target, name, status){ 
    return target.children[0].src = `./images/${name}_${status}.png`
}
like[0].addEventListener('click',function(){
    onOff_v2(this, 'like', 'on')
    // this == 현재 이벤트 대상 객체 키워드
    // ('이벤트종류', function(){ 이벤트 함수 내에서 사용할 때 이 위치에서만 사용가능})
})
comment[0].addEventListener('click',function(){
    onOff_v2(this, 'comment', 'on')
})
paper[0].addEventListener('click',function(){
    onOff_v2(this, 'paper', 'on')
})
like[1].addEventListener('click',function(){
    onOff_v2(this, 'like', 'on')
})
comment[1].addEventListener('click',function(){
    onOff_v2(this, 'comment', 'on')
})
paper[1].addEventListener('click',function(){
    onOff_v2(this, 'paper', 'on')
})