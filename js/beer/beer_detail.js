function init(){
    beername = ["아사히 슈퍼드라이 350ml", "아사히 슈퍼드라이 크리스탈 350ml", "아사히 생맥주 350ml", "아사히 쇼쿠사이 350ml", "아사히 오리온 더 드래프트 350ml",
    "아사히 오리온 75비어 화이트 에일 350ml", "더프리미엄 몰츠 350ml", "아이스 드래프트 350ml", "킨무기 350ml", "산토리 생맥주 350ml", "퍼펙트 산토리 맥주 350ml", 
    "도쿄 크래프트 350ml", "세븐프리미엄 브루 350ml", "기린 이치방시보리 350ml", "기린 노도코시 350ml", "기린 라거맥주 350ml", "기린 맥주 하레카제 350ml",
    "혼키린 350ml"];
  beerprice = ["43,000", "49,000", "40,300", "60,000", "40,000", "50,000", "53,000", "71,300", "70,000", "56,000", "80,000", "70,000",
    "50,000", "60,000", "100,000", "70,000", "38,000", "48,000", "51,000", "61,000", "60,000", "44,000", "58,000", "51,000", "38,000", "48,000",
    "58,000", "40,000", "50,000", "70,000", "40,000", "38,000"];
  pic = ["../../img/Beer/Asahi/super1.png", "../../img/Beer/Asahi/crystal1.png", "../../img/Beer/Asahi/nama1.png", "../../img/Beer/Asahi/shyokusai1.png",
    "../../img/Beer/Asahi/draft1.png", "../../img/Beer/Asahi/whiteale1.png", "../../img/Beer/Suntory/premium1.png", "../../img/Beer/Suntory/draft1.png",
    "../../img/Beer/Suntory/kinmugi1.png", "../../img/Beer/Suntory/nama1.png", "../../img/Beer/Suntory/perfect1.png", "../../img/Beer/Suntory/tokyo1.png",
    "../../img/Beer/Suntory/brew1.png", "../../img/Beer/Kirin/ichiban1.png", "../../img/Beer/Kirin/nodokosi1.png", "../../img/Beer/Kirin/laga1.png", 
    "../../img/Beer/Kirin/harekaze1.png" , "../../img/Beer/Kirin/honkirin1.png"
    ];
  picalt = ["슈퍼드라이", "크리스탈", "아사히 생", "쇼쿠사이", "드래프트", "화이트에일", "프리미엄 몰츠", "드래프트", "킨무기", "산토리 생",
    "산토리 퍼펙트", "도쿄 크래프트", "세븐프리미엄 브루", "이치방시보리", "노도코시", "라거맥주", "하레카제", "혼키린",];
    detail();
}

function detail() {
  let wrapper = document.getElementById("slist");
  wrapper.innerHTML = "";
   
  
    for (let i = 0; i < pic.length; i++) {

      
      let slistD = document.createElement("div");
      slistD.classList.add("beerlist");
  
      let beera = document.createElement("a");
      beera.href = "../../html/alchol_product.html";
      beera.onclick = function() {
        putData('beer', i);
    }
  
      let beerimg = document.createElement("img");
      beerimg.src = pic[i];
      beerimg.alt = picalt[i];
      beera.appendChild(beerimg);
  
      let sname = document.createElement("p");
      sname.innerHTML = beername[i];
      beera.appendChild(sname);
  
      let sprice = document.createElement("h3");
      sprice.textContent = "가격 : " + beerprice[i] + " 원";
      beera.appendChild(sprice);
  
      slistD.appendChild(beera);
      wrapper.appendChild(slistD);
    }
  }

  function putData(name, idx){
    localStorage.setItem("name", name);
    localStorage.setItem("idx", idx);
}