const bg = document.querySelectorAll('.container .photo')
const btn_a = document.querySelectorAll('.btn_contents a')

btn_a.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()// 매개변수e를 담아서, 이걸 내가 이벤트 하려는 대상이(a의 href처럼) 이상한데로 가는걸 막아주는 함수 : preventDefault
        window.scrollTo(0, bg[i].offsetTop)
    })
})