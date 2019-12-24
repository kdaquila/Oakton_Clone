import React, {Component} from "react";
import s from "./ImageSlider.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight,
        faChevronLeft,
        faCircle,
        faPlay,
        faPause} from "@fortawesome/free-solid-svg-icons";

export default class ImageSlider extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {  panelClassSuffix: ["initial", "standby", "standby"],
                        activeIndex: 0,
                        isAutoPlay: false}
        this.autoPlayTimer = null;
        this.autoPlayInterval_ms = 2000;
    }

    componentDidMount() {
        // Start autoplay
        if (this.state.isAutoPlay === true && !this.autoPlayTimer) {
            this.startAutoPlay();
        }
    }

    componentDidUpdate() {
        // Start autoplay
        if (this.state.isAutoPlay === true && !this.autoPlayTimer) {
            this.startAutoPlay();
        }

        // Stop autoplay
        else if (this.state.isAutoPlay === false && this.autoPlayTimer){
            this.stopAutoPlay();
        }
    }

    startAutoPlay = () => {
        this.autoPlayTimer = setInterval(() => {
            this.activateNextPanel();
        }, this.autoPlayInterval_ms)
    }

    stopAutoPlay = () => {
        clearInterval(this.autoPlayTimer)
        this.autoPlayTimer = null;
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

    toggleAutoPlayState = () => {
        this.setState({isAutoPlay: !this.state.isAutoPlay});
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
    };

    onClickPrev = () => {
        this.activatePrevPanel()
        this.setState({isAutoPlay: false})
    };

    onClickNext = () => {
        this.activateNextPanel()
        this.setState({isAutoPlay: false})
    };

    onClickGoto = (index) => {
        this.activatePanel(index)
        this.setState({isAutoPlay: false})
    }

    render()
    {
        return (
            <div className={s['hero']}>
                <div className={s['hero__goToControls']}>
                    <div className={this.buildGotoButtonClassName(0)}>
                        <FontAwesomeIcon icon={faCircle} onClick={()=>this.onClickGoto(0)} />
                    </div>
                    <div className={this.buildGotoButtonClassName(1)}>
                        <FontAwesomeIcon icon={faCircle} onClick={()=>this.onClickGoto(1)}/>
                    </div>
                    <div className={this.buildGotoButtonClassName(2)}>
                        <FontAwesomeIcon icon={faCircle} onClick={()=>this.onClickGoto(2)}/>
                    </div>
                    <div className={s['hero__playPauseButton']} onClick={this.toggleAutoPlayState}>
                        {this.state.isAutoPlay ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}
                    </div>
                </div>

                <div className={s['hero__nextControls']}>
                    <div className={s['hero__nextControlButton']}>
                        <FontAwesomeIcon icon={faChevronLeft} onClick={this.onClickPrev}/>
                    </div>
                    <div className={s['hero__nextControlButton']}>
                        <FontAwesomeIcon icon={faChevronRight} onClick={this.onClickNext}/>
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