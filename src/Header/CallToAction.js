import React from "react";
import styles from "./CallToAction.scss";
import DropdownApp from "./DropdownApp";

export default class CallToAction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isMenuHidden: true};
        this.toggleMenuVisibility = () => {
            this.setState({isMenuHidden: !this.state.isMenuHidden})
        }
    }

    render () {return (
        <div className={styles.callToAction}>
            <div className={styles.ddWrapper}>
                <div className={styles.callToAction__button} onMouseOver={this.toggleMenuVisibility} onMouseLeave={this.toggleMenuVisibility}>Hello</div>
                <ul className={styles.callToAction__menu} hidden={this.state.isMenuHidden}>
                    <li className={styles.callToAction__menuItem}>Illinois</li>
                    <li className={styles.callToAction__menuItem}>Florinda</li>
                    <li className={styles.callToAction__menuItem}>Wisconsin</li>
                </ul>
            </div>
            <div className={styles.ddWrapper}>
                <div className={styles.callToAction__button}>Apply</div>
            </div>
            <div className={styles.ddWrapper}>
                <div className={styles.callToAction__button}>Register</div>
            </div>
        </div>
    )}
}