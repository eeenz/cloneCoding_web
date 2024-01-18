/* 
    container(아이템 수백개 보이는 부모 영역)안에서 item(개별아이템)요소들을 data.js(DB)에서 가져온다.
    1. DB -> <p class="photo"><img src="#" alt=""></p>
    2. DB -> <h2></h2>
    3. DB -> <p class="price"></p>

    DB 데이터를 가져오기 위해 필요한 요소 = div, p , h2, p
    디자인 또는 동적 기능을 적용하기 위한 클래스 선언 필요(classList or className) = item, photo, price
*/
const container = document.querySelector('.container') //item의 부모 선언
let itemWrap = document.createElement('div') //div 생성
let itemPhoto = document.createElement('p') //p 생성
let itemTitle = document.createElement('h2') //h2 생성
let itemPrice = document.createElement('p') //h2 생성
console.log(container)
console.log(itemWrap,itemPhoto)

for(let i=0; i<itemDB.length; i++){
    itemWrap = document.createElement('div')
    itemPhoto = document.createElement('p')
    itemTitle = document.createElement('h2')
    itemPrice = document.createElement('p')

    itemWrap.classList.add('item') //div가 생성될 때 마다 item이라고 이름을 붙여라
    itemPhoto.classList.add('photo') //p가 생성 될 때 마다 photo라고 이름을 붙여라 
    itemPrice.classList.add('price') //p한테 pirce라고 이름을 붙여라

    itemPhoto.innerHTML = `<img src=${itemDB[i].itemImg} art=${itemDB[i].itemTitle}>` //p안에 <img>태그 생성
    itemTitle.innerHTML = itemDB[i].itemTitle //h2안에 DB에 쓴 제목을 가져온다
    itemPrice.innerHTML = itemDB[i].itemPrice //h2안에 DB에 쓴 가격을 가져온다

    container.appendChild(itemWrap)
    itemWrap.appendChild(itemPhoto)
    itemWrap.appendChild(itemTitle)
    itemWrap.appendChild(itemPrice)
}