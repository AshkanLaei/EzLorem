const enLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.';
const fnLorem = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.';

//this parametr is for certain the lang is persian or no :D
// برای مشخص کردن زبان 
function Getlorem(bool) {
    if (bool === true) {
        return fnLorem;
    }
    return enLorem;
}

//selector for select an element for lorem text
function ElSelect(selector) {
    var element;
    if (typeof selector === 'string'){
        element = document.querySelectorAll(selector);
    }
    else if (typeof selector === 'object'){
        element = selector;
    }
    else
        element = undefined;
    //the finall text that want to be add
    var loremText;
    const el = {

        AddLorem: function (options) {
            let letters = options.letters;
            let lang = options.lang;
            let words = options.words
            let paragraph = options.paragraph;
            let asHTML = options.asHTML;
            let HtmlTag = options.HtmlTag;
            let HtmlClasses = options.HtmlClasses;
            let addedText = options.addText;
            let filledUnits = 0;

            // check for filled units
            if(paragraph !== undefined){
                filledUnits++;
            }
            if(words !== undefined){
                filledUnits++;
            }
            if(letters !== undefined){
                filledUnits++;
            }
            
            // get the related text 
            if (lang === 'en') {
                loremText = Getlorem(false);
            } else {
                loremText = Getlorem(true);
            }
           
            // by letter
            if (letters != undefined && filledUnits === 1) {
                loremText = loremText.substring(0, letters);
            }

            // by word
            if(words !== undefined && filledUnits === 1){
                var splited = loremText.split(' ');
                let finall ='';
                for (let index = 0; index < words; index++) {
                    if(splited[index] !== undefined){
                        finall += splited[index] + ' ';
                    }
                }
                finall.replace(',',' ');
                loremText = finall;
            }

            // by paragraph
            if(paragraph !== undefined && filledUnits === 1){
                let asParagraph = loremText.repeat(paragraph);
                loremText = asParagraph;
            }

            // add text
            if(addedText != undefined){
                loremText = addedText + loremText;
            }

            // html check
            if(asHTML === true){
                let tag;
                let Classes;
                if(HtmlTag !== undefined){
                    tag = HtmlTag;
                }
                if(HtmlClasses !==undefined){
                    Classes = HtmlClasses;
                }
                let inHTML = '<'+tag +' class="'+
                Classes+'" >' + loremText + '</'+tag+'>';
                loremText = inHTML;
            }
            // =======================================
            if(element.innerHTML === undefined){
                element.forEach(item => {
                    item.innerHTML = loremText;
                });
            }else{
                element.innerHTML = loremText;
            }
        }

    }

    return el;
}