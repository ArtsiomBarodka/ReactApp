import React from "react";
import fb from "../img/1.png";
import tw from "../img/2.png";
import pt from "../img/3.png";
import gp from "../img/4.png";
import tb from "../img/5.png";
import ins from "../img/6.png";
import rsss from "../img/7.png";
import phone from "../img/ph.png";



function SocialNetworks() {
    const items = [{name: "facebook", adress: "https://facebook.com", img: fb},
            {name: "twitter", adress: "https://twitter.com", img: tw}, 
            {name: "pinterest", adress: "https://ru.pinterest.com", img: pt}, 
            {name: "googlePlus", adress: "https://plus.google.com", img: gp}, 
            {name: "tumblr", adress: "https://tumblr.com", img: tb},
            {name: "instagram", adress: "https://www.instagram.com", img: ins},
            {name: "rss", adress: " ", img: rsss}];

    return(
        <section className="header-socialNetworks">
            <div className="header-socialNetworks-container">
                <div>  
                    <img src={phone} alt="phone"/>
                    <p>1-900-342-9876</p>
                </div>
                <ul>
                    {items.map((item, index) => {
                    return( <li key={index}><a href ={item.adress}><img src={item.img} alt={item.name}/></a></li>)
                    })}
                </ul>
            </div>
        </section>
        )
}

export default SocialNetworks;