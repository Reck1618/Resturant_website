import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});


// Active card on hover
const cards = document.querySelectorAll('.popular-foods__card');

// Iterate through each card
cards.forEach(card => {
  // Add a mouseover event listener to each card
  card.addEventListener('mouseover', () => {
    // Remove the "active-card" class from the currently active card (if any)
    const currentActiveCard = document.querySelector('.popular-foods__card.active-card');
    if (currentActiveCard) {
      currentActiveCard.classList.remove('active-card');
    }
    
    // Add the "active-card" class to the hovered card
    card.classList.add('active-card');
  });
});


// Active filter button on click
const filterButtons = document.querySelectorAll('.popular-foods__filter-btn');

// Iterate through each filter button
filterButtons.forEach(button => {
  // Add a click event listener to each filter button
  button.addEventListener('click', () => {
    // Remove the "active" class from the currently active filter button (if any)
    const currentActiveButton = document.querySelector('.popular-foods__filter-btn.active');
    if (currentActiveButton) {
      currentActiveButton.classList.remove('active');
    }
    
    // Add the "active" class to the clicked filter button
    button.classList.add('active');
  });
});
