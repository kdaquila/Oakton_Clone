import React from "react";
import styles from "./CallToAction.scss";
import DropDown from "../DropDown/DropDown";

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
            <DropDown title="Visit" menuItems={["Des Plaines", "Skokie", "Virtual"]}/>
            <DropDown title="Apply" menuItems={["On-Campus", "On-line", "Hybrid"]}/>
            <DropDown title="Register" menuItems={["In-Person", "On-line", "Hybrid"]}/>
        </div>
    )}
}