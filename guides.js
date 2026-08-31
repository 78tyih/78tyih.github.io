document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("[data-guide-search]");
  const cards = [...document.querySelectorAll(".article-card")];
  if (!input || !cards.length) return;

  input.addEventListener("input", () => {
    const query = input.value.trim().toLocaleLowerCase();
    cards.forEach((card) => {
      const matches = !query || card.textContent.toLocaleLowerCase().includes(query);
      card.classList.toggle("is-hidden", !matches);
    });
  });
});
