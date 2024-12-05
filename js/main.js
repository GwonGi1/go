$(function(){
    // 아래 afterLoad의 const! (afterLoad는 풀페이지 옵션)
    const menu = $('header nav ul li a')
    // fullpage 설정
    $('#fullpage').fullpage({
        //배열은 대괄호!!
        anchors: ['page1', 'page2','page3', 'page4', 'page5', 'page6','page7'],
        sectionsColor: ['#aaa', '#bbb', '#ccc', '#ddd', '#eee', '#fff'],
        //한장씩 부드럽게 스크롤링 된다.
        autoScrolling: true, //기본값 true
        keyboardScrolling: false, // 기본값 true
        navigation: true, //물방울
        navigationPosition: 'right', // 기본값 right
        //누르면 나옴
        navigationTooltips: ['메뉴1', '메뉴2', '메뉴3', '메뉴4', '메뉴5', '메뉴6','메뉴7', '푸터'],
        slidesNavigation: true,
        //보통 핸드폰으로 보게 될 때를 위해..? 해제함.
        responsiveWidth: 1000, //1000 이하가 되면 풀페이지 해제
        
        afterLoad: function(anchorLink, index) {
            //자바에서 =한개는 '담다'이다 const 머시기 에 뭔가 담아둘 때? 그때 썼던거고 같다는 ==이다. ===는 숫자형이나 숫자형이나 그런 형식도 같아야한다. 예를들어 4 === '4'  라고 하면 안된다.
            console.log('현재 영역의 번호는 ' + index)
            if(index == 1){
                menu.addClass('white')
            }
            if(index >= 2){
                menu.removeClass('white')
            }
            // if(index == 3){
            //     menu.removeClass('white')
            // }
            // if(index == 4){
            //     menu.removeClass('white')
            // }
            // if(index == 5){
            //     menu.removeClass('white')
            // }
            // if(index == 6){
            //     menu.removeClass('white')
            // }
            
            
        }
        
        
    })
    
    // const menu = $('header')

    // $('header nav ul li').mouseenter(function () {
    //     menu.addClass('on')
    // })
    // $('header nav ul li').mouseleave(function () {
    //     menu.removeClass('on')
    // })
    
   
    
  
})


