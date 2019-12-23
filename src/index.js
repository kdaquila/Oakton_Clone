// React imports
import React from "react";
import ReactDOM from "react-dom";

// global style imports
import "./_reset.scss";

// local style import
import s from "./index.scss";

// images
import studentsInHallway from "./images/brad-neathery-XrSzacdYbtQ-unsplash.jpg";
import womanInMedLab from "./images/ani-kolleshi-7jjnJ-QA9fY-unsplash_reScale.png";
import peopleAroundLaptop from "./images/mimi-thian-vdXMSiX-n6M-unsplash_reScale.png";
import networkEquipment from "./images/thomas-jensen-UrtxBX5i5SE-unsplash_reScale.png";
import manWorkingAtComputer from "./images/tim-van-der-kuip-CPs2X8JYmS8-unsplash_reScale.png";
import peoplePlayingViolin from "./images/manuel-nageli-7CcPLtywRso-unsplash_reScale.png";

// My Component imports
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ImageSlider from "./ImageSlider/ImageSlider";
import AbstractCarousel from "./AbstractCarousel/AbstractCarousel";

function App() {
    return (
        <div>
            <Header/>
            <div className={s['page']}>
                <div className={s['page__content']}>
                    <ImageSlider/>
                    <section className={s['main']}>
                        <div className={s['main__col1']}>
                            <div className={s['explore']}>
                                <h1 className={s['explore__heading']}>EXPLORE</h1>
                                <h2 className={s['explore__item']}><a href="#">Academic Calendar</a>
                                </h2>
                                <h2 className={s['explore__item']}><a href="#">Academic Credit
                                    Programs</a></h2>
                                <h2 className={s['explore__item']}><a href="#">Class Schedules</a></h2>
                                <h2 className={s['explore__item']}><a href="#">Class Search -
                                    Credit</a></h2>
                                <h2 className={s['explore__item']}><a href="#">College Catalog</a></h2>
                                <h2 className={s['explore__item']}><a href="#">Financial Aid</a></h2>
                                <h2 className={s['explore__item']}><a href="#">Honors</a></h2>
                                <h2 className={s['explore__item']}><a href="#">Online Learning</a></h2>
                                <h2 className={s['explore__item']}><a href="#">Register for Classes</a>
                                </h2>
                                <h2 className={s['explore__item']}><a href="#">Scholarships</a></h2>
                                <h2 className={s['explore__item']}><a href="#">Veterans Information</a>
                                </h2>
                                <h2 className={s['explore__item']}><a href="#">Winterim Classes</a>
                                </h2>
                            </div>
                        </div>
                        <div className={s["main__col2"]}>
                            <div className={s['spotlight']}>
                                <div className="spotlight__col1">
                                    <img className={s['spotlight__image']} src={studentsInHallway} alt="students in the hallway"/>
                                </div>
                                <div className={s['spotlight__col2']}>
                                    <h1 className={s['spotlight__title']}>SPOTLIGHT</h1>
                                    <h2 className={s['spotlight__heading']}>Spring Registration</h2>
                                    <p className={s['spotlight__text']}>Registration is open for spring classes Spring semester
                                        begins Tuesday, January 21. Register in-person at either campus or online.</p>
                                    <a>
                                        <button className={s['spotlight__button']}>Read More</button>
                                    </a>
                                </div>
                            </div>
                            <div className={s['opportunity']}>
                                <h1 className={s['opportunity__title']}>OPPORTUNITIES</h1>
                                <div className={s['opportunity__list']}>
                                    <div className={s['opportunity__item']}>
                                        <img className={s['opportunity__image']} src={womanInMedLab} alt="woman inside laboratory"/>
                                        <h1 className={s['opportunity__heading']}>Health Careers Information Sessions</h1>
                                        <p className={s['opportunity__text']}>Health career opportunities are expanding rapidly. Learn more about your options</p>
                                        <button className={s['opportunity__button']}>View More</button>
                                    </div>
                                    <div className={s['opportunity__item']}>
                                        <img className={s['opportunity__image']} src={peopleAroundLaptop} alt="students gathered around computer"/>
                                        <h1 className={s['opportunity__heading']}>Transfer Partnerships</h1>
                                        <p className={s['opportunity__text']}>Partnerships provide students with benefits and ease of
                                            transition to their respective college or university.</p>
                                        <button className={s['opportunity__button']}>View More</button>
                                    </div>
                                    <div className={s['opportunity__item']}>
                                        <img className={s['opportunity__image']} src={networkEquipment} alt="networking equipment"/>
                                        <h1 className={s['opportunity__heading']}>STEM Scholars</h1>
                                        <p className={s['opportunity__text']}>Program and scholarship designed for students with
                                            financial need pursuing a degree or career in a STEM field.</p>
                                        <button className={s['opportunity__button']}>View More</button>
                                    </div>
                                    <div className={s['opportunity__item']}>
                                        <img className={s['opportunity__image']}  src={manWorkingAtComputer} alt="man working at a computer"/>
                                        <h1 className={s['opportunity__heading']}>Internships</h1>
                                        <p className={s['opportunity__text']}>Internships allow students to gain professional
                                            experience, build résumés and explore careers</p>
                                        <button className={s['opportunity__button']}>View More</button>
                                    </div>
                                    <div className={s['opportunity__item']}>
                                        <img className={s['opportunity__image']} src={peoplePlayingViolin} alt="people playing violins"/>
                                        <h1 className={s['opportunity__heading']}>Music</h1>
                                        <p className={s['opportunity__text']}>Oakton's Music Department offers a variety of
                                            performing opportunities and study with distinguished faculty.</p>
                                        <button className={s['opportunity__button']}>View More</button>
                                    </div>
                                </div>
                            </div>
                            <div className={s['events']}>
                                <div className={s['events__header']}>
                                    <h1 className={s['events__title']}>EVENTS</h1>
                                    <a className={s['events__link']} href="#">More</a>
                                </div>
                                <ul className={s['events__list']}>
                                    <li className={s['events__item']}>
                                        <h1 className={s['events__itemTitle']}><a href="#">From Sorrow to Triumphant Joy: The Art of David Bekker</a></h1>
                                        <p className={s['events__itemText']}>During the Great Depression, David Bekker was a Works Progress Administration (WPA) artist in Chicago where he produced images of human suffering and painted murals in Illinois public buildings </p>
                                    </li>
                                    <li className={s['events__item']}>
                                        <h1 className={s['events__itemTitle']}><a href="#">Winter Break</a></h1>
                                        <p className={s['events__itemText']}>Oakton Community College will be closed Tuesday, Dec. 24, 2019 through Wednesday, Jan. 1, 2020 for winter break.</p>
                                    </li>
                                    <li className={s['events__item']}>
                                        <h1 className={s['events__itemTitle']}><a href="#">Health Care Career Information Sessions</a></h1>
                                        <p className={s['events__itemText']}>Students interested in pursuing a career in health care are invited to attend a free information session.</p>
                                    </li>
                                    <li className={s['events__item']}>
                                        <h1 className={s['events__itemTitle']}><a href="#">Oakton’s Nursing Program Ranked No. 5 in the State</a></h1>
                                        <p className={s['events__itemText']}>Over the last five years, Oakton has averaged a first-time pass rate of approximately 92 percent on the NCLEX. In 2018, that passing rate was an all-time high of 99 percent</p>
                                    </li>
                                    <li className={s['events__item']}>
                                        <h1 className={s['events__itemTitle']}><a href="#">Oakton Cross Country Runner Earns All-America Honors at Nationals</a></h1>
                                        <p className={s['events__itemText']}>Souleya Ibrahim took 13th place in the 5K race with her time of 18:52. The freshman crossed the finish line ahead of more than 270 runners from across the country.</p>
                                    </li>
                                    <li className={s['events__item']}>
                                        <h1 className={s['events__itemTitle']}><a href="#">Jacqueline Saper</a></h1>
                                        <p className={s['events__itemText']}>Author of "From Miniskirt to Hijab: A Girl in Revolutionary Iran." A Chicago Writers Series event.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

ReactDOM.render(<App/>, document.getElementById("app"));