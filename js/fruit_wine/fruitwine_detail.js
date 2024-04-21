let fruitwineName;
let fruitwinePrice;
let pic;
let liscnt;
let picalt;

function init() {
    fruitwineName = ["텐구마이 매실주 1800ml", "흑설탕 매실주 1800ml", "호오비덴 딸기주 500ml", "츠루우메 유자 1800ml", "백년매실주 720ml",
      "아마부키 블러드오렌지 매실주 1800ml", "멋진 망고주 1800ml", "카라쿠사 막걸리 1800ml", "흑우 매실주 1800ml", "멋진 귤주 1800ml"];
    fruitwinePrice = ["38,000", "48,000", "33,000", "44,000", "60,000", "50,000", "40,000", "40,000", "52,000", "40,000"];
    pic = ["../../img/fruitwine/tengu.png", "../../img/fruitwine/blacksugar.png", "../../img/fruitwine/strawberry.png", "../../img/fruitwine/yuza.png",
      "../../img/fruitwine/100year.png", "../../img/fruitwine/amabuki.png", "../../img/fruitwine/mango.png",
      "../../img/fruitwine/karakusa.png", "../../img/fruitwine/blackcow.png", "../../img/fruitwine/mikang.png",];
    picalt = ["텐구마이", "흑설탕", "호오비덴", "츠루우메", "백년매실주", "아마부키", "멋진망고", "카라쿠사", "흑우", "멋진귤"];
      detail();
  }
  
  function detail() {
  
    let wrapper = document.getElementById("slist");
    wrapper.innerHTML = "";
  
    for (let i = 0; i < pic.length; i++) {
      let slistD = document.createElement("div");
      slistD.classList.add("fruitwinelist");
  
      let fruitwinea = document.createElement("a");
      fruitwinea.href = "../../html/alchol_product.html";
        fruitwinea.onclick = function() {
            putData('fruitwine', i);
        }
  
      let fruitwineimg = document.createElement("img");
      fruitwineimg.src = pic[i];
      fruitwineimg.alt = picalt[i];
      fruitwinea.appendChild(fruitwineimg);
  
      let sname = document.createElement("p");
      sname.innerHTML = fruitwineName[i];
      fruitwinea.appendChild(sname);
  
      let sprice = document.createElement("h3");
      sprice.textContent = "가격 : " + fruitwinePrice[i] + " 원";
      fruitwinea.appendChild(sprice);
  
      slistD.appendChild(fruitwinea);
      wrapper.appendChild(slistD);
    }
  }

  function putData(name, idx){
    localStorage.setItem("name", name);
    localStorage.setItem("idx", idx);
}