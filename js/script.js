// const { use } = require("react");

let user_data = {
  name: '',
  email: '',
  topics: []
};


// first screen


document.querySelector("#first-form .next-btn").addEventListener('click', () => {
  const name = document.querySelector("#name-input");
  const email = document.querySelector("#email-input");


  if(!name.value.trim()){
    alert("please enter your name");
    name.focus();
    return;
  }

  if (!email.value.trim()) {
    alert("please enter your email");
    email.focus();
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)){
    alert("please enter a valid email");
    email.focus();
    return;
  }

  user_data.name = name.value.trim();
  user_data.email = email.value.trim();

  swiper.slideNext();

});


// second screen

document.querySelectorAll('.topic-label').forEach(label => {
    label.addEventListener('click', () => {
        const checkbox = label.querySelector('input[type="checkbox"]');
        
        checkbox.checked = !checkbox.checked;
      
        if (checkbox.checked) {
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });
});


document.querySelector("#second-form .next-btn").addEventListener('click' , ()=> {
  const choice = document.querySelectorAll('#second-form input[name="topics"]:checked');
  user_data.topics = Array.from(choice).map(checkbox => checkbox.value);

  if(user_data.topics.length === 0) {
    alert("please choose at least one topic");
    return;
  }

  swiper.slideNext();

});



document.querySelector("#second-form .submit-btn").addEventListener('click' , () => {
  document.querySelector("#summary-name").textContent = user_data.name;
  document.querySelector("#summary-email").textContent = user_data.email;

  const topicsList = document.querySelector("#summary-topics");
  topicsList.innerHTML = '';
  
  user_data.topics.forEach(topic => {
    const li = document.createElement('li');
    li.textContent = topic;

    topicsList.appendChild(li);
  })
});

// third screen 

document.querySelector("#third-form .complete-btn").addEventListener('click' , () => {
  alert("Submition Completed, thank you");
});



const swiper = new Swiper('.container', {
  slidesPerView: 1, // show on slide
  spaceBetween: 0,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidPreView : 1,
    },
    768: {
        slidPreView : 2,
    },
    1024: {
        slidPreView : 3,
    }
  }
});

swiper.on('slideChange', function () {
    document.querySelector('.switches h4').textContent = `Step ${swiper.activeIndex + 1} of 3`;
});



