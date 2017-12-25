import React, { Component } from "react";
import logo from "../img/logo.png";
import FlatButton from "material-ui/FlatButton";
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


class MainMenu extends Component{
    static defaultProps = {
        pageList: ["HOME", "TIMETABLE", "TRAINERS", "CLASSES", "BLOG", "PRICING", "CONTACTS"]
    }

    state = {
        selectedPage: "TIMETABLE"
    }

    onChangePage = (e)=>{
        let name = e.target.closest('li').getAttribute("name");
        (name !== this.state.selectedPage)&&this.setState({selectedPage: name});
    }

    render(){
        const {pageList} = this.props;

        return(
            <div className="header-menu">
                <div className="header-menu-container">
                    <img src={logo} alt="GYM"/>
                    <nav>
                        <ul>{pageList.map((item, index)=>{
                            return(item === this.state.selectedPage?
                            <li key={index} name={item}>
                                <FlatButton label={item} 
                                className="header-menu-container-list checked"
                                onClick={this.onChangePage} /></li>:
                            <li key={index} name={item}>
                                <FlatButton label={item} 
                                className="header-menu-container-list"
                                onClick={this.onChangePage} /></li>)
                        })}</ul>
                        <AppBar title={this.state.selectedPage}
                        className="header-menu-container-bar"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        zDepth={0}/>
                    </nav>
                </div>
            </div>
        )
    }
}

export default MainMenu;