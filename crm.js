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
//         $('.crm__background').remove();
//         $('.main').addClass('crm__background');
//     }
//     console.log("sdfgd");

// });


const reviews = [
    {
        id: 1,
        name: "@darryncodes",
        title: "Top Reasons to Choose InnvoDesk",
        job: "Front-end developer",
        img: "https://www.keliam.com/wp-content/uploads/2021/07/CRM.jpeg",
        
        width: '250px', height: '250px', padding: '0',
        text:
            'InnvoDesk is best for Start-ups, Small teams, Individual Enterpreuners, Marketing, CMS, workflow automation, Service, lead capture, Sales process tracking, opportunity management, and eCommerce. It allows you to track all of your communication with every customer. It makes you handle all your leads and ongoing deals.'
    },
    {
        id: 2,
        title: "All-in-One Customer Services",
        img: "./assets/internet-izzi.png",
        width: '250px', height: '200px',
        text:
            'InnvoDesk CRM will automate your marketing, sales, and service in a single platform. It allows consistent messaging and avoids data leakage. In sales, it covers contact management, telephone, deals, project management, appointment scheduling, and gamification. '
   },
    {
        id: 3,
        title: "Simple Multiple Ticket Management",
        img: "https://cm.consol-software.at/fileadmin/images/consol-cm/cm-home-header.png",
        width: '250px', height: '200px',
        text:
        `The Browser-like creative UI and tabs make it simpler for representatives or users to operate on multiple tickets jointly without navigating to any multiple clicks, and windows. 
            All the integrations, features, simple implementation, and good support are available at the lowest price in InnvoDesk. `
    },
    {
        id: 4,
        title: "Personalize your Applications",
        img: "./assets/Transform Your Customer Experience.png",
        width: '200px', height: '200px',
        text:
        `At InnvoDesk, you can generate custom layouts, and use APIs to interact with the applications you are using with unlimited personalization options.  
            InnvoDesk is a cloud-based SaaS service that is fast, mobile-ready, and easy to use. You don’t require any technical professionals to use this software`
    },
    
];

const imgText = document.getElementById("imgText");
const img = document.getElementById("img");
const testimonial = document.getElementById("testimonial");
const name = document.getElementById("name");
const job = document.getElementById("job");

const leftBtn = document.querySelector(".carousel__btn--left");
const rightBtn = document.querySelector(".carousel__btn--right");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    img.style.width = item.width;
    img.style.height = item.height;
    img.style.padding = item.padding ? item.padding : '2rem';
    imgText.textContent = item.title;
    testimonial.textContent = item.text;
}

rightBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

leftBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});
