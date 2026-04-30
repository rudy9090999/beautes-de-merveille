const quotes = [
    "“Your body is not a problem to solve. It is a story to honor.”",
    "“You are not too much. You are exactly enough for the life you are meant to live.”",
    "“Every curve is a line of poetry written in your favor.”",
    "“Style is not a size; it is the way you choose to show up for yourself.”",
    "“Softness is not weakness. It is a different kind of strength.”",
    "“You deserve clothes that fit your body, not the other way around.”"
];

const quoteText = document.getElementById("quote-text");
const newQuoteBtn = document.getElementById("new-quote-btn");

if (newQuoteBtn) {
    newQuoteBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
    });
}
