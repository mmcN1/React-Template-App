import './Template2.css';
import { Icon } from '@iconify/react';


const Template2 = ({ selectedColor, setSelectedColor, selectedPaint, setSelectedPaint }) => {
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                crossOrigin="anonymous"
            />
            <div id="page-wrapper">
                <header id="header" style={{ backgroundColor: selectedPaint.paint2, boxShadow: `2px 2px 3px 3px ${selectedColor.paint}` }}>
                    <div className="logo">
                        <Icon style={{ color: selectedColor.paint }} id="header-img" icon="mdi:trumpet"></Icon>

                    </div>

                    <nav id="nav-bar">


                        <ul>
                            <li><a className="nav-link" href="#features"><p style={{ color: selectedColor.paint }}>Features</p></a></li>
                            <li><a className="nav-link" href="#how-it-works"><p style={{ color: selectedColor.paint }}>How It Works</p></a></li>
                            <li><a className="nav-link" href="#pricing"><p style={{ color: selectedColor.paint }}>Pricing</p></a></li>
                        </ul>
                    </nav>
                </header>

                <div className="container"></div>

                <section id="hero">
                    <h2>Handcrafted, home-made masterpieces</h2>
                    <form id="form" action="https://www.freecodecamp.com/email-submit">
                        <input
                            name="email"
                            id="email1"
                            type="email"
                            placeholder="Enter your email address"
                            required
                        />
                        <input id="submit" type="submit" value="Get Started" className="btn" style={{ color: selectedPaint.paint2, backgroundColor: selectedColor.paint }} />
                    </form>
                </section>

                <div className="container">
                    <section id="features">
                        <div className="grid">
                            <div className="icon"><i className="fa fa-3x fa-fire" style={{ color: selectedColor.paint }}></i></div>
                            <div className="desc">
                                <i id="header-img" className="fas fa-trumpet"></i>

                                <h2>Premium Materials</h2>
                                <p>
                                    Our trombones use the shiniest brass which is sourced locally. This
                                    will increase the longevity of your purchase.
                                </p>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="icon"><i className="fa fa-3x fa-truck" style={{ color: selectedColor.paint }}></i></div>
                            <div className="desc">
                                <h2>Fast Shipping</h2>
                                <p>
                                    We make sure you recieve your trombone as soon as we have finished
                                    making it. We also provide free returns if you are not satisfied.
                                </p>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="icon">
                                <i className="fa fa-3x fa-battery-full" aria-hidden="true" style={{ color: selectedColor.paint }}></i>
                            </div>
                            <div className="desc">
                                <h2>Quality Assurance</h2>
                                <p>
                                    For every purchase you make, we will ensure there are no damages or
                                    faults and we will check and test the pitch of your instrument.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section id="how-it-works">
                        <iframe
                            title='video2'
                            id="video2"
                            height="315"
                            src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0"
                            allowFullScreen
                        ></iframe>
                    </section>
                    <section id="pricing">
                        <div className="product" id="tenor">
                            <div className="level" style={{ backgroundColor: selectedPaint.paint2, color: selectedColor.paint }}>Tenor Trombone</div>
                            <h2>$600</h2>
                            <ol>
                                <li>Lorem ipsum.</li>
                                <li>Lorem ipsum.</li>
                                <li>Lorem ipsum dolor.</li>
                                <li>Lorem ipsum.</li>
                            </ol>
                            <button className="btn" style={{ color: selectedPaint.paint2, backgroundColor: selectedColor.paint }}>Select</button>
                        </div>
                        <div className="product" id="bass">
                            <div className="level" style={{ backgroundColor: selectedPaint.paint2, color: selectedColor.paint }}>Bass Trombone</div>
                            <h2>$900</h2>
                            <ol>
                                <li>Lorem ipsum.</li>
                                <li>Lorem ipsum.</li>
                                <li>Lorem ipsum dolor.</li>
                                <li>Lorem ipsum.</li>
                            </ol>
                            <button className="btn" style={{ color: selectedPaint.paint2, backgroundColor: selectedColor.paint }}>Select</button>
                        </div>
                        <div className="product" id="valve">
                            <div className="level" style={{ backgroundColor: selectedPaint.paint2, color: selectedColor.paint }}>Valve Trombone</div>
                            <h2>$1200</h2>
                            <ol>
                                <li>Plays similar to a Trumpet</li>
                                <li>Great for Jazz Bands</li>
                                <li>Lorem ipsum dolor.</li>
                                <li>Lorem ipsum.</li>
                            </ol>
                            <button className="btn" style={{ color: selectedPaint.paint2, backgroundColor: selectedColor.paint }}>Select</button>
                        </div>
                    </section>
                    <footer>
                        <ul>
                            <li><a href="#" style={{ color: 'black' }}>Privacy</a></li>
                            <li><a href="#" style={{ color: 'black' }}>Terms</a></li>
                            <li><a href="#" style={{ color: 'black' }}>Contact</a></li>
                        </ul>
                        <span>Copyright 2016, Original Trombones</span>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Template2;