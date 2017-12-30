import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";



class Timetable extends Component{

    static defaultProps = {
        menuItem: ["All", "Aerobics", "Crosfit", "Boxing", "Kik Boxing", "Pilates", "Spinning"],
        rooms : ["Room A", "Room B", "Room C", "Room D"]
    }

    state = {
        selectedItem: "All"
    }

    onChangeItem = (e)=>{
        let value = e.target.closest('li').getAttribute("name");
        value !== this.state.selectedItem&&this.setState({selectedItem: value});
    }

    render(){
        const {menuItem, rooms} = this.props;
        const {selectedItem} = this.state;

        return(
            <section className="Timetable">
                <div className="Timetable-container">
                    <nav>
                        <ul className="Timetable-container-menu">{menuItem.map((item, index)=>{
                            return(item === selectedItem?
                                <li key={index} name={item}><FlatButton label={item.toUpperCase()}
                                    className="Timetable-container-menu-list checkedItem"
                                    onClick={this.onChangeItem}/></li>:
                                <li key={index} name={item}><FlatButton label={item.toUpperCase()}
                                    className="Timetable-container-menu-list"
                                    onClick={this.onChangeItem}/></li>
                            )
                        })}</ul>
                    </nav>
                    <section className="Timetable-container-table">
                        <ul className="days">
                            <li></li>
                            <li>MONDAY</li>
                            <li>TUESDAY</li>
                            <li>WEDNESDAY</li>
                            <li>THURSDAY</li>
                            <li>FRIDAY</li>
                            <li>SATURDAY</li>
                            <li>SUNDAY</li>
                        </ul>
                        <ul className="time-6-7">
                            <li>06.00-07.00</li>
                            <li name={menuItem[1]}>{(menuItem[1]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[1]}-${rooms[0]}`}</li>
                            <li name={menuItem[5]}>{(menuItem[5]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[5]}-${rooms[3]}`}</li>
                            <li name={menuItem[1]}>{(menuItem[1]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[1]}-${rooms[0]}`}</li>
                            <li name={menuItem[5]}>{(menuItem[5]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[5]}-${rooms[3]}`}</li>
                            <li name={menuItem[1]}>{(menuItem[1]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[1]}-${rooms[0]}`}</li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul className="time-7-8">
                            <li>07.00-08.00</li>
                            <li name={menuItem[4]}>{(menuItem[4]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[4]}-${rooms[1]}`}</li>
                            <li name={menuItem[2]}>{(menuItem[2]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[2]}-${rooms[1]}`}</li>
                            <li></li>
                            <li name={menuItem[4]}>{(menuItem[4]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[4]}-${rooms[1]}`}</li>
                            <li name={menuItem[6]}>{(menuItem[6]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[6]}-${rooms[3]}`}</li>
                            <li name={menuItem[2]}>{(menuItem[2]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[2]}-${rooms[1]}`}</li>
                            <li name={menuItem[4]}>{(menuItem[4]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[4]}-${rooms[1]}`}</li>
                        </ul>
                        <ul className="time-8-9">
                            <li>08.00-09.00</li>
                            <li name={menuItem[3]}>{(menuItem[3]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[3]}-${rooms[2]}`}</li>
                            <li name={menuItem[6]}>{(menuItem[6]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[6]}-${rooms[3]}`}</li>
                            <li name={menuItem[3]}>{(menuItem[3]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[3]}-${rooms[2]}`}</li>
                            <li name={menuItem[6]}>{(menuItem[6]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[6]}-${rooms[3]}`}</li>
                            <li></li>
                            <li name={menuItem[6]}>{(menuItem[6]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[6]}-${rooms[3]}`}</li>
                            <li name={menuItem[3]}>{(menuItem[3]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[3]}-${rooms[2]}`}</li>
                        </ul>
                        <ul className="time-9-10">
                            <li>09.00-10.00</li>
                            <li name={menuItem[1]}>{(menuItem[1]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[1]}-${rooms[0]}`}</li>
                            <li></li>
                            <li name={menuItem[1]}>{(menuItem[1]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[1]}-${rooms[0]}`}</li>
                            <li name={menuItem[2]}>{(menuItem[2]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[2]}-${rooms[1]}`}</li>
                            <li name={menuItem[1]}>{(menuItem[1]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[1]}-${rooms[0]}`}</li>
                            <li></li>
                            <li name={menuItem[6]}>{(menuItem[6]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[6]}-${rooms[3]}`}</li>
                        </ul>
                        <ul className="time-10-11">
                            <li>10.00-11.00</li>
                            <li name={menuItem[5]}>{(menuItem[5]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[5]}-${rooms[3]}`}</li>
                            <li name={menuItem[2]}>{(menuItem[2]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[2]}-${rooms[1]}`}</li>
                            <li></li>
                            <li name={menuItem[6]}>{(menuItem[6]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[6]}-${rooms[3]}`}</li>
                            <li></li>
                            <li name={menuItem[6]}>{(menuItem[6]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[6]}-${rooms[3]}`}</li>
                            <li name={menuItem[5]}>{(menuItem[5]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[5]}-${rooms[3]}`}</li>
                        </ul>
                        <ul className="time-11-12">
                            <li>11.00-12.00</li>
                            <li name={menuItem[3]}>{(menuItem[3]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[3]}-${rooms[2]}`}</li>
                            <li name={menuItem[5]}>{(menuItem[5]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[5]}-${rooms[3]}`}</li>
                            <li name={menuItem[3]}>{(menuItem[3]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[3]}-${rooms[2]}`}</li>
                            <li name={menuItem[5]}>{(menuItem[5]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[5]}-${rooms[3]}`}</li>
                            <li></li>
                            <li name={menuItem[2]}>{(menuItem[2]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[2]}-${rooms[1]}`}</li>
                            <li name={menuItem[3]}>{(menuItem[3]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[3]}-${rooms[2]}`}</li>
                        </ul>
                        <ul className="time-12-13">
                            <li>12.00-13.00</li>
                            <li></li>
                            <li name={menuItem[2]}>{(menuItem[2]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[2]}-${rooms[1]}`}</li>
                            <li></li>
                            <li name={menuItem[4]}>{(menuItem[4]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[4]}-${rooms[1]}`}</li>
                            <li name={menuItem[6]}>{(menuItem[6]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[6]}-${rooms[3]}`}</li>
                            <li></li>
                            <li name={menuItem[6]}>{(menuItem[6]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[6]}-${rooms[3]}`}</li>
                        </ul>
                        <ul className="time-13-14">
                            <li>13.00-14.00</li>
                            <li name={menuItem[4]}>{(menuItem[4]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[4]}-${rooms[1]}`}</li>
                            <li></li>
                            <li></li>
                            <li name={menuItem[2]}>{(menuItem[2]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[2]}-${rooms[1]}`}</li>
                            <li></li>
                            <li></li>
                            <li name={menuItem[4]}>{(menuItem[4]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[4]}-${rooms[1]}`}</li>
                        </ul>
                        <ul className="time-14-15">
                            <li>14.00-15.00</li>
                            <li name={menuItem[1]}>{(menuItem[1]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[1]}-${rooms[0]}`}</li>
                            <li></li>
                            <li name={menuItem[1]}>{(menuItem[1]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[1]}-${rooms[0]}`}</li>
                            <li name={menuItem[6]}>{(menuItem[6]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[6]}-${rooms[3]}`}</li>
                            <li name={menuItem[1]}>{(menuItem[1]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[1]}-${rooms[0]}`}</li>
                            <li name={menuItem[6]}>{(menuItem[6]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[6]}-${rooms[3]}`}</li>
                            <li></li>
                        </ul>
                        <ul className="time-15-16">
                            <li>15.00-16.00</li>
                            <li name={menuItem[3]}>{(menuItem[3]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[3]}-${rooms[2]}`}</li>
                            <li></li>
                            <li name={menuItem[3]}>{(menuItem[3]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[3]}-${rooms[2]}`}</li>
                            <li></li>
                            <li></li>
                            <li name={menuItem[2]}>{(menuItem[2]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[2]}-${rooms[1]}`}</li>
                            <li name={menuItem[3]}>{(menuItem[3]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[3]}-${rooms[2]}`}</li>
                        </ul>
                        <ul className="time-16-17">
                            <li>16.00-17.00</li>
                            <li name={menuItem[5]}>{(menuItem[5]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[5]}-${rooms[3]}`}</li>
                            <li name={menuItem[2]}>{(menuItem[2]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[2]}-${rooms[1]}`}</li>
                            <li></li>
                            <li name={menuItem[6]}>{(menuItem[6]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[6]}-${rooms[3]}`}</li>
                            <li></li>
                            <li name={menuItem[6]}>{(menuItem[6]===selectedItem||menuItem[0]===selectedItem)&&`${menuItem[6]}-${rooms[3]}`}</li>
                            <li></li>
                        </ul>
                    </section>
               </div>
            </section>
        )
    }
}

export default Timetable;