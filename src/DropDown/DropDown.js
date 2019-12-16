import React from "react";
import styles from "./DropDown.scss";

export default class DropDown extends React.Component {

    title = this.props.title;
    menuItems = this.props.menuItems;
    state = {isMenuVisible: false};

    showMenu = () => {
        this.setState({isMenuVisible: true})
    };

    hideMenu = () => {
        this.setState({isMenuVisible: false})
    };

    render() {
        return (
            <div className={styles.DropDown} onMouseOver={this.showMenu} onMouseLeave={this.hideMenu}>
                <div className={styles.DropDown__Heading}>{this.title}</div>
                <ul className={styles.DropDown__Menu} hidden={!this.state.isMenuVisible}>
                    {this.menuItems.map((item, index) => (
                        <li key={index} className={styles.DropDown__Item}>{item}</li>))}
                </ul>
            </div>
        )
    }
}