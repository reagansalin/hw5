const addCOBLink = () => {
    const list = document.getElementById("links");
    const isLink = document.getElementById("is");

    const newItem = document.createElement("li");
    const newA = document.createElement("a");
    newA.href = "https://www.csulb.edu/college-of-business";
    newA.textContent = "College of Business";

    newItem.appendChild(newA);

    list.insertBefore(newItem, isLink);
};

addCOBLink();
