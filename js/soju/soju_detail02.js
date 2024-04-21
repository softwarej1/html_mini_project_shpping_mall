let sojuname;
let sojuprice;
let pic;
let liscnt;
let picalt;

function init2() {
    sojuname = ["고래의 흑보리 1800ml", "하늘의 각인 1800ml", "오코게 1800ml", "무소유 1800ml", "무라마사 1800ml", "마루야마 1800ml",
      "쿠로사소리 1800ml", "몽상선락 1800ml", "악마의 포옹 1800ml", "야키이모쿠로세 1800ml", "사무라이의 문 1800ml", "자보 1800ml",
      "토리코 1800ml", "하오쿠보 1800ml", "카메시즈쿠 1800ml", "고주 1800ml", "하카이산 1800ml",
      "토끼의 질주 600ml", "야바비진 1800ml", "토요나가쿠라 1800ml", "아사기리꽃 1800ml", "천벌 1800ml", "아마부키 1800ml", "토리카이 1800ml",
      "직화세이후쿠 1800ml", "잔파 백 1800ml", "야마카와 1800ml", "마사히로 1800ml", "스이코 1800ml", "하루사메카리 1800ml",
      "타로 1800ml", "즈이센 청룡 1800ml"];
    sojuprice = ["43,000", "49,000", "40,300", "60,000", "40,000", "50,000", "53,000", "71,300", "70,000", "56,000", "80,000", "70,000",
      "50,000", "60,000", "100,000", "70,000", "38,000", "48,000", "51,000", "61,000", "60,000", "44,000", "58,000", "51,000", "38,000", "48,000",
      "58,000", "40,000", "50,000", "70,000", "40,000", "38,000"];
    pic = ["../../img/Soju/borisoju/gore.png", "../../img/Soju/borisoju/gakin.png", "../../img/Soju/borisoju/okoge.png", "../../img/Soju/borisoju/musoyu.png",
      "../../img/Soju/borisoju/muramasa.png", "../../img/Soju/borisoju/maruyama.png", "../../img/Soju/borisoju/sasori.png",
      "../../img/Soju/borisoju/mongsang.png", "../../img/Soju/imosoju/devil.png", "../../img/Soju/imosoju/kurose.png",
      "../../img/Soju/imosoju/samurai.png", "../../img/Soju/imosoju/zabo.png", "../../img/Soju/imosoju/toriko.png",
      "../../img/Soju/imosoju/okubo.png", "../../img/Soju/imosoju/kamesizuku.png", "../../img/Soju/imosoju/mukasi.png",
      "../../img/Soju/ricesoju/hakaisan.png", "../../img/Soju/ricesoju/rabbit.png", "../../img/Soju/ricesoju/yababijin.png",
      "../../img/Soju/ricesoju/toyonagakura.png", "../../img/Soju/ricesoju/asagiri.png", "../../img/Soju/ricesoju/tenchyu.png",
      "../../img/Soju/ricesoju/amabuki.png", "../../img/Soju/ricesoju/torikai.png", "../../img/Soju/awamori/seihuku.png",
      "../../img/Soju/awamori/janpa.png", "../../img/Soju/awamori/yamakawa.png", "../../img/Soju/awamori/masahiro.png",
      "../../img/Soju/awamori/suiko.png", "../../img/Soju/awamori/harusame.png", "../../img/Soju/awamori/taro.png",
      "../../img/Soju/awamori/zuisen.png"];
    picalt = ["고래의 흑보리", "하늘의 각인", "오코게", "무소유", "무라마사", "마루야마", "쿠로사소리", "몽상선락", "악마의 포옹", "야키이모쿠로세",
      "사무라이의 문", "자보", "토리코", "하오쿠보 레드캐스크", "카메시즈쿠", "무카시무카시 고주", "하카이산 잘 부탁한다", "토끼의 질주",
      "야바비진", "토요나가쿠라", "아사기리꽃", "천벌 ", "아마부키", "토리카이", "직화세이후쿠", "잔파 백", "야마카와", "마사히로",
      "무카시즈쿠리 스이코", "하루사메카리", "타로", "즈이센 청룡"];
      detail2();
  }
  
  function detail2() {
  
    let wrapper = document.getElementById("slist");
    wrapper.innerHTML = "";
  
    for (let i = 19; i < pic.length; i++) {
      let slistD = document.createElement("div");
      slistD.classList.add("sojulist");
  
      let sojua = document.createElement("a");
      sojua.href = "../../html/alchol_product.html";
      sojua.onclick = function(){
            putData('soju', i);
        }
  
      let sojuimg = document.createElement("img");
      sojuimg.src = pic[i];
      sojuimg.alt = picalt[i];
      sojua.appendChild(sojuimg);
  
      let sname = document.createElement("p");
      sname.innerHTML = sojuname[i];
      sojua.appendChild(sname);
  
      let sprice = document.createElement("h3");
      sprice.textContent = "가격 : " + sojuprice[i] + " 원";
      sojua.appendChild(sprice);
  
      slistD.appendChild(sojua);
      wrapper.appendChild(slistD);
    }
  }

  function putData(name, idx){
    localStorage.setItem("name", name);
    localStorage.setItem("idx", idx);
  }