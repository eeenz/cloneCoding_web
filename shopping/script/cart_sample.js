// 왼쪽 썸네일 이미지 JS
// 1. small_thumbnail에 a에 마우스를 올렸을 때 => ex. small2 마우스를 올렸다면
// 2. big_thumbnail 이미지 경로(src)가 변경된다. => ex. big1이 big2 이미지 경로로 변경
const item_detail = document.querySelector('.item_detail');
const small_thum = item_detail.querySelectorAll('.small_thumbnail a');
const big_thum= item_detail.querySelector('.big_thumbnail img');
console.log(item_detail,small_thum,big_thum);

small_thum[0].addEventListener('mouseover',function(){
    big_thum.src = './dog_images/big1.jpg';
})
small_thum[1].addEventListener('mouseover',function(){
    big_thum.src = './dog_images/big2.jpg';
})
small_thum[2].addEventListener('mouseover',function(){
    big_thum.src = './dog_images/big3.jpg';
})
small_thum[3].addEventListener('mouseover',function(){
    big_thum.src = './dog_images/big4.jpg';
})
small_thum[4].addEventListener('mouseover',function(){
    big_thum.src = './dog_images/big1.jpg';
})
small_thum[5].addEventListener('mouseover',function(){
    big_thum.src = './dog_images/big2.jpg';
})

// 가격 할인 정보 클릭 시 나오는 정보 팝업
// 1. 팝업 숨기기
// 2. i 클릭하면 팝업 보이기
const price_info = item_detail.querySelector('.price i[class$=info]');
const price_info_open = item_detail.querySelector('.price .open');
console.log(price_info,price_info_open);

// price_info_open.style.display = 'none';
price_info_open.style = 'display:none';

price_info.addEventListener('click',function(){
    price_info_open.style = 'display:block';
})

// 내일 출발 i 클릭 시 팝업 출력하고 팝업 내 x 클릭 시 팝업 닫히기 JS
// 1. 팝업 숨기기
// 2. i 클릭 시 팝업 출력
// 3. x 클릭 시 팝업 닫히기
const delivery_info = item_detail.querySelector('.benefit_shipping i[class$=info]');
const delivery_popup = item_detail.querySelector('.benefit_shipping .open')
const delivery_popup_close = delivery_popup.querySelector('.close');
console.log(delivery_info,delivery_popup,delivery_popup_close);

delivery_popup.style = 'display: none';

delivery_info.addEventListener('click', function(){
    delivery_popup.style = 'display: block';
})

delivery_popup_close.addEventListener('click', function(){
    delivery_popup.style = 'display: none';
})

// 목표) 배송 1/9 (화) 도착 예정 94% 메뉴를 클릭하면 메뉴 펼침 정보 나타나기
// 1. 펼침 메뉴 초기 숨기기
// 2. 배송1/9(화) 도착 예정 94% 메뉴 클릭 시 
// 3. 위(2)의 둥근 모서리 하단 모양 뾰족하게 변경
// 4. 위(2)의 94% 옆 화살표 상하 반전 하기
// 5. 메뉴 펼침 정보 보이기
const benefit_shipping = document.querySelector('.right_container .benefit_shipping');
const delivery_menu = benefit_shipping.querySelector('.delivery_menu');
const delivery_menu_open = benefit_shipping.querySelector('.delivery_menu_open');
const delivery_btn_arrow = delivery_menu.querySelector('i[class$=down]');
console.log(benefit_shipping,delivery_menu,delivery_menu_open,delivery_btn_arrow);

delivery_menu_open.style = 'display:none';

delivery_menu.addEventListener('click',function(){
    delivery_menu_open.style = 'display:flex;';
    delivery_menu.style = 'border-bottom-right-radius: 0; border-bottom-left-radius:0;';
    delivery_btn_arrow.style = 'transform: rotate(180deg);';
})

