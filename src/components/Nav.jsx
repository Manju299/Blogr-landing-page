import logo from "../assets/logo.svg";

import "../index.css";

function Nav(){
    return(
        <>
        <header>
        <section>
            <img src={logo} alt="logo"></img>
        </section>
        <section>
        
        <ul>
            <li><a href="#">Product</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Connect</a></li>
        </ul>
        </section>
        <section>
            <ul>
                <li><a href="#">Login</a></li>
                <button className="signup" type="submit">Sign Up</button>

            </ul>
        </section>
        </header>
        <main>
            <article>
            <h1> A modern Publishing platform</h1>
            <p> Grow your audience and build your online brand</p>
            </article>
            <section>
                <button> Start for free   </button>
                <button> Learn More </button>
            </section>

        </main>
        </>
    )
}

export default Nav;
