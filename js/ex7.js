const content = document.getElementById("content");

let a = prompt("Enter first integer:");
let b = prompt("Enter second integer:");

const isInteger = (val) => /^-?\d+$/.test(val);

if (isInteger(a) && isInteger(b)) {
    const sum = parseInt(a) + parseInt(b);
    content.innerHTML = `${a} + ${b} = <span style="color:red; font-weight:bold">${sum}</span>`;
} else {
    content.innerHTML = 
        `<span style="color:red; font-weight:bold">Error!</span> You must enter integers. You entered "${a}" and "${b}." Try again.`;
}
