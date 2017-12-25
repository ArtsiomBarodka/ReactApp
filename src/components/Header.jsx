import React, { Component } from "react";
import SocialNetworks from "./SocialNetworks";
import MainMenu from "./MainMenu";
import HeadTable from "./HeadTable";

class Header extends Component{
    render(){
        return(
            <header>
                <SocialNetworks></SocialNetworks>
                <MainMenu></MainMenu>
                <HeadTable></HeadTable>
            </header>
        )
    }
}

export default Header;
