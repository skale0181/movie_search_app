 function navbar(){

    return  `<div class="navbar">
    <div id="brandlogo"> <img
    src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1"
    alt=""> </div>

    <div id="searchInput">
        <input type="search" id="search" placeholder="search movie here">
    <button id="massage" >search</button>
    </div>
    
    <div id="navRight">
        <span id="signup" > <a href="signin.html">Signup</a></span>
        <span id="login" > <a href="login.html">Login</a></span>
    </div>
</div>`;


 }


 export default navbar