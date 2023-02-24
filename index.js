const postButton = document.querySelector('#post-button');

postButton.addEventListener('click',()=>{

    window.location.href= 'https://www.naaree.com/submit-recipe/';

});
const login_Form = document.querySelector('#loginForm');
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');

let submitButton = document.querySelector('#submit-button');


submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const userEmail = login_Form.emailField.value;
    const password = login_Form.passwordField.value;

    if (userEmail === "robertboyel2@gmail.com" && password === "myRestaurant56") {
        alert("You have successfully logged in.");
        window.location.href='https://www.doordash.com/restaurants-near-me/';
        
    } else {
       alert('Invalid email address or password.');
    }
});

const registerButton = document.querySelector('#register-button');

registerButton.addEventListener('click',()=>{

window.location.href='https://www.washingtonpost.com/recipes/';

});


let subscribeButton = document.querySelector('#subscribe-button');

subscribeButton.addEventListener('click',()=>{

window.location.href='https://www.everydayhealthyrecipes.com/subscribe/';
});

const orderButton = document.querySelectorAll('.order-button');


const link = 'https://www.tripadvisor.com/Restaurant_Review-g293936-d10325405-Reviews-Tarragon_Restaurant-Dhaka_City_Dhaka_Division.html';

for(const orderBtn of orderButton){
    orderBtn.addEventListener('click',()=>{

        window.open(link);
    });
}

const scaleTransition = document.querySelectorAll('.scale');
for(const scaleTrans of scaleTransition){
    scaleTrans.addEventListener('mouseenter',()=>{

       scaleTrans.classList.add('scale-transition');
    });
    scaleTrans.addEventListener('mouseleave',()=>{
        scaleTrans.classList.remove('scale-transition');
        });
}


let text = document.querySelector('#text-animation');
text.classList.add('text-anime');

let animate = document.querySelector('#categories');
animate.classList.add('anime');


let icon_transition = document.querySelectorAll('.icon-img');


for(const transition of icon_transition){
    transition.addEventListener('mouseenter',()=>{
        transition.classList.add('icon-animation');
        });
       transition.addEventListener('mouseleave',()=>{
        transition.classList.remove('icon-animation');
        });
        
}
const photos = ['Images/Restaurant1.jpg','Images/Restaurant2.jpg','Images/Restaurant3.jpg','Images/Restaurant4.jpg','Images/Restaurant5.jpg','Images/Restaurant6.jpg','Images/Restaurant7.jpg','Images/Restaurant8.jpg','Images/Restaurant9.jpg','Images/Restaurant10.jpg'];


let image = document.querySelector('#image');


const prevButton = document.querySelector('#previous-button');
const nextButton = document.querySelector('#next-button');

let count = 0;

prevButton.addEventListener('click',()=>{

    count--;

    if(count<0){
        count = photos.length-1;
        image.src=photos[count];
      
    }
   else{
    image.src=photos[count];
   

   }

});

nextButton.addEventListener('click',()=>{


    count++;

    if(count>=photos.length){
        count = 0
        image.src=photos[count];
       
      

    }
   else{
    image.src=photos[count];


   


   }
 
});

 count=-1;
const imageSlider = ()=>{
count++;

if(count>=photos.length){
    count = 0;
    image.src=photos[count];


  
}
else{
image.src=photos[count];
image.classList.add('slide');


}
setTimeout("imageSlider()",3000);
};


window.onload=imageSlider();



let menuIcon = document.querySelector('#hamburger-menu');
const nav = document.querySelector('.nav-bar');
;

menuIcon.addEventListener('click',()=>{
  
nav.classList.toggle('visible');
postButton.classList.toggle('visible');




});





