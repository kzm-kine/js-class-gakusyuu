(() => {

    class Accordion {
        //初期化
        constructor(obj){
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);


            const triggerLen = $trigger.length;
            let index = 0;
            while (index < triggerLen) {
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                index++;
            }
        }

            //クリックしたら実行される処理
        clickHandler = (e) => {
            e.preventDefault();
        
            //クリックされたイベントを定義した要素を$targetにぶち込む
            const $target = e.currentTarget;
            //クリックされた次の要素を$contentにぶち込む
            const $content = $target.nextElementSibling;

            //クリックされた次の要素のdisplayがblockかnoneかで分岐処理
            if($content.style.display === 'block'){
                $content.style.display = 'none';
            } else {
                $content.style.display ='block';
            }
        };
    }

    const fuckingAccordion = new Accordion({
        hookName:'#js-faq',
        tagName: 'p'
    });

    const dummyAccordion = new Accordion({
        hookName:'#js-accordion',
        tagName: 'a'
    });

    const miniAccordion = new Accordion({
        hookName:'#js-accordion-mini',
        tagName: 'dt'
    });

})();