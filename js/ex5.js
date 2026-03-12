const output = document.getElementById("output");

for (let i = 1; i <= 12; i++) {
    const row = document.createElement("div");
    row.textContent = i;
    row.classList.add("row");

    if (i % 4 === 0) {
        row.classList.add("blue");
    }

    output.appendChild(row);
}
