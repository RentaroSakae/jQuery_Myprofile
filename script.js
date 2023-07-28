$(function(){
    //カルーセル
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 1500,
        arrows: false,
        fade: true,
        speed: 1000
    });

    //トップボタン
    const topBtn = document.getElementById('top-btn');
    window.addEventListener('scroll', () => {
        const scrollValue = document.scrollingElement.scrollTop;
        if(scrollValue >= 300){
            topBtn.style.display = 'inline';
        } else {
            topBtn.style.display = 'none';
        }
    });

    //TOPボタン押したら画面上部までスライド
    $('#top-btn').click(function(){
        $('html, body').animate({scrollTop: 0},700);
    });

    //About・Works押したらAboutまでスライド
    $('.menu a').on("click", function(event){
        event.preventDefault();
        var target = $(this).attr("href");
        var targetPosition = $(target).offset().top;
        $("html, body").animate({scrollTop: targetPosition}, 500);
    });

    //Worksの画像にカーソルを合わせたら半透明になる
    $('.item img').on('mouseover', function(){
        $(this).animate({
            opacity:0.5
        },500);
    });
    //Worksの画像からカーソルを離したら元に戻る
    $('.itemImg').on('mouseout', function(){
        $(this).animate({
            opacity:1.0
        },200);
    });

    //モーダル
    $('.works img').click(function(){
        const imgSrc = $(this).attr('src');
        $('.big-img').attr('src', imgSrc);
        $('.modal-bg').fadeIn();
        return false
    });

    $('.close-btn').click(function(){
        $('.modal-bg').fadeOut();
        return false
    });

    //プロフィール画像のアニメーション
    $('.coin-animation').hover(function(){
        $(this).css("animation", "rotateCoin 1s linear infinite");
    },
    function(){
        $(this).css("animation", "none");
    });

});






