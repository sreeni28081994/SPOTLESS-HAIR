window.addEventListener("scroll", function () {
  let contenta = document.getElementById("ulnew");
  let contentb = document.getElementById("ulnew1");
  let content1 = document.getElementById("ul3");
  let content2 = document.getElementById("ul6");
  let last = document.getElementById("final");
  let contentlast1 = document.getElementById("ullast1");
  let contentlast2 = document.getElementById("ullast2");
  let contentlast3 = document.getElementById("ullast3");
  let contentlast4 = document.getElementById("ullast4");

  let contentposition1 = content1.getBoundingClientRect().top;
  let contentpositiona = contenta.getBoundingClientRect().top;
  let contentpositionb = contentb.getBoundingClientRect().top;
  let contentpositionlast = last.getBoundingClientRect().top;

  let screenposition = window.innerHeight;

  if (contentpositiona < screenposition) {
    contenta.style.transform = `translate(0px,0px)`;
  } else {
    contenta.style.transform = `translate(200%,0px)`;
  }

  if (contentpositionb < screenposition) {
    contentb.style.transform = `translate(0px,0px)`;
  } else {
    contentb.style.transform = `translate(-200%,0px)`;
  }
  if (contentposition1 < screenposition) {
    content1.style.transform = `translate(0px,0px)`;
    content2.style.transform = `translate(0px,0px)`;
  } else {
    content1.style.transform = `translate(-200%,0px)`;
    content2.style.transform = `translate(200%,0px)`;
  }
  if (contentpositionlast < screenposition) {
    contentlast1.style.transform = `translate(0px,0px)`;
    contentlast2.style.transform = `translate(0px,0px)`;
    contentlast3.style.transform = `translate(0px,0px)`;
    contentlast4.style.transform = `translate(0px,0px)`;

    contentlast1.style.opacity = `1`;
    contentlast2.style.opacity = `1`;
    contentlast3.style.opacity = `1`;
    contentlast4.style.opacity = `1`;
  } else {
    contentlast1.style.transform = `translate(0px,400px)`;
    contentlast2.style.transform = `translate(0px,400px)`;
    contentlast3.style.transform = `translate(0px,400px)`;
    contentlast4.style.transform = `translate(0px,400px)`;

    contentlast1.style.opacity = `0.2`;
    contentlast2.style.opacity = `0.2`;
    contentlast3.style.opacity = `0.2`;
    contentlast4.style.opacity = `0.2`;
  }
});


//image change//

var x=1;


document.getElementById("next").addEventListener("click",function(){
    x+=1;
    if(x>=3){
        x==3
    }
    if(x<=1){
        x==1
    }
    if(x==1){
        document.getElementById("product").src="./ordinary.png"
        document.getElementById("oil").innerHTML="Loreal Elvil Shampoo"
        document.getElementById("para").innerHTML=`Apply Shampoo before using oil to ease hair
        combing. <br />How to use: Apply  oil to the length of
        your hair,and leave it for 30 minutes`


    }
    if(x==2){
    document.getElementById("product").src="./naturaloil.png"
    document.getElementById("oil").innerHTML="Natural Elvil Oil"
    document.getElementById("para").innerHTML=`Natural Shampoo using oil to ease hair
    combing. <br />How to use: Apply  oil to the length of
    your hair,and leave it for 50 minutes`

    }
    if(x==3){
        document.getElementById("product").src="./badamoil.png"
        document.getElementById("oil").innerHTML="Almond Shampoo Elvil"
        document.getElementById("para").innerHTML=`Almond Shampoo uses to ease hair
        joining and threatening.. <br />How to use: Apply  oil to the length of
        your hair,and leave it for 50 minutes`




    }
    if(x>3){
        x=1;
        document.getElementById("product").src="./ordinary.png"
        document.getElementById("oil").innerHTML="Loreal Elvil Shampoo"
        document.getElementById("para").innerHTML=`Apply Shampoo before using oil to ease hair
        combing. <br />How to use: Apply  oil to the length of
        your hair,and leave it for 30 minutes`



    }
    if(x<1){
        x=3;
        document.getElementById("product").src="./badamoil.png"
        document.getElementById("para").innerHTML=`Almond Shampoo uses to ease hair
        joining and threatening.. <br />How to use: Apply  oil to the length of
        your hair,and leave it for 50 minutes`

    }
})


document.getElementById("prev").addEventListener("click",function(){
    x-=1;
    if(x==3){
        document.getElementById("product").src="./badamoil.png"
        document.getElementById("oil").innerHTML="Almond Shampoo Elvil"
        document.getElementById("para").innerHTML=`Almond Shampoo uses to ease hair
        joining and threatening.. <br />How to use: Apply  oil to the length of
        your hair,and leave it for 50 minutes`
        


    }
  
    if(x==1){
        document.getElementById("product").src="./ordinary.png"
        document.getElementById("oil").innerHTML="Loreal Elvil Shampoo"
        document.getElementById("para").innerHTML=`Apply Shampoo before using oil to ease hair
        combing. <br />How to use: Apply  oil to the length of
        your hair,and leave it for 30 minutes`



    }
    if(x==2){
    document.getElementById("product").src="./naturaloil.png"
    document.getElementById("oil").innerHTML="Natural Elvil Oil"
    document.getElementById("para").innerHTML=`Natural Shampoo using oil to ease hair
    combing. <br />How to use: Apply  oil to the length of
    your hair,and leave it for 50 minutes`

    }
    if(x>3){
        x=1;
        document.getElementById("product").src="./product01.png"
        document.getElementById("oil").innerHTML="Loreal Elvil Shampoo"
        document.getElementById("para").innerHTML=`Apply Shampoo before using oil to ease hair
        combing. <br />How to use: Apply  oil to the length of
        your hair,and leave it for 30 minutes`



    }
    if(x<1){
        x=3;
        document.getElementById("product").src="./badamoil.png"
        document.getElementById("oil").innerHTML="Almond Shampoo Elvil"
        document.getElementById("para").innerHTML=`Almond Shampoo uses to ease hair
        joining and threatening.. <br />How to use: Apply  oil to the length of
        your hair,and leave it for 50 minutes`


    }
    
})










