const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})


/*// Text to be displayed with typing effect
// const text = ["an Animator","a Graphic Designer","a Human","a Dead Programmer"];

// // Speed of typing (in milliseconds)
// const typingSpeed = 100; // Adjust as needed

// // Get the span element
// const typingSpan = document.getElementById("dynamictext");

// // Initialize index to 0
// let index = 0;

// // Function to add a character to the typing span
// function typeText() {
//   if (index < text.length) {
//     typingSpan.textContent += text.charAt(index);
//     index++;
//   } else {
//     clearInterval(typingInterval); // Stop the interval when typing is complete
//   }
// }

// // Start the typing effect
// const typingInterval = setInterval(typeText, typingSpeed); */

    // Typing effect with js in main section
    var typed = new Typed('.typinjs', {
      strings: ['Krishna Singh Rathore.', 'a Developer.', 'an Animator',"Graphic Designer","a Human","a DeadProgerammer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
  });


//   slider js file
