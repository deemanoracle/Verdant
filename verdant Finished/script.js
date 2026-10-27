// Filter the weekly picks
const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");

    productCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.hidden = !show;
    });
  });
});

// Basket count goes up when you add an item
const basketCount = document.getElementById("basket-count");
const addButtons = document.querySelectorAll(".add-button, .image-content-second-group button");

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    basketCount.textContent = Number(basketCount.textContent) + 1;
  });
});

// Membership form
const membershipForm = document.getElementById("membership-form");
const membershipMessage = document.getElementById("membership-message");

membershipForm.addEventListener("submit", (event) => {
  event.preventDefault();
  membershipMessage.textContent = "Thanks for joining. Check your email for next steps.";
  membershipForm.reset();
});
