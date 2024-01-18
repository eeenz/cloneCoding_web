const gnb = document.querySelectorAll('.gnb > li ')
const lnb = document.querySelectorAll('.lnb')
const nav_bg = document.querySelector('.nav_bg')
console.log(gnb,lnb)

// nav의 백그라운드 초기 값으로 안보이게 설정
nav_bg.style.height = '0';
nav_bg.style.transition = 'height 0.4s'; //어색하지 않게 lnb와 같은 속도로 설정

// 마우스 이벤트 전 lnb의 초기 값으로 안보이게 설정
for(let l of lnb){
    l.style.height = '0';
    l.style.overflow = 'hidden';
    l.style.transition = 'height 0.4s' //높이값이 변경될 때 에니메이션 할거다.
}
// 1. gnb > li 모두 접근하기 위한 for 생성
for(let g of gnb){
    // 2. gnb에 마우스 이벤트 시 lnb를 모두 제어하고 싶다면
    // lnb에 모두 접근하기 위한 for 추가 생성
    for(let l of lnb){        
        // 3. 이벤트대상 확인 후 "g" 이벤트 함수 생성
        g.addEventListener('mouseover',()=>{   
            //4. 위 이벤트 조건이 만족되었을 때 lnb 모두 출력 ->
            // 모두 출력하는 변수 대상 확인 "l" 관련 속성 적용
            l.style.height = '135px';
            nav_bg.style.height = '135px';
        })     
        g.addEventListener('mouseout',()=>{        
            l.style.height = '0';
            nav_bg.style.height = '0';
        })
    }
}

// 위 상황과 같음.
/* for(let g of gnb){
    g.addEventListener('mouseover',()=>{
        for(let l of lnb){
            l.style.height = '135px'
        }
    })
    g.addEventListener('mouseout',()=>{
        for(let l of lnb){
            l.style.height = '0'
        }
    })
} */
// ------------------------------------------------

// 에니메이션을 갖으면서 gnb에 올렸을 때 해당 lnb가 천천히 뜨게
/* for(let l of lnb){
    l.style.height = '0';
    l.style.overflow = 'hidden';
    l.style.transition = 'height 0.3s' //높이값이 변경될 때 에니메이션 할거다.
}
// 1. 메뉴1~메뉴3 모두 제어하기 위한 반복 for문 생성
// 2개 이상 한번에 제어하고 싶은 대상이 == gnb 단독 1개
// 떄문에 다중 for가 아닌 gnb에 해당하는 for 1개만 생성
for(let g of gnb){
    // 2. 이벤트 대상 확인 "g" 이벤트 함수 생성
    g.addEventListener('mouseover',()=>{
        // 3. 이벤트 조건 만족시 실행 대상이 이벤트대상의 상대적인 관계에 해당된다면
        // 가족관계 속성을 활용해서 상대적으로 잡아 원하는 속성을 처리한다.
        // 가족관계 속성 : prentElement, parentNode, nextSibling, previousSibling, children, childNode
        g.children[1].style.height = '135px'
    })
    g.addEventListener('mouseout',()=>{
        g.children[1].style.height = '0'
    })
} */

// ------------------------------------------------
// 기본폼
/* for(let l of lnb){
    l.style.display = 'none';
}

for(let g of gnb){
    g.addEventListener('mouseover',()=>{
        g.children[1].style.display = 'block'; //반복문으로 접근을 하기때문에 몇개가 있던 동일 클래스이면 동일하게 적용
    })
    g.addEventListener('mouseout',()=>{
        g.children[1].style.display = 'none';
    })
} */