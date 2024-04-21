let sakeName = ["播州一献 純米 超辛口720ml (반슈잇콘 준마이 초카라쿠치)", "蒼空 純米酒 美山錦 1800ml (소쿠 준마이 미야마니시키)", "赤武 AKABU 純米酒 1800ml (아카부 준마이)", "かまいたち 純米 辛口原酒 1800ml (카마이타치)", "七田(しちだ) 純米 無濾過 1800ml (시찌다 준마이)", "こなき純米 辛口 山田錦 1800ml (코나키 준마이)",
"亀の海 超辛口純米 1800ml (카메노우미 준마이)", "W(ダブリュー) 純米 亀の尾 無濾過生原酒 1800ml【クール便推奨】 (더블유 준마이 카메노싯포)", "ばくれん 超辛口吟醸 1800ml (바쿠렌 초카라쿠치 긴죠)", "出羽桜 桜花吟醸酒 1800ml (데와자쿠라 사쿠라하 긴죠)", "出雲富士 吟 本生 1800ml (이즈모 후지 긴 혼쇼우)", "久保田千寿 吟醸 1800ml (쿠보타센쥬 긴죠)",
"黒龍 いっちょらい 1.800ml (코쿠류 잇쵸라이)", "菊姫 吟醸あらばしり 1800ml (키쿠히메 긴죠 아라바시리)", "美丈夫 吟醸 秋酒 1800ml (비조후 긴죠 아키사케)", "越乃寒梅 吟醸酒 特撰 1800ml (코시노 칸바이 긴죠 특선)", "雅山流 大吟醸 如月 1800ml (가산류 다이긴죠 키사라기)",
"牧之(ぼくし) 限定 大吟醸 生詰め原酒 720ml (보쿠시 한정 다이긴죠 나마즈메 겐슈 )", "くどき上手 大吟醸 720ml  (쿠도키죠즈 다이긴죠)", "出羽桜 雪漫々 大吟醸 1800ml  (데와자쿠라 유키만만 다이킨죠)", "越乃景虎 金銘泉 特撰大吟醸1800ml  (코시노카게토라)", "雨後の月 大吟醸 金賞受賞酒 720ml  (우고노츠키 다이긴죠)", "真澄 大吟醸 オーク樽熟成 720ml  (마스미 다이긴죠)", "筰 大吟醸 滴取り 750ml  (자쿠 다이긴죠)",
"裏雅山流 本醸造生詰 香華 1800ml (우라가산류 혼죠조나마즈메 코우카)", "若波本醸造しぼりたて 1800ml (와카나미 혼죠조 시보리타테)", "千代の光 本醸造 1800ml (치요노히카리 혼죠조)", "甲子しぼりたて生 1800ml (키노에네 시보리타테 생)", "蓬莱(ほうらい) ひだほまれ酒米づくり研究会 1800ml (호라이 히다호마레 사카마이즈쿠리 연구회)", "なぶら 1800ml (나부라)",
"夜明け前 からくち 1800ml (요아케마에)", "不老泉 1800ml (불로천)"];

let sakePrice = ["60,000", "78,000", "85,000", "80,000", "90,000", "62,000", "50,000", "103,000", "45,000", "57,800", "95,000", "72,000",
"57,000", "80,000", "53,000", "93,000", "70,000", "130,000", "90,000", "103,000", "190,000", "118,000", "300,000", "1,000,000", "90,000", "90,000",
"50,000", "48,000", "39,000", "30,000", "38,000", "58,000"];

let sakePic = ["./../img/Sake/jyunmai/bansyuikkon.png", "./../img/Sake/jyunmai/soku.png", "./../img/Sake/jyunmai/akabu.png", "./../img/Sake/jyunmai/kamaitachi.png",
"./../img/Sake/jyunmai/sitida.png", "./../img/Sake/jyunmai/konaki.png", "./../img/Sake/jyunmai/kamenoumi.png",
"./../img/Sake/jyunmai/W.png", "./../img/Sake/ginjyo/bakuren.png", "./../img/Sake/ginjyo/dewasakura.png",
"./../img/Sake/ginjyo/izumo.png", "./../img/Sake/ginjyo/kubota.png", "./../img/Sake/ginjyo/kokuryu.png",
"./../img/Sake/ginjyo/kikuhime.png", "./../img/Sake/ginjyo/bizyohu.png", "./../img/Sake/ginjyo/kosinokannbai.png",
"./../img/Sake/daiginjyo/gasan.png", "./../img/Sake/daiginjyo/bokusi.png", "./../img/Sake/daiginjyo/kudoki.png",
"./../img/Sake/daiginjyo/yukimanman.png", "./../img/Sake/daiginjyo/kosinokagetora.png", "./../img/Sake/daiginjyo/ugonotuki.png",
"./../img/Sake/daiginjyo/masumi.png", "./../img/Sake/daiginjyo/zaku.png", "./../img/Sake/honjyozo/uragasan.png",
"./../img/Sake/honjyozo/wakanami.png", "./../img/Sake/honjyozo/chiyo.png", "./../img/Sake/honjyozo/kinoene.png",
"./../img/Sake/honjyozo/horai.png", "./../img/Sake/honjyozo/nabura.png", "./../img/Sake/honjyozo/yoakemae.png",
"./../img/Sake/honjyozo/bullo.png"];


