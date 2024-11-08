// /* This file should contain any DOM manipulation
// needed to populate the header, nav, and footer elements
// */

const headerHTML = `
    <div class="image-header">
        <img src="../images/LosAngeles.jpg" alt="city" style="width:100%">
        <div class="header">Los Angeles</div>
    </div>
      
    <nav class="navbar">
        <a href="../index.html">Home</a> 
        <a href="../attractions.html">Attractions</a> 
        <a href="../restaurants">Restaurants</a>
        <a href="../newRest.html">New Restaurant</a>
    </nav>
`;


const footerHTML = `
    <footer class="footer">
        <div class="footer-content">
            <p>Contact Info: orombawa@sfsu.edu</p>
        </div>
    </footer>
`;


document.body.insertAdjacentHTML('afterbegin', headerHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);
