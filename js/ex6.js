const words = [
    { term: "Procrastination", definition: "Avoidance of doing a task that needs to be accomplished" },
    { term: "Tautology", definition: "logical argument constructed in such a way that it is logically irrefutable" },
    { term: "Oxymoron", definition: "figure of speech that juxtaposes elements that appear to be contradictory" }
];

const content = document.getElementById("content");
const dl = document.createElement("dl");

words.forEach(w => {
    const dt = document.createElement("dt");
    dt.innerHTML = `<strong>${w.term}</strong>`;

    const dd = document.createElement("dd");
    dd.textContent = w.definition;

    dl.appendChild(dt);
    dl.appendChild(dd);
});

content.appendChild(dl);
