function init() {
    sakename = ["반슈잇콘 720ml", "소쿠 1800ml", "아카부 1800ml", "카마이타치 1800ml", "시찌다 1800ml", "코나키 1800ml",
        "카메노우미 1800ml", "W 1800ml", "바쿠렌 1800ml", "사쿠라하 1800ml", "이즈모 후지 1800ml", "쿠보타센쥬 1800ml",
        "코쿠류 잇쵸라이 1800ml", "아라바시리 1800ml", "비조후 아키사케 1800ml", "코시노 칸바이 1800ml", "가산류 키사라기 1800ml",
        "보쿠시 600ml", "쿠도키죠즈 1800ml", "유키만만 1800ml", "코시노카게토라 1800ml", "우고노츠키 720ml", "마스미 720ml", "자쿠 750ml",
        "우라가산류 코우카 1800ml", "와카나미 1800ml", "치요노히카리 1800ml", "키노에네 1800ml", "호라이 히다호마레 1800ml", "나부라 1800ml",
        "요아케마에 1800ml", "불로천 1800ml"];
    sakeprice = ["60,000", "78,000", "85,000", "80,000", "90,000", "62,000", "50,000", "103,000", "45,000", "57,800", "95,000", "72,000",
        "57,000", "80,000", "53,000", "93,000", "70,000", "130,000", "90,000", "103,000", "190,000", "118,000", "300,000", "1,000,000", "90,000", "90,000",
        "50,000", "48,000", "39,000", "30,000", "38,000", "58,000"];
    pic = ["../../img/Sake/jyunmai/bansyuikkon.png", "../../img/Sake/jyunmai/soku.png", "../../img/Sake/jyunmai/akabu.png", "../../img/Sake/jyunmai/kamaitachi.png",
        "../../img/Sake/jyunmai/sitida.png", "../../img/Sake/jyunmai/konaki.png", "../../img/Sake/jyunmai/kamenoumi.png",
        "../../img/Sake/jyunmai/W.png", "../../img/Sake/ginjyo/bakuren.png", "../../img/Sake/ginjyo/dewasakura.png",
        "../../img/Sake/ginjyo/izumo.png", "../../img/Sake/ginjyo/kubota.png", "../../img/Sake/ginjyo/kokuryu.png",
        "../../img/Sake/ginjyo/kikuhime.png", "../../img/Sake/ginjyo/bizyohu.png", "../../img/Sake/ginjyo/kosinokannbai.png",
        "../../img/Sake/daiginjyo/gasan.png", "../../img/Sake/daiginjyo/bokusi.png", "../../img/Sake/daiginjyo/kudoki.png",
        "../../img/Sake/daiginjyo/yukimanman.png", "../../img/Sake/daiginjyo/kosinokagetora.png", "../../img/Sake/daiginjyo/ugonotuki.png",
        "../../img/Sake/daiginjyo/masumi.png", "../../img/Sake/daiginjyo/zaku.png", "../../img/Sake/honjyozo/uragasan.png",
        "../../img/Sake/honjyozo/wakanami.png", "../../img/Sake/honjyozo/chiyo.png", "../../img/Sake/honjyozo/kinoene.png",
        "../../img/Sake/honjyozo/horai.png", "../../img/Sake/honjyozo/nabura.png", "../../img/Sake/honjyozo/yoakemae.png",
        "../../img/Sake/honjyozo/bullo.png"];
    picalt = ["반슈잇콘", "소쿠", "아카부", "카마이타치", "시찌다", "코나키", "카메노우미", "W", "바쿠렌", "사쿠라하",
        "이즈모 후지", "쿠보타센쥬", "코쿠류 잇쵸라이", "키쿠히메 아라바시리", "비조후", "칸바이", "키사라기", "보쿠시",
        "쿠도키죠즈", "유키만만", "코시노카게토라", "우고노츠키", "마스미", "자쿠", "코우카", "와카나미", "치요노히카리", "키노에네",
        "호라이 히다호마레", "나부라", "요아케마에", "불로천"];
    detail();
}

function detail() {

    let wrapper = document.getElementById("slist");
    wrapper.innerHTML = "";

    for (let i = 8; i < 16; i++) {
        let slistD = document.createElement("div");
        slistD.classList.add("Sakelist");

        let sakea = document.createElement("a");
        sakea.href = "../../html/alchol_product.html";
        sakea.onclick = function() {
            putData('sake', i);
        }

        let sakeimg = document.createElement("img");
        sakeimg.src = pic[i];
        sakeimg.alt = picalt[i];
        sakea.appendChild(sakeimg);

        let sname = document.createElement("p");
        sname.innerHTML = sakename[i];
        sakea.appendChild(sname);

        let sprice = document.createElement("h3");
        sprice.textContent = "가격 : " + sakeprice[i] + " 원";
        sakea.appendChild(sprice);

        slistD.appendChild(sakea);
        wrapper.appendChild(slistD);
    }
}

function putData(name, idx){
    localStorage.setItem("name", name);
    localStorage.setItem("idx", idx);
}