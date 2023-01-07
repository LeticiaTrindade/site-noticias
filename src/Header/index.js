import "./style.css";
import React from "react";

function Header() {
    return (

        <nav class="nav">
            <a class="logo col-md-3" href="#">LOGO</a>


            <div class="menu no-responsive col-md-6">
                <ul class="itens">
                    <li class="item active">
                        <a class=" link" href="#">CADASTRAR NOTÍCIAS<span class="sr-only"></span></a>
                    </li>
                    <li class="item">
                        <a class=" link " href="#">EXIBIR NOTÍCIAS</a>
                    </li>
                    <li>
                        <form class=" item my-input-group d-flex">
                            <input class="my-input-text" type="search" placeholder="" />
                            <button class="my-btn " type="submit"></button>
                        </form>

                    </li>

                </ul>


            </div>


            <div class="menu responsive col-md-6">

                <ul class="itens">
                    <li className="item"><button className="my-toggle"></button>
                        <ul>
                            <li class=" active">
                                <a class=" link" href="#">CADASTRAR NOTÍCIAS<span class="sr-only"></span></a>
                            </li>
                            <li>
                                <a class=" link  " href="#">EXIBIR NOTÍCIAS</a>
                            </li>
                            <li><div className="divli">
                                <form class=" my-input-group d-flex">
                                    <input class="my-input-text" type="search" placeholder="" />
                                    <button class="my-btn " type="submit"></button>
                                </form>
                            </div>
                            </li>
                        </ul>
                    </li>
                </ul>


            </div>

        </nav>


    );

}

export default Header;