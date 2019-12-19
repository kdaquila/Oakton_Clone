// React imports
import React from "react";
import ReactDOM from "react-dom";

// global style imports
import "./_reset.scss";

// local style import
import s from "./index.scss";

// images
import studentsInHallway from "./images/brad-neathery-XrSzacdYbtQ-unsplash.jpg";

// My Component imports
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ImageSlider from "./ImageSlider/ImageSlider";
import CardSlider from "./CardSlider/CardSlider";

function App() {
    return (
        <div className={s['page']}>
            <div className={s['page__content']}>
                <Header/>
                <ImageSlider>
                    <div className={s['hero__item_1']}>
                        <div className={s['hero__caption']}>
                            <p className={s['hero__captionText']}>Wrap up some college credit.</p>
                            <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">Winterim classes begin December 16th</a></p>
                            <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">Register now</a></p>
                        </div>
                    </div>
                    <div className={s['hero__item_2']}>
                        <div className={s['hero__caption']}>
                            <p className={s['hero__captionText']}>Making resolutions?</p>
                            <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">Take a class at Oakton!</a></p>
                            <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">Apply Now</a></p>
                        </div>
                    </div>
                    <div className={s['hero__item_3']}>
                        <div className={s['hero__caption']}>
                            <p className={s['hero__captionText']}>Oakton's 50th Anniversary</p>
                            <p className={s['hero__captionText_emphasis']}><a className="hero__caption-link" href="#">1969 &ndash; 2019 Timeline</a></p>
                        </div>
                    </div>
                </ImageSlider>
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
                        <CardSlider className="opportunity">
                            <div className="opportunity__item">
                                <img className="opportunity__image" src="./images/ani-kolleshi-7jjnJ-QA9fY-unsplash.jpg"
                                     alt="woman inside laboratory"/>
                                <h1 className="opportunity__heading">Health Careers Information Sessions</h1>
                                <p className="opportunity__text">Health career opportunities are expanding rapidly. Learn more about your options</p>
                                <button className="opportunity__button">View More</button>
                            </div>
                            <div className="opportunity__item">
                                <img className="opportunity__image" src="./images/mimi-thian-vdXMSiX-n6M-unsplash.jpg"
                                     alt="students gathered around computer"/>
                                <h1 className="opportunity__heading">Transfer Partnerships</h1>
                                <p className="opportunity__text">Partnerships provide students with benefits and ease of
                                    transition to their respective college or university.</p>
                                <button className="opportunity__button">View More</button>
                            </div>
                            <div className="opportunity__item">
                                <img className="opportunity__image"
                                     src="./images/thomas-jensen-UrtxBX5i5SE-unsplash.jpg" alt="networking equipment"/>
                                <h1 className="opportunity__heading">STEM Scholars</h1>
                                <p className="opportunity__text">Program and scholarship designed for students with
                                    financial need pursuing a degree or career in a STEM field.</p>
                                <button className="opportunity__button">View More</button>
                            </div>
                            <div className="opportunity__item">
                                <img className="opportunity__image"
                                     src="./images/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg"
                                     alt="man working at a computer"/>
                                <h1 className="opportunity__heading">Internships</h1>
                                <p className="opportunity__text">Internships allow students to gain professional
                                    experience, build résumés and explore careers</p>
                                <button className="opportunity__button">View More</button>
                            </div>
                            <div className="opportunity__item">
                                <img className="opportunity__image"
                                     src="./images/manuel-nageli-7CcPLtywRso-unsplash.jpg"
                                     alt="people playing violins"/>
                                <h1 className="opportunity__heading">Music</h1>
                                <p className="opportunity__text">Oakton's Music Department offers a variety of
                                    performing opportunities and study with distinguished faculty.</p>
                                <button className="opportunity__button">View More</button>
                            </div>
                        </CardSlider>
                        <div className="events">
                            <div className="events__header">
                                <h1 className="events__title">EVENTS</h1>
                                <a className="events__header-link" href="#">SEE ALL EVENTS</a>
                            </div>
                            <ul className="events__list">
                                <li className="events__item">
                                    <h1 className="events__item-title"><a href="#">From Sorrow to Triumphant Joy: The Art of David Bekker</a></h1>
                                    <p className="events__item-text">During the Great Depression, David Bekker was a Works Progress Administration (WPA) artist in Chicago where he produced images of human suffering and painted murals in Illinois public buildings </p>
                                </li>
                                <li className="events__item">
                                    <h1 className="events__item-title">Winter Break</h1>
                                    <p className="events__item-text">Oakton Community College will be closed Tuesday, Dec. 24, 2019 through Wednesday, Jan. 1, 2020 for winter break.</p>
                                </li>
                                <li className="events__item">
                                    <h1 className="events__item-title">Health Care Career Information Sessions</h1>
                                    <p className="events__item-text">Students interested in pursuing a career in health care are invited to attend a free information session.</p>
                                </li>
                                <li className="events__item">
                                    <h1 className="events__item-title">Oakton’s Nursing Program Ranked No. 5 in the State</h1>
                                    <p className="events__item-text">Over the last five years, Oakton has averaged a first-time pass rate of approximately 92 percent on the NCLEX. In 2018, that passing rate was an all-time high of 99 percent</p>
                                </li>
                                <li className="events__item">
                                    <h1 className="events__item-title">Oakton Cross Country Runner Earns All-America Honors at Nationals</h1>
                                    <p className="events__item-text">Souleya Ibrahim took 13th place in the 5K race with her time of 18:52. The freshman crossed the finish line ahead of more than 270 runners from across the country.</p>
                                </li>
                                <li className="events__item">
                                    <h1 className="events__item-title">Jacqueline Saper</h1>
                                    <p className="events__item-text">Author of "From Miniskirt to Hijab: A Girl in Revolutionary Iran." A Chicago Writers Series event.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));