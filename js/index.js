

/*let boxWidth = $("#options-box").outerWidth();

$("#iconToggle").click(function(){
    
    
    

   if ( $("#options-container").css("left")=="0px" )
        {
            
            $("#options-container").animate({left:`-${boxWidth}`} , 777)
            
        }
    
    else
        {
            $("#options-container").animate({left:`0px`} , 777)
        }
    
})

*/

let colorsBoxWidth = $("#colors-box").outerWidth();

$("#iconToggle").click(function(){

    if($("#container-box").css("left")=="0px")
        {
            
    $("#container-box").animate({left:`-${colorsBoxWidth}`},777)
            
        }
    else
    {
     $("#container-box").animate({left:"0px"},777)

    }
})


let lis = $("#colors-box ul li");

for(let i=0 ; i<lis.length ; i++)
   
    {
        
    
    let x = Math.round(Math.random()*254)
    let y = Math.round(Math.random()*254)
    let z = Math.round(Math.random()*254)
    
    lis.eq(i).css("backgroundColor",`rgb(${x},${y},${z})`)

    }

lis.click(function(){
    
    let color = $(this).css("backgroundColor");
    $("p,h2,i").css("color",color)
})








$("#colors-box img").click(function(){
    
   let imgSrc = $(this).attr("src");
    
    $("#home").css("backgroundImage",`url(${imgSrc})`)
    $("#home").css("backgroundSize","cover")
})
    
    
    let profileOffset = $(".profile").offset().top;

$(window).scroll(function(){
    
    let scrollTop = $(window).scrollTop();
    
    if(scrollTop > profileOffset-2)
    {
        $("nav").css("backgroundColor","rgba(0,0,0,0.7)")
    }
    
    else
        {
    $("nav").css("backgroundColor","transparent")

        }
})

$("#btnUp").click(function(){
    
    $("body","html").animate({scrollTop:0},1000)
})


$("nav a").click(function(){
    
  let Href = $(this).attr("href");
  let sectionsOffset = $(Href).offset().top;
  $("body","html").animate({scrollTop:sectionsOffset} , 1000)

})














/*

let lis = $("#options-box ul li");

for(let i=0 ; i<lis.length ; i++)
   
    {
        
    
    let x = Math.round(Math.random()*254)
    let y = Math.round(Math.random()*254)
    let z = Math.round(Math.random()*254)
    
    lis.eq(i).css("backgroundColor",`rgb(${x},${y},${z})`)

    }

lis.click(function(){
    
    let color = $(this).css("backgroundColor");
    $("p,h2,i").css("color",color)
})

*/