let fruitwineName = ["天狗舞 梅酒 1800ml (텐구마이 매실주)", "黒糖梅酒 1800ml (흑설탕 매실주)", "鳳凰美田 いちご酒 500ml (호오비덴 딸기주)", "鶴梅 柚子 1800ml (츠루우메 유자)", "百年梅酒ウイスキー樽熟成 720ml(백년매실주 위스키통 숙성)",
    "天吹 アポロン ブラッドオレンジ梅酒 1800ml (아마부키 아폴론 블러드오렌지 매실주)", "すてきな マンゴー酒 1800ml(멋진 망고주)", "唐草まっこり 1800ml(카라쿠사 막걸리)", "黒牛梅酒(くろうしうめしゅ) 1800ml (흑우 매실주)", "すてきな みかん酒 1800ml (멋진 귤주)"];

let fruitwinePrice = ["38,000", "48,000", "33,000", "44,000", "60,000", "50,000", "40,000", "40,000", "52,000", "40,000"];

let fruitwinePic = ["./../img/fruitwine/tengu.png", "./../img/fruitwine/blacksugar.png", "./../img/fruitwine/strawberry.png", "./../img/fruitwine/yuza.png",
    "./../img/fruitwine/100year.png", "./../img/fruitwine/amabuki.png", "./../img/fruitwine/mango.png",
    "./../img/fruitwine/karakusa.png", "./../img/fruitwine/blackcow.png", "./../img/fruitwine/mikang.png",];

let beerName = ["アサヒスーパードライ350ml (아사히 슈퍼드라이) X 24", "アサヒスーパードライ ドライクリスタル 350ml (아사히 슈퍼드라이 크리스탈) X 24", "アサヒ生ビール 350ml (아사히 생맥주) X 24", "アサヒ食彩 350ml (아사히 쇼쿠사이) X 24", "アサヒオリオン ザ・ドラフト 350ml (아사히 오리온 더 드래프트) X 24",
"アサヒ オリオン 75BEER ホワイトエール 350ml (아사히 오리온 75비어 화이트 에일) X", "ザ・プレミアム・モルツ 350ml缶 (더 프리미엄 몰츠) X 24", "アイスドラフト〈生〉350ml缶 (아이스 드래프트) X 24", "金麦 350ml缶 (킨무기) X 24", "サントリー生ビール 350ml缶 (산토리 생맥주) X 24", "パーフェクトサントリービール 350ml缶(퍼펙트 산토리 맥주) X 24", 
"東京クラフト〈ペールエール〉350ml缶 (도쿄 크래프트 <페일에일>) X 24", "セブンプレミアム ザ・ブリュー 350ml缶 (세븐프리미엄 브루) X 24", "KIRIN 一番搾り350ml (기린 이치방시보리) X 24", "キリン のどごし<生> 350ml (기린 노도코시) X 24", "キリンラガービール 350ml (기린 라거맥주) X 24", "キリンビール 晴れ風 350ml (기린 맥주 하레카제) X 24",
"本麒麟 350ml (혼키린) X 24"];

let beerPrice = ["43,000", "49,000", "40,300", "60,000", "40,000", "50,000", "53,000", "71,300", "70,000", "56,000", "80,000", "70,000",
"50,000", "60,000", "100,000", "70,000", "38,000", "48,000", "51,000", "61,000", "60,000", "44,000", "58,000", "51,000", "38,000", "48,000",
"58,000", "40,000", "50,000", "70,000", "40,000", "38,000"];


let beerPic = ["./../img/Beer/Asahi/super1.png", "./../img/Beer/Asahi/crystal1.png", "./../img/Beer/Asahi/nama1.png", "./../img/Beer/Asahi/shyokusai1.png",
"./../img/Beer/Asahi/draft1.png", "./../img/Beer/Asahi/whiteale1.png", "./../img/Beer/Suntory/premium1.png", "./../img/Beer/Suntory/draft1.png",
"./../img/Beer/Suntory/kinmugi1.png", "./../img/Beer/Suntory/nama1.png", "./../img/Beer/Suntory/perfect1.png", "./../img/Beer/Suntory/tokyo1.png",
"./../img/Beer/Suntory/brew1.png", "./../img/Beer/Kirin/ichiban1.png", "./../img/Beer/Kirin/nodokosi1.png", "./../img/Beer/Kirin/laga1.png", 
"./../img/Beer/Kirin/harekaze1.png" , "./../img/Beer/Kirin/honkirin1.png"
];