// 목표) 상품 색상, 사이즈 옵션을 선택했을 때 선택 정보가 selectResult에 결과 값으로 출력되고 num_result의 구매 수량에 따라 order_price에 가격이 출력되는 결과
// 상세절차 : 상품 색상, 사이즈 옵션을 선택했을 때
// -------내가 적은것----------
// 1. 색상을 눌렀을 때 사이즈를 선택 안하면 사이즈 영역의 옵션 값은 비활성화
// 2. 색상과 사이즈 둘다 선택했을 때 selectResult에 선택한 opt_list의 값이 대입되고
// 3. num_result에 num_count수량이 기본 1의 값으로 생성되고 
// 4. order_price에 선택한 옵션의 가격이 출력된다.
// 5. 선택한 옵션을 다시 선택 했을 때 '이미 선택한 옵션입니다' 팝업
// -------쌤이 적은것----------
// 1. 색상(옵션1) 선택 전 사이즈(옵션2) 비활성화
// 2. 옵션1 선택 시 옵션2 활성화
// 2-1. 옵션1에 대한 option데이터에 따라 옵션2의 각 다른 select 활성화
// 3. 옵션1 선택 후 옵션2 클릭 시 결과 출력
// 3-1. (위) 조건 달성 기준 결과 출력이 되어있는 상태라면 같은 옵션 클릭 시 중복 데이터 결과 팝업 출력
// 3-2. (위) 조건 달성 기준 결과 출력과 다른 옵션을 클릭 시 추가 데이터 기존 데이터(위) 출력
// 3-3. (위) 조건 달성 기준 옵션1, 옵션2의 선택 데이터는 초기화됨(색상, 사이즈 라는 글씨로)
const colorOpt = document.querySelector('#colorOpt');
const sizeOpt = document.querySelector('#sizeOpt');
const selectResult = document.querySelector('.selectResult')
const selectResult_close = selectResult.querySelector('.close')
console.log(colorOpt,sizeOpt);
console.log(colorOpt.options[1].value);
console.log(colorOpt.options[1].value.text);
console.log('-----------');
selectResult.style = 'display:none';
// colorOpt, sizeOpt text데이터를 모두 변수로 수집 후
// createElement, appendChild 를 이용해서 opt1, opt2 선택 데이터 출력하기
const selectResult_color = document.createElement('span')
const selectResult_size = document.createElement('span')
const selectResult_view = document.querySelectorAll('.selectResult .opt_list span')
const numView = document.querySelector('.num_result #num_count')
const priceView = document.querySelector('.order_price')
const priceTotalView = document.querySelector('fieldset:nth-child(2) .order_price')
let num = 1;
let price = 36900;
console.log(selectResult_color,selectResult_size,selectResult_view);
console.log(selectResult_view);

colorOpt.addEventListener('change',function(){ //select의 값 = 'change'
    console.log(colorOpt.value);
    console.log(colorOpt.options[colorOpt.selectedIndex].text);
    selectResult_color.innerHTML = colorOpt.options[colorOpt.selectedIndex].text;
    console.log(selectResult_color);
})
sizeOpt.addEventListener('change',function(){
    // 선택 option 데이터 저장하기
    console.log(sizeOpt.options[sizeOpt.selectedIndex].text)
    selectResult_size.innerHTML = sizeOpt.options[sizeOpt.selectedIndex].text;
    console.log(selectResult_size);
    
    // 선택옵션 부모 보이기
    selectResult.style = 'display:grid';

    // 선택옵션 적용 대상에 위 option 데이터값 출력하기
    selectResult_view[0].appendChild(selectResult_color);
    selectResult_view[1].appendChild(selectResult_size);

    // 선택옵션의 수량(num) 출력하기
    numView.value = num;
    // 선택옵션의 가격(price) 출력하기
    priceView.innerHTML = price.toLocaleString('ko-kr')+'원';
    priceTotalView.innerHTML = price.toLocaleString('ko-kr')+'원';
})

// selectResult 안 x 클릭 시 x의 부모(selectREsult)를 DOM관계로 선택해서 숨기기

selectResult_close.addEventListener('click',function(){
    selectResult_close.parentElement.style = 'display:none'; //parentNode : 공백까지 잡히므로 parentElement 사용
})

const minus_btn = document.querySelector('#minus')
const plus_btn = document.querySelector('#plus')
let total = 0;
// 수량 -, + 버튼 클릭 시 수량값이 변경되며 그에 따라 가격 변동
minus_btn.addEventListener('click',function(){
    // 1. 수량 1감소
    num -= 1;
    // 1-1. 수량 1 감소한 값 표시
    numView.value = num 
    // 2. 가격 (수량*가격) 감소
    total = num*price;
    // 구매가 세자리 콤마 표시
    priceView.innerHTML = total.toLocaleString('ko-kr')+'원';
    priceTotalView.innerHTML = total.toLocaleString('ko-kr')+'원';
})
plus_btn.addEventListener('click',function(){
    // 1. 수량 1증가
    num += 1;
    // 1-1. 수량 1 증가한 값 표시
    numView.value = num //값을 표시해준다
    // 2. 가격 (수량*가격) 증가
    total = num*price;
    // 구매가 세자리 콤마 표시
    priceView.innerHTML = total.toLocaleString('ko-kr')+'원';
    priceTotalView.innerHTML = total.toLocaleString('ko-kr')+'원';
})