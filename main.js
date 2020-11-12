// function myFunction() {
//     var x = document.getElementById("myLinks");

//         if (x.style.display === "block") {
//             x.style.display = "none";
//            } 
//         else {
//             x.style.display = "block";
//             }
            
//         }

        

    //read more progress
            $(function(){
            $('.data').hide();

            $('button').on('click',function(){
            $('.data').slideToggle(2000);
            });
    //show/hide mobilenav links
            $('#hamburger').on('click',function(){
            $('#myLinks').toggle();
            });
     //subscribe button
            $('button.signupright').on('click',function(){
            alert("Thank you ,You are now subscribed to Virunga National Park's newsletter ");
            });
     // show/hide selfie text
            $('.k').mouseover(function () { 
            $('.k p').css('display','block');
            });

            $('.k').mouseleave(function () { 
            $('.k p').css('display','none');
            });

    //hide align right content when href is showing
            $('#hamburger').on('click',function(){
            $('.align_right').toggle();
            });

    //hide the click to enlarge h4
            $('.thumb').on('click',function(){
                $('h4').hide();
            });

            
    //photo gallery
           
            var numImgs = $('div.locationGallery .polaroidImage').length;
            var prevImages = $('.polaroidImage').prevAll().length;
            var imageClicked;
           
            $('.polaroidImage').click(function(){
               var prevImages = $(this.parentNode).prevAll().find('.polaroidImage').length;
               if(prevImages > 0){
                   $('.prev').show();
               }else{
                   $('.prev').hide();
               }
               if(prevImages == (numImgs - 1)){
                   $('.next').hide();
               }else{
                   $('.next').show();
               }
            });

            $(".thumb").click(function(){
                 imageClicked = $(this);
               $(".imageDisplay").find('img').remove();
               $(".imageDisplay").append("<img src='"+imageClicked.attr('src')+"' />")
            });
           
            $('.next').click(function(){
               imageClicked.closest('.imageContainer').next().find('img').trigger('click');
            });
           
            $('.prev').click(function(){
               imageClicked.closest('.imageContainer').prev().find('img').trigger('click');
            });

    //show more button slides content up/down

           $('.btn').on('click',function(){
               $('.r').slideToggle(2000);
               $('.s').slideToggle(2000);
               $('.t').slideToggle(2000);
               $('.u').slideToggle(2000);
               $('.v').slideToggle(2000);
               $('.w').slideToggle(2000);
           });
       
        
        });
        
        
        