import React, {Component} from "react";
import s from "./ImageSlider.scss"

export default class ImageSlider extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {  panelStates: ["active", "standby", "standby"],}
    }

    activatePanel = (index) => {
        // find index of the active panel
        let activeIndex = this.state.panelStates.findIndex((value) => value === "active");

        // Put all panels in standby
        let newPanelStates = ["standby", "standby", "standby"];

        // Begin a slide-in from the left
        if (index < activeIndex) {
            return () => {
                newPanelStates[index] = "primedEnterLeft";
                newPanelStates[activeIndex] = "primedExitRight";
                this.setState({panelStates: newPanelStates})
            }
        }
        // Begin a slide-in from the right
        else if (index > activeIndex) {
            return () => {
                newPanelStates[index] = "primedEnterRight";
                newPanelStates[activeIndex] = "primedExitLeft";
                this.setState({panelStates: newPanelStates})
            }
        }
    };

    buildPanelClassName = (index) => {
        let baseClass = 'hero__item_' + index;
        let modifierClass = 'hero__item--' + this.state.panelStates[index];
        return s[baseClass] + " " + s[modifierClass];
    };

    componentDidUpdate(prevProps,prevState) {
        // Copy current state
        let newState = {panelStates: this.state.panelStates.slice()};


        console.log("before changes: new State: " + JSON.stringify(newState));



        // Evolve primed states to move states
        this.state.panelStates.forEach((value, index) => {
            switch (value) {
                case "primedEnterLeft":
                    newState.panelStates[index] = "moveEnterLeft";
                    break;
                case "primedEnterRight":
                    newState.panelStates[index] = "moveEnterRight";
                    break;
                case "primedExitLeft":
                    newState.panelStates[index] = "moveExitLeft";
                    break;
                case "primedExitRight":
                    newState.panelStates[index] = "moveExitRight";
                    break;
            }
        });

        // Evolve move states to active/inactive states
        // this.state.panelStates.forEach((value, index) => {
        //     switch (value) {
        //         case "moveEnterLeft":
        //             newState.panelStates[index] = "active";
        //             break;
        //         case "moveEnterRight":
        //             newState.panelStates[index] = "active";
        //             break;
        //         case "moveExitLeft":
        //             newState.panelStates[index] = "standby";
        //             break;
        //         case "moveExitRight":
        //             newState.panelStates[index] = "standby";
        //             break;
        //     }
        // });


        console.log("after changes: new State: " + JSON.stringify(newState));

        // Update state
        let isUpdateNeeded = false;
        for (let i = 0; i < newState.panelStates.length; i++) {
            if (newState.panelStates[i] !== this.state.panelStates[i]) {
                isUpdateNeeded = true;
                break;
            }
        }
        if (isUpdateNeeded) {
            console.log("Updating");
            this.setState(newState);
        }
    }

    render()
    {
        return (
            <div className={s['hero']}>
                <div className={this.buildPanelClassName(0)} onClick={this.activatePanel(1)} >
                    <div className={s['hero__caption']} >
                        <p className={s['hero__captionText']}>Finish college credits!</p>
                        <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">Winterim classes begin December 16th</a></p>
                        <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">Register now</a></p>
                    </div>
                </div>
                <div className={this.buildPanelClassName(1)} onClick={this.activatePanel(2)}>
                    <div className={s['hero__caption']}>
                        <p className={s['hero__captionText']}>Making resolutions?</p>
                        <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">Take a class at Oakton!</a></p>
                        <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">Apply Now</a></p>
                    </div>
                </div>
                <div className={this.buildPanelClassName(2)} onClick={this.activatePanel(0)}>
                    <div className={s['hero__caption']}>
                        <p className={s['hero__captionText']}>Oakton's 50th Anniversary</p>
                        <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">1969 &ndash; 2019 Timeline</a></p>
                    </div>
                </div>
            </div>
        )
    }
}