function headerClick() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// $(document).on('resize, ready', function() {
//     if($(window).width() > 1300) {
//         $('.report__background').remove();
//         $('.main').addClass('report__background');
//     }
// });

const reviews = [
    {
        id: 1,
        name: "@darryncodes",
        title: "Update The Ticket Trends",
        job: "Front-end developer",
        img: "./assets/Animated/diagram.gif",
        
        width: '200px', height: '200px', padding: '1rem',
        text:
            'InnvoDesk reporting allows you to monitor your ticket inflow appropriately. Then, your staff can easily handle their work perfectly. The ticket volume reports will guide you to check past trends and assist your representatives to create future reports.'
    },
    {
        id: 2,
        title: "Personalized Dashboard",
        img: "./assets/Animated/line-chart.gif",
        width: '175px', height: '200px',
        text:
            'InnvoDesk reporting features include enhancing sorting, report scheduling, and filtering. You can able to watch your helpdesk analytics on a personalized dashboard and make your team do data-driven decisions to satisfy their support targets. '
   },
    {
        id: 3,
        title: "Schedule Reports",
        img: "./assets/Animated/notebook.gif",
        width: '200px', height: '200px',
        text:
        `You can schedule reports with predefined parameters according to the time and date. The innvoDesk reporting feature will help you to schedule monthly, biweekly, weekly, and yearly reports. `
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
];

const imgText = document.getElementById("imgText");
const img = document.getElementById("img");
const testimonial = document.getElementById("report_testimonial");
const name = document.getElementById("name");
const job = document.getElementById("job");

const leftBtn = document.querySelector(".carousel__btn--left");
const rightBtn = document.querySelector(".carousel__btn--right");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showContent();
});

function showContent() {
    const item = reviews[currentItem];
    img.src = item.img;
    img.style.width = item.width;
    img.style.height = item.height;
    img.style.padding = item.padding ? item.padding : '1rem';
    imgText.textContent = item.title;
    testimonial.textContent = item.text;
    
    
}

rightBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showContent();
});

leftBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showContent();
});
