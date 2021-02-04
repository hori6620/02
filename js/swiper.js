var mySwiper = new Swiper('.swiper-container', {
  loop: true,  //ループ可能（ループモードを有効に）
  slidesPerView: 1,
  centeredSlides: true,
  simulateTouch: true,
  autoplay: {
    delay: 5000,  //5秒おきにスライドを自動で動かす
    disableOnInteraction: false,  //ユーザーがスライダーを操作した後も自動再生し続ける
    reverseDirection: false //最初のスライドから順に再生する
  },
  breakpoints: {
    // 540px以上の場合
    540: {
      loop: true,  //ループ可能（ループモードを有効に）
      slidesPerView: 2,  //スライドを2つ（分）表示
      centeredSlides : true,
      simulateTouch: true,
      autoplay: {
        delay: 5000,  //5秒おきにスライドを自動で動かす
        disableOnInteraction: false,  //ユーザーがスライダーを操作した後も自動再生し続ける
        reverseDirection: false //最初のスライドから順に再生する
      }
    },
    // 768px以上の場合
    768: {
      loop: true,  //ループ可能（ループモードを有効に）
      slidesPerView: 2,  //スライドを2つ（分）表示
      centeredSlides : true,
      simulateTouch: true,
      autoplay: {
        delay: 5000,  //5秒おきにスライドを自動で動かす
        disableOnInteraction: false,  //ユーザーがスライダーを操作した後も自動再生し続ける
        reverseDirection: false //最初のスライドから順に再生する
      }
    },
    // 980px以上の場合
    980: {
      loop: true,  //ループ可能（ループモードを有効に）
      slidesPerView: 2.5,  //スライドを3つ（分）表示
      centeredSlides : true,
      simulateTouch: true,
      autoplay: {
        delay: 5000,  //5秒おきにスライドを自動で動かす
        disableOnInteraction: false,  //ユーザーがスライダーを操作した後も自動再生し続ける
        reverseDirection: false //最初のスライドから順に再生する
      }
    },
    // 1200px以上の場合
    1200: {
      loop: true,  //ループ可能（ループモードを有効に）
      slidesPerView:5,  //スライドを5つ（分）表示
      centeredSlides : true,
      simulateTouch: true,
      autoplay: {
        delay: 5000,  //5秒おきにスライドを自動で動かす
        disableOnInteraction: false,  //ユーザーがスライダーを操作した後も自動再生し続ける
        reverseDirection: false //最初のスライドから順に再生する
      }
    }
  }
});
