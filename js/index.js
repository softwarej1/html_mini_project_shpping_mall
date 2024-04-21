/* ## iframe auto height setting -> 문제점 발생!!  ------       **

function resizeIframe() {
    var iframe = document.getElementById("myIframe");
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
                    -> iframe 요소 속성 contentDocument, contentWidow -> iframe 안에 element에 접근
    iframe.style.height = innerDoc.body.scrollHeight + 'px';
}
*/

function onInit(){    
    let iframe = document.getElementById('myIframe');
  
    // addEventListener(variable, function) : 실행변수, 실행할 함수
    window.addEventListener('message', function(e) {
      // 하위 html에서 받은  message -> e.data
      let message = e.data;
  
      iframe.style.height = message.height + "px";
    } , false);
}
