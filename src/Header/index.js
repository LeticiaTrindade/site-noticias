import "./style.css";
import React from "react";

function Header() {
    return (

        

        <nav class="nav navbar navbar-expand-lg ">
            <a class="logo navbar-brand col-md-5" href="#">LOGO</a>
            <button class="my-toggle navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                
            </button>

            <div class="menu collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class=" item  nav-link" href="#">CADASTRAR NOTÍCIAS<span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item">
                        <a class=" item  nav-link" href="#">EXIBIR NOTÍCIAS</a>
                    </li>
                   
                </ul>

                <form class=" my-input-group d-flex">
                    <input class="my-input-text" type="search" placeholder=""/>
                        <button class="my-btn " type="submit"></button>
                </form>
            </div>
        </nav>


    );

}

export default Header;