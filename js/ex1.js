// Complete the following functions
// Displays all body nodes 
const bodyNodes = () => {
    const nodes = document.body.childNodes;
    nodes.forEach(node => {
        console.log(node);
    });
};

bodyNodes();
