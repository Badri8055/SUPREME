let featuredrecipesButton = document.querySelectorAll(
    "#featuredrecipes>button"
  );
  let featuredrecipesImage = document.querySelector("#featuredrecipes>img");
  let featuredrecipesArray = [
    "https://www.bigbasket.com/media/uploads/banner_images/hp_c_submit_cxnp-9687_400_090622.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_c_winner_cxnp-9688_400_090622.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_c_frozen_cxnp-9692_400_090622.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_c_mango-9691_400_090622.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_c_chees_cxnp-9690_400_090622.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_c_kesar_cxnp-9689_400_090622.jpg",
  ];
  let featuredrecipesNum = 0;
  featuredrecipesButton[0].addEventListener("click", function () {
    if (featuredrecipesNum === 0) {
      featuredrecipesNum = featuredrecipesArray.length - 1;
    } else {
      featuredrecipesNum--;
    }
    featuredrecipesImage.src = featuredrecipesArray[featuredrecipesNum];
  });
  
  featuredrecipesButton[0].addEventListener("click", autoSlide3);
  function autoSlide3() {
    if (featuredrecipesNum === 0) {
      featuredrecipesNum = featuredrecipesArray.length - 1;
    } else {
      featuredrecipesNum--;
    }
    featuredrecipesImage.src = featuredrecipesArray[featuredrecipesNum];
  }
  setInterval(autoSlide3, 3000);
  
  featuredrecipesButton[1].addEventListener("click", function () {
    if (featuredrecipesNum === featuredrecipesArray.length - 1) {
      featuredrecipesNum = 0;
    } else {
      featuredrecipesNum++;
    }
    featuredrecipesImage.src = featuredrecipesArray[featuredrecipesNum];
  });


/* let frontButton = document.querySelectorAll("#front>button" );
let frontImage = document.querySelector("#front>img");
let frontArray = [
    "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_tbcd_snacking-store_460-250522.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore-1600x460_140622.jpeg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m__bcd_tasties-origins_460-250522.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_DT_apples-blr_1600x460-180622.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_bev_coldpressed-juice_460-250522.jpg",
  ];
let frontNum = 0;
frontButton[0].addEventListener("click", function () {
  if (frontNum === 0) {
      frontNum = frontArray.length - 1;
  } else {
      frontNum--;
  }
    frontImage.src = frontArray[frontNum];
  });
  
frontButton[0].addEventListener("click", autoSlide3);
function autoSlide3() {
    if (frontNum === 0) {
      frontNum = frontArray.length - 1;
    } else {
      frontNum--;
    }
    frontImage.src = frontArray[frontNum];
  }
setInterval(autoSlide3, 3000);
  
frontButton[1].addEventListener("click", function () {
  if (frontNum === frontArray.length - 1) {
      frontNum = 0;
    } else {
      frontNum++;
    }
    frontImage.src = frontArray[frontNum];
  }); 

  */

