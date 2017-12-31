import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import TimetableList from "./TimetableList";



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
                            <li><div></div></li>
                            <li><div>MONDAY</div></li>
                            <li><div>TUESDAY</div></li>
                            <li><div>WEDNESDAY</div></li>
                            <li><div>THURSDAY</div></li>
                            <li><div>FRIDAY</div></li>
                            <li><div>SATURDAY</div></li>
                            <li><div>SUNDAY</div></li>
                        </ul>
                        <ul className="time-6-7">
                            <li><div>06.00-07.00</div></li>
                            <TimetableList lesson={menuItem[1]} room={rooms[0]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[5]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[1]} room={rooms[0]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[5]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[1]} room={rooms[0]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <li><div></div></li>
                        </ul>
                        <ul className="time-7-8">
                            <li><div>07.00-08.00</div></li>
                            <TimetableList lesson={menuItem[4]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[2]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[4]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[6]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[2]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[4]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                        </ul>
                        <ul className="time-8-9">
                            <li><div>08.00-09.00</div></li>
                            <TimetableList lesson={menuItem[3]} room={rooms[2]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[6]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[3]} room={rooms[2]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[6]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[6]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[3]} room={rooms[2]} selected={selectedItem} all={menuItem[0]}/>
                        </ul>
                        <ul className="time-9-10">
                            <li><div>09.00-10.00</div></li>
                            <TimetableList lesson={menuItem[1]} room={rooms[0]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[1]} room={rooms[0]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[2]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[1]} room={rooms[0]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[6]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                        </ul>
                        <ul className="time-10-11">
                            <li><div>10.00-11.00</div></li>
                            <TimetableList lesson={menuItem[5]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[2]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[6]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[6]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[5]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                        </ul>
                        <ul className="time-11-12">
                            <li><div>11.00-12.00</div></li>
                            <TimetableList lesson={menuItem[3]} room={rooms[2]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[5]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[3]} room={rooms[2]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[5]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[2]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[3]} room={rooms[2]} selected={selectedItem} all={menuItem[0]}/>
                        </ul>
                        <ul className="time-12-13">
                            <li><div>12.00-13.00</div></li>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[2]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[4]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[6]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[6]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                        </ul>
                        <ul className="time-13-14">
                            <li><div>13.00-14.00</div></li>
                            <TimetableList lesson={menuItem[4]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[2]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <li><datagrid></datagrid></li>
                            <TimetableList lesson={menuItem[4]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                        </ul>
                        <ul className="time-14-15">
                            <li><div>14.00-15.00</div></li>
                            <TimetableList lesson={menuItem[1]} room={rooms[0]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[1]} room={rooms[0]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[6]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[1]} room={rooms[0]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[6]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                        </ul>
                        <ul className="time-15-16">
                            <li><div>15.00-16.00</div></li>
                            <TimetableList lesson={menuItem[3]} room={rooms[2]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[3]} room={rooms[2]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[2]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[3]} room={rooms[2]} selected={selectedItem} all={menuItem[0]}/>
                        </ul>
                        <ul className="time-16-17">
                            <li><div>16.00-17.00</div></li>
                            <TimetableList lesson={menuItem[5]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <TimetableList lesson={menuItem[2]} room={rooms[1]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[6]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                            <TimetableList lesson={menuItem[6]} room={rooms[3]} selected={selectedItem} all={menuItem[0]}/>
                            <li><div></div></li>
                        </ul>
                    </section>
               </div>
            </section>
        )
    }
}

export default Timetable;