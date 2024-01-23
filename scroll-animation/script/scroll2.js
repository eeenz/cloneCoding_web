const body = document.querySelector('html, body')
const bg = document.querySelectorAll('.container .photo')
const nav_a = document.querySelectorAll('nav a')
const bar_a = document.querySelectorAll('.bar a')
const circle = document.querySelector('main .circle')

bar_a[0].classList.add('active') //bar_a에 1번대상에 active클래스를 붙여라

bg.forEach((obj,idx)=>{
    console.log(obj.offsetTop) // 0,917,1834,2751 -> bg위치 기준으로 100vh만큼 있으니까 고정값으로
    console.log(bg[idx].offsetTop) // 0,917,1834,2751 -> bg의[index]로 적은 방법
})

// 스크롤 했을 때 각 bg의 위치에 닿으면 bar_a의 색상이 변경
window.addEventListener('scroll',()=>{ //스크롤 했을 때
    bar_a.forEach((obj, idx)=>{ //bar_a가
        if(body.scrollTop >= bg[idx].offsetTop -200){ //scrolltop의 위치가 bg[].offsetTop보다 크거나 같으면 
            //-200은 top에 완전히 도달해야 흰선이 활성화되는걸 좌표에서 -200만큼 빼줘서 탑에도달하기 200px전에 활성화되게 했다.
            bar_a_remove() //active 클래스 remove 호출
            bar_a[idx].classList.add('active') //bar_a에 active 클래스를 활성화 해라
        }
    })
})

// 클래스(active) 초기화 함수 생성
const bar_a_remove = ()=>{
    for(let r of bar_a){
        r.classList.remove('active');
    }
    /* // 같은표현 (길게 쓰게 되니까 위처럼 줄여서 쓴다)
    link_a[0].classList.remove('active')
    link_a[1].classList.remove('active')
    link_a[2].classList.remove('active')
    link_a[3].classList.remove('active') */
} 

// nav_a 클릭 시 각 bg1~4 위치로 스크롤이 이동
nav_a.forEach((obj, idx)=>{
    obj.addEventListener('click',(e)=>{
        e.preventDefault() // 매개변수 e(event의 약자)를 담아서 선언, 내가 이벤트 하려는 대상이 이상한데로 가는걸 막아주는 함수 : preventDefault(방지기본값)
        window.scrollTo(0, bg[idx].offsetTop)
    })
})
// 연습) D 클릭 시 bg4로 이동
// nav_a[3].addEventListener('click',(e)=>{
//     e.preventDefault()
//     body.scrollTo(0, bg[3].offsetTop)
// })

//동그란원 마우스 따라다니게 하기
window.addEventListener('mousemove',(e)=>{
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
    circle.classList.add('circle')
})