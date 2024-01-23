const txt = document.querySelector('.txt')
const info = document.querySelectorAll('.info')
console.log(txt) //div.txt
console.log(txt.children) //h1

window.addEventListener('scroll',()=>{
    if(txt.getBoundingClientRect().top <= 400){
        txt.children[0].style.animation = 'opacity_scale 1s both'
    }
})
// 스크롤 이벤트를 이용한 등장애니메이션 제작 시 if조건대상은 실제 애니메이션 적용 대상이 아닌 그 대상을 묶고 있는 가까운 부모 그룹으로 처리하는게 좋다.
// h1에 등장이펙트를 주고 싶다면 h1이 보일 때 h1에 넣어라가 아닌부모 .txt가 뷰포트 영역에 등장할 때 자식 h1에 이펙트를 넣어라. 와 같이~!


//처음에 img 깜빡거리지 않게 안보이게 처리 //info(div동일클래스2개를 같이 잡았으므로) 인덱스 붙여서 처리. children에도 인덱스를 붙여야한다. css에서 img에 opacity:0으로 처리해도 되지만 js연습하려고 js에서 처리했다.
info[0].children[0].style.opacity = '0'; 

window.addEventListener('scroll',()=>{
    if(info[0].getBoundingClientRect().top <= 400){
        info[0].children[0].style.animation = 'translate1 2s both'
    }
})

info[1].children[0].style.opacity = '0';
window.addEventListener('scroll',()=>{
    if(info[1].getBoundingClientRect().top <= 400){
        info[1].children[0].style.animation = 'translate2 2s both'
    }
})