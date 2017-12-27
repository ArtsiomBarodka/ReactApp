import React, { Component } from "react";
import logo from "../img/logo.png";
import FlatButton from "material-ui/FlatButton";
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';


class MainMenu extends Component{
    static defaultProps = {
        pageList: ["HOME", "TIMETABLE", "TRAINERS", "CLASSES", "BLOG", "PRICING", "CONTACTS"]
    }

    state = {
        selectedPage: "TIMETABLE"
    }

    onChangePage = (e)=>{
        let value = e.target.closest('li').getAttribute("name");
        (value !== this.state.selectedPage)&&this.setState({selectedPage: value});
    }
    
    onChangePageBar = (e, value)=>{
        (value !== this.state.selectedPage)&&this.setState({selectedPage: value});
    }

    render(){
        const {pageList} = this.props;

        return(
            <section className="header-menu">
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
                        <div className="header-menu-container-bar">
                        <IconMenu iconButtonElement={<IconButton ><MoreVertIcon /></IconButton>}
                            onChange={this.onChangePageBar}
                            value={this.state.selectedPage}>
                            {pageList.map((item, index)=>{
                                return <MenuItem value={item} key={index} primaryText={item} />})}
                        </IconMenu>
                        <FlatButton  className="header-menu-container-bar-item"
                            label={this.state.selectedPage} 
                            disabled={true}/>
                        </div>
                    </nav>
                </div>
            </section>
        )
    }
}

export default MainMenu;