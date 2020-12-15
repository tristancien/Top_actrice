$(function(){
    
   var $mainMenuItems = $('#main-menu ul').children('li'),
       totalMainMenuItems = $mainMenuItems.length,
       openedIndex = 2,
    
       init = function(){
        bindEvents();
           
           if(validIndex(openedIndex))
               {
                   animateItem($mainMenuItems.eq(openedIndex), true, 700);
               }
    };
    
    bindEvents = function(){
        $mainMenuItems.children(".images").click(function(){
            var newIndex = $(this).parent().index();
            var $item = $mainMenuItems.eq(newIndex);
            if (openedIndex === newIndex)
                {
                    animateItem($item, false, 250);
                    openedIndex = -1;
                }
            else
            {
                if (validIndex(newIndex))
                    {
                        animateItem($mainMenuItems.eq(openedIndex), false, 250);
                        openedIndex = newIndex;
                       animateItem($item, true,250);
                    }
            }
                
        });
        
        $(".button").hover(
            function(){
                $(this).addClass("hovered");             
            },
            function(){
                $(this).removeClass('hovered');
            }
        );
        
        $('.button').click(function(){
            var newIndex = $(this).index();
            var $item = $mainMenuItems.eq(newIndex);
            if (openedIndex === newIndex)
                {
                    animateItem($item, false, 250);
                    openedIndex = -1;
                }
            else
            {
                if (validIndex(newIndex))
                    {
                        animateItem($mainMenuItems.eq(openedIndex), false, 250);
                        openedIndex = newIndex;
                       animateItem($item, true,250);
                    }
            }
        });
    };
    
    
    validIndex = function(indexToCheck)
    {
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    }
    
    animateItem = function($item, toOpen, speed)
    {
        var $colorImage = $item.find(".color");
        var itemParam = toOpen ? {width:'420px'}: {width: "140px"},
            colorImageParam = toOpen ? {left: "0px"}:{left:'140px'};
        
        
        $( ".p1, .p2, .p3").hide();
        
       
        
        $colorImage.animate(colorImageParam,speed);
        $item.animate(itemParam, speed, function(){$('.p1').show(700, function(){
            $('.p2').show(700, function(){
                $('.p3').show(700);
            });
            
        });});         
    };
    
   
    
    init();
    
    
    
});

