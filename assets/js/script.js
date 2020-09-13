var openMenuButton=document.getElementById("navMenu");
var navBar = document.getElementById("navBar");
var closeMenuButton=document.getElementById("navMenuClose");
var overlay=document.querySelector(".overlay");
var navMenuMoblie=document.querySelector("#navMenuMobile");
var errorText= document.getElementById("errorText");
var goButton=document.getElementById("goButton");
var emailInputText=document.getElementById("emailInputBox");
var facebookButton=document.getElementById("facebookButton");
var twitterButton=document.getElementById("twitterButton");
var youtubeButton=document.getElementById("youtubeButton");
var instagramButton=document.getElementById("instagramButton");
var pinterestButton=document.getElementById("pinterestButton");

facebookButton.addEventListener("mouseenter",function(){
    this.setAttribute("src","assets/img/icon-facebook-orange.svg")
});
facebookButton.addEventListener("mouseleave",function(){
    this.setAttribute("src","assets/img/icon-facebook.svg")
});

twitterButton.addEventListener("mouseenter",function(){
    this.setAttribute("src","assets/img/icon-twitter-orange.svg")
});
twitterButton.addEventListener("mouseleave",function(){
    this.setAttribute("src","assets/img/icon-twitter.svg")
});

youtubeButton.addEventListener("mouseenter",function(){
    this.setAttribute("src","assets/img/icon-youtube-orange.svg")
});
youtubeButton.addEventListener("mouseleave",function(){
    this.setAttribute("src","assets/img/icon-youtube.svg")
});

instagramButton.addEventListener("mouseenter",function(){
    this.setAttribute("src","assets/img/icon-instagram-orange.svg")
});
instagramButton.addEventListener("mouseleave",function(){
    this.setAttribute("src","assets/img/icon-instagram.svg")
});

pinterestButton.addEventListener("mouseenter",function(){
    this.setAttribute("src","assets/img/icon-pinterest-orange.svg")
});
pinterestButton.addEventListener("mouseleave",function(){
    this.setAttribute("src","assets/img/icon-pinterest.svg")
});




errorText.style.display="none";


openMenuButton.addEventListener("click",function(){
    navMenuMoblie.style.display="flex";
    this.style.display="none";
    navBar.style.background="rgba(255,255,255)";
    overlay.style.display="block";
    closeMenuButton.style.display="inline"; 
});


closeMenuButton.addEventListener("click",function(){
    navMenuMoblie.style.display="none";
    navBar.style.background="none";
    this.style.display="none";
    overlay.style.display="none";
    openMenuButton.style.display="inline"; 
});


goButton.addEventListener("click",function(){
    var email=emailInputText.value;
    var regexPattern= /([a-z]|[0-9])+@([a-z]|[0-9])+(\.([a-z]|[0-9])+)+/i;
    if(email=="")
    {
        errorText.innerText="Email field is empty.";
        errorText.style.color="red";
        errorText.style.display="flex";
    }
    else if(regexPattern.test(email)==false)
    {
        errorText.innerText="The entered email is invalid.";
        errorText.style.color="red";
        errorText.style.display="flex";
    }
    else
    {
        errorText.innerText="Thank you for registering!";
        errorText.style.color="green";
        errorText.style.display="flex";
    }
    

});

emailInputText.addEventListener("click",function(){
    errorText.style.display="none";
    errorText.style.color="red";
});