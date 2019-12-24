import React, {Component} from "react";
import s from "./ImageSlider.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight,
        faChevronLeft,
        faCircle} from "@fortawesome/free-solid-svg-icons";

export default class ImageSlider extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {  panelClassSuffix: ["initial", "standby", "standby"],
                        activeIndex: 0}
    }

    activateNextPanel = () => {
        const nextIndex = this.mod((this.state.activeIndex + 1), this.state.panelClassSuffix.length);
        this.activatePanel(nextIndex)
    };

    activatePrevPanel = () => {
        const prevIndex = this.mod((this.state.activeIndex - 1), this.state.panelClassSuffix.length);
        this.activatePanel(prevIndex)
    }

    activatePanel = (index) => {
        console.log("Moving to another panel");
        console.log("Requested index is: " + index);
        console.log("Current index is: " + this.state.activeIndex);

        // find index of the active panel
        let activeIndex = this.state.activeIndex;

        // Put all panels in standby
        let newPanelStates = ["standby", "standby", "standby"];

        // Begin a slide-in from the left
        if (index < activeIndex) {
            newPanelStates[index] = "enterLeft";
            newPanelStates[activeIndex] = "exitRight";
            this.setState({panelClassSuffix: newPanelStates,
                           activeIndex: index})
        }
        // Begin a slide-in from the right
        else if (index > activeIndex) {
            newPanelStates[index] = "enterRight";
            newPanelStates[activeIndex] = "exitLeft";
            this.setState({panelClassSuffix: newPanelStates,
                           activeIndex: index})
        }
    };

    buildPanelClassName = (index) => {
        let baseClass = 'hero__item_' + index;
        let modifierClass = 'hero__item--' + this.state.panelClassSuffix[index];
        return s[baseClass] + " " + s[modifierClass];
    };

    buildGotoButtonClassName = (index) => {
        let baseClass = 'hero__goToControlButton';
        let suffix = '--inActive';
        if (this.state.activeIndex === index) {
            suffix = '--active';
        }
        return s[baseClass + suffix];
    }

    render()
    {
        return (
            <div className={s['hero']}>
                <div className={s['hero__goToControls']}>
                    <div className={this.buildGotoButtonClassName(0)}>
                        <FontAwesomeIcon icon={faCircle} onClick={()=>this.activatePanel(0)} />
                    </div>
                    <div className={this.buildGotoButtonClassName(1)}>
                        <FontAwesomeIcon icon={faCircle} onClick={()=>this.activatePanel(1)}/>
                    </div>
                    <div className={this.buildGotoButtonClassName(2)}>
                        <FontAwesomeIcon icon={faCircle} onClick={()=>this.activatePanel(2)}/>
                    </div>
                </div>
                <div className={s['hero__nextControls']}>
                    <div className={s['hero__nextControlButton']}>
                        <FontAwesomeIcon icon={faChevronLeft} onClick={this.activatePrevPanel}/>
                    </div>
                    <div className={s['hero__nextControlButton']}>
                        <FontAwesomeIcon icon={faChevronRight} onClick={this.activateNextPanel}/>
                    </div>
                </div>
                <div className={this.buildPanelClassName(0)}  >
                    <div className={s['hero__caption']} >
                        <p className={s['hero__captionText']}>Finish college credits!</p>
                        <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">Winterim classes begin December 16th</a></p>
                        <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">Register now</a></p>
                    </div>
                </div>
                <div className={this.buildPanelClassName(1)} >
                    <div className={s['hero__caption']}>
                        <p className={s['hero__captionText']}>Making resolutions?</p>
                        <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">Take a class at Oakton!</a></p>
                        <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">Apply Now</a></p>
                    </div>
                </div>
                <div className={this.buildPanelClassName(2)} >
                    <div className={s['hero__caption']}>
                        <p className={s['hero__captionText']}>Oakton's 50th Anniversary</p>
                        <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">1969 &ndash; 2019 Timeline</a></p>
                    </div>
                </div>
            </div>
        )
    }

    mod(n, m) {
        return ((n % m) + m) % m;
    }
}