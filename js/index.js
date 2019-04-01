;(function($) {
    "use strict";  
    
    //* Form js
    function verificationForm(){
        //jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches
        let textMe;

        $(".next").click(function () {
            if (animating) return false;
            animating = true;

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
            current_fs.siblings().find("h6.photos").html(`Please take the back and front photo of the ${textMe}`);
            

            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50) + "%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'position': 'absolute'
                    });
                    next_fs.css({
                        'left': left,
                        'opacity': opacity
                    });
                },
                duration: 800,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".previous").click(function () {
            if (animating) return false;
            animating = true;

            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();

            //de-activate current step on progressbar
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

            //show the previous fieldset
            previous_fs.show();
            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1 - now) * 50) + "%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'left': left
                    });
                    previous_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'opacity': opacity
                    });
                },
                duration: 800,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

// FORM UPLOAD BUTTON

$(".uploads").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parents("fieldset");
    next_fs = $(this).parents("fieldset").next();

let docText = $(this).parent().find("div.align-self-center  span.content").html();
textMe = docText;
current_fs.next().find("h3").html(`Upload your ${docText}`);

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");


    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({
        opacity: 0
    }, {
        step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = (now * 50) + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
                'transform': 'scale(' + scale + ')',
                'position': 'absolute'
            });
            next_fs.css({
                'left': left,
                'opacity': opacity
            });
        },
        duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});
// Finish BUTTON CLICK EVENT
let yit;
$(".finish").on("click",function(){
    if (animating) return false;
    animating = true;

    current_fs = $(this).parents("fieldset");
    next_fs = $(this).parents("fieldset").prev().prev();

yit = current_fs.prev();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    $("#progressbar li").eq($("fieldset").index(yit)).removeClass("active");


let arrye = next_fs.find("div.shadow-sm");
let sel = $(".verify");
sel.removeClass("d-none")

$(
`
<div class="card mt-4 shadow-sm mb-2 py-2">
      <div class="card-body d-md-flex justify-content-between align-items-center py-2" id="targetMe">
        <div class="align-self-center">
  <span class="bg-primary p-2 rounded-circle"><i class="far fa-address-card text-light"></i></span>
  <span class="content">${textMe}</span>
  
        </div>
        <img src="./image/10-512.png" alt="check" class="align-self-center" style="max-width:2rem;">
      </div>
      
    </div>


`


).appendTo(".targetMe");
const len = sel.find(".targetMe").children().length;
let sum = 0;
sum += (16.7 * len);

sel.find(".progress div.progress-bar").css({"width":`${sum}%`});
sel.find(".progress div.progress-bar").html(`${parseInt((sum) / 100 * 100) }%`)
// sel.show();
$.each(arrye,function(index,value){

  

    if($(value).find("span.content").html().match(textMe)){

$(value).remove();


    }

})

    //show the next fieldset
    next_fs.show();


    //hide the current fieldset with style
    current_fs.animate({
        opacity: 0
    }, {
        step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            
            //2. bring next_fs from the right(50%)
            left = (now * 50) + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            // current_fs.css({
            //     'transform': 'scale(' + scale + ')',
            //     'position': 'absolute'
            // });
            next_fs.css({
                'left': left,
                'opacity': opacity,
                
                
            });
        current_fs.prevAll("fieldset").removeAttr("style");
        },
        duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });




})




// FORM SUBMIT LOGIC

        $(".submit").click(function () {
            return false;
        })
    }; 
    
    //* Add Phone no select
    function phoneNoselect(){
        if ( $('#msform').length ){   
            $("#phone").intlTelInput(); 
            $("#phone").intlTelInput("setNumber", "+880"); 
        };
    }; 
    //* Select js
    function nice_Select(){
        if ( $('.product_select').length ){ 
            $('select').niceSelect();
        };
    }; 
$(":file").on('change',function(e){

    let fileName = e.target.files[0].name;
    $('.custom-file-label').html(fileName);




})



    /*Function Calls*/  
    verificationForm ();
    phoneNoselect ();
    nice_Select ();
})(jQuery);