let sojuName = ["くじらの黒麦 1800ml (고래의 흑보리)", "天の刻印 1800ml (하늘의 각인)", "おこげ 1800ml  (오코게)", "無一物 1800ml (무이치부츠 / 무소유)", "村正 1800ml (무라마사)", "丸山 1800ml (마루야마)",
"黒さそり 1800ml (쿠로사소리)", "夢想仙楽 720ml (몽상선락 / 무소센라쿠)", "悪魔の抱擁 1800ml (악마의 포옹 / 아쿠마노호요)", "やきいも黒瀬 1800ml(야키이모쿠로세)", "侍士の門 1800ml (사무라이의 문 / 사무라이노몬)", "坐忘1800ml (자보)",
"俘 1800ml (토리코)", "太久保 RED CASK レッドカスク 1800ml (오쿠보 레드캐스크)", "甕雫 1800ml (카메시즈쿠)", "むかしむかし 古酒 1800ml (무카시무카시 고주)", "八海山 よろしく千萬あるべし 1800ml (하카이산 잘 부탁한다)",
"野うさぎの走り 米焼酎37° 600ml (토끼의 질주)", "耶馬美人 米焼酎25° 1800ml (야바비진)", "有機米焼酎 豊永蔵(とよながくら) 1800ml (토요나가쿠라)", "あさぎりの花 1800ml (아사기리꽃)", "天誅 1800ml (천벌/텐츄)", "天吹 1800ml (아마부키)", "鳥飼 720ml (토리카이)",
"直火請福 1800ml (직화세이후쿠)", "残波 1800ml 白(잔파 백)", "やまかわ 1800ml (야마카와)", "まさひろ 1800ml (마사히로)", "昔醸 翠古(すいこ) 1800ml (무카시즈쿠리 스이코)", "春雨カリー1800ml (하루사메카리)",
"琉球泡盛 太郎(たろう) 720ml (타로)", "瑞泉(ずいせん) 青龍 3年古酒 720ml (즈이센 청룡)"];

let sojuPrice = ["43,000", "49,000", "40,300", "60,000", "40,000", "50,000", "53,000", "71,300", "70,000", "56,000", "80,000", "70,000",
"50,000", "60,000", "100,000", "70,000", "38,000", "48,000", "51,000", "61,000", "60,000", "44,000", "58,000", "51,000", "38,000", "48,000",
"58,000", "40,000", "50,000", "70,000", "40,000", "38,000"];

let sojuPic = ["./../img/Soju/borisoju/gore.png", "./../img/Soju/borisoju/gakin.png", "./../img/Soju/borisoju/okoge.png", "./../img/Soju/borisoju/musoyu.png",
"./../img/Soju/borisoju/muramasa.png", "./../img/Soju/borisoju/maruyama.png", "./../img/Soju/borisoju/sasori.png",
"./../img/Soju/borisoju/mongsang.png", "./../img/Soju/imosoju/devil.png", "./../img/Soju/imosoju/kurose.png",
"./../img/Soju/imosoju/samurai.png", "./../img/Soju/imosoju/zabo.png", "./../img/Soju/imosoju/toriko.png",
"./../img/Soju/imosoju/okubo.png", "./../img/Soju/imosoju/kamesizuku.png", "./../img/Soju/imosoju/mukasi.png",
"./../img/Soju/ricesoju/hakaisan.png", "./../img/Soju/ricesoju/rabbit.png", "./../img/Soju/ricesoju/yababijin.png",
"./../img/Soju/ricesoju/toyonagakura.png", "./../img/Soju/ricesoju/asagiri.png", "./../img/Soju/ricesoju/tenchyu.png",
"./../img/Soju/ricesoju/amabuki.png", "./../img/Soju/ricesoju/torikai.png", "./../img/Soju/awamori/seihuku.png",
"./../img/Soju/awamori/janpa.png", "./../img/Soju/awamori/yamakawa.png", "./../img/Soju/awamori/masahiro.png",
"./../img/Soju/awamori/suiko.png", "./../img/Soju/awamori/harusame.png", "./../img/Soju/awamori/taro.png",
"./../img/Soju/awamori/zuisen.png"];


