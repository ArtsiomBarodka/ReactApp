import React, { Component } from "react";
import SocialNetworks from "./SocialNetworks";
import Menu from "./Menu";
import HeadTable from "./HeadTable";

class Header extends Component{
    render(){
        return(
            <header>
                <SocialNetworks></SocialNetworks>
                <Menu></Menu>
                <HeadTable></HeadTable>
            </header>
        )
    }
}

export default Header;