// ---------------------------- 장바구니 html Dom ----------------------------------
/*
    -> alchol_product.js 에서 장바구니 버튼으로 인해 동적으로 테이블 생성 필요
    product에서 저장된 cartIdx, cartName -> 배열로 반환받아 vCartIdx.length까지 tr 생성
*/
function onInit(){
    let cartIdx = localStorage.getItem("cartIdx");
    let cartName = localStorage.getItem("cartName");

    let vCartIdx = cartIdx.split(",");
    let vCartName = cartName.split(",");

    for(let idx = 1; idx < vCartIdx.length; idx++){
        let table = document.querySelector('.cart_table'); // document.querySelector() -> css 선택자처럼 사용할 수 있는 메서드 .cart_table -> table 정보를 변수에 반환
        let newRow = document.createElement('tr'); // createElement() -> 요소 생성 -> 'tr'
        newRow.classList.add("cart_list_detail"); // class 속성 추가 -> tr 태그 Ex ] <tr class = "cart_list_detail">

        // --------------- 체크 박스 셀 영역 ---------------------

        let checkboxCell = document.createElement("td");
        let checkboxInput = document.createElement("input");
        checkboxInput.setAttribute("type", 'checkbox'); // setAttribute() -> 속성 부여 type, checkbox
        checkboxCell.appendChild(checkboxInput); // 해당 요소에 자식으로 추가
        newRow.appendChild(checkboxCell);

        // --------------- 이미지 셀 영역 --------------------------

        let imageCell = document.createElement("td");
        imageCell.classList.add("imageCell");
        let image = document.createElement("img");

        // soju, sake, fruitwine, beer 각기 다른 이미지를 판별하여 출력
        if(vCartName[idx] === "soju"){
            image.setAttribute("src", sojuPic[vCartIdx[idx]]);
        }else if(vCartName[idx] === "sake"){
            image.setAttribute("src", sakePic[vCartIdx[idx]]);
        }else if(vCartName[idx] === "fruitwine"){
            image.setAttribute("src", fruitwinePic[vCartIdx[idx]]);
        }else if(vCartName[idx] === "beer"){
            image.setAttribute("src", beerPic[vCartIdx[idx]]);
        }

        imageCell.appendChild(image);
        newRow.appendChild(imageCell);

        // --------------------- 상품 정보 영역 ------------------------
        let infoCell = document.createElement("td");
        
        let infoProductLink = document.createElement("a");
        infoProductLink.setAttribute("href", "./alchol_product.html"); // 속성 href, 속성값
        let infoPriceTagP = document.createElement("p");
        infoPriceTagP.classList.add("price");
        
        if(vCartName[idx] === "soju"){
            infoProductLink.textContent = sojuName[vCartIdx[idx]];
            infoPriceTagP.textContent = sojuPrice[vCartIdx[idx]] + "원";
        }else if(vCartName[idx] === "sake"){
            infoProductLink.textContent = sakeName[vCartIdx[idx]];
            infoPriceTagP.textContent = sakePrice[vCartIdx[idx]] + "원";
        }else if(vCartName[idx] === "fruitwine"){
            infoProductLink.textContent = fruitwineName[vCartIdx[idx]];
            infoPriceTagP.textContent = fruitwinePrice[vCartIdx[idx]] + "원";
        }else if(vCartName[idx] === "beer"){
            infoProductLink.textContent = beerName[vCartIdx[idx]];
            infoPriceTagP.textContent = beerPrice[vCartIdx[idx]] + "원";
        }

        infoCell.appendChild(infoProductLink);
        infoCell.appendChild(infoPriceTagP);
        newRow.appendChild(infoCell);

        // -------------------- 상품 옵션 영역 ---------------------------
        let optionCell = document.createElement("td");
        newRow.appendChild(optionCell);

        //--------------------- 상품 금액 영역 ----------------------------
        let priceCell = document.createElement("th");
        let priceTagP = document.createElement("p");

        if(vCartName[idx] === "soju"){
            priceTagP.textContent = sojuPrice[vCartIdx[idx]] + "원";
        }else if(vCartName[idx] === "sake"){
            priceTagP.textContent = sakePrice[vCartIdx[idx]] + "원";
        }else if(vCartName[idx] === "fruitwine"){
            priceTagP.textContent = fruitwinePrice[vCartIdx[idx]] + "원";
        }else if(vCartName[idx] === "beer"){
            priceTagP.textContent = beerPrice[vCartIdx[idx]] + "원";
        }

        priceCell.appendChild(priceTagP);
        newRow.appendChild(priceCell);

        // ------------------- 상품 배송 영역 -------------------------------
        let deliveryCell = document.createElement("th");
        let deliveryTagP = document.createElement("p");
        deliveryTagP.textContent = "무료";
        deliveryCell.appendChild(deliveryTagP);
        newRow.appendChild(deliveryCell);

        table.appendChild(newRow); // 테이블에 appendChild -> 자식으로 추가
    }
}