import './Template1.css';
import BackHandIcon from '@mui/icons-material/BackHand';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CookieIcon from '@mui/icons-material/Cookie';

const Template1 = ({ selectedColor, setSelectedColor, selectedPaint, setSelectedPaint }) => {
    return (
        <div className='template1'style={{backgroundColor: selectedColor.paint}} >
            <header id="header1" style={{backgroundColor: selectedPaint.paint2, boxShadow: `0 2px 3px 3px ${selectedColor.paint}` }}>
                <div id="header-branding">
                    <img id="header-img1" src="https://ibin.co/4LTa2aEXh9TC.png" alt="Brand logo" />
                    <h1 id="header-title1" style={{color: selectedColor.paint}}>CookieDel</h1>
                </div>
                <nav id="nav-bar1">
                    <a className="nav-link1" href="#product-information"><p style={{ color: selectedColor.paint }}>Product Information</p></a>
                    <a className="nav-link1" href="#video"><p style={{ color: selectedColor.paint }}>Cookie Tutorial</p></a>
                    <a className="nav-link1" href="#pricing"><p style={{ color: selectedColor.paint }}>Pricing</p></a>
                </nav>
            </header>

            <div className="main-content1">
                <h2 style={{ color: selectedColor.paint }}>Premium Cookie Delivery Service</h2>
                <form id="form" action="https://www.freecodecamp.com/email-submit" method="post">
                    <input id="email1" type="email" name="email" placeholder="Enter you e-mail address" />
                    <input id="submit" type="submit" value="Submit" style={{color: selectedColor.paint, backgroundColor: selectedPaint.paint2}} />
                </form>
                <div id="product-information">
                    <div className="product-information">
                        <i><BackHandIcon fontSize='large' style={{ color: selectedColor.paint }} /></i>
                        <p className="info-text">Handmade, Premium Cookies</p>
                    </div>
                    <div className="product-information">
                        <i ><LocalShippingIcon fontSize='large' style={{ color: selectedColor.paint }} /></i><p className="info-text">Fast delivery</p>
                    </div>
                    <div className="product-information">
                        <i ><CookieIcon fontSize='large' style={{ color: selectedColor.paint }} /></i><p className="info-text">Extremely delicious</p>
                    </div>
                </div>
                <div className="embed-container"><iframe title='cookie video' id="video" src="https://www.youtube-nocookie.com/embed/rEdl2Uetpvo?controls=0"></iframe></div>
                <div id="pricing">
                    <div className="price-container">
                        <h3 style={{ color: selectedColor.paint }}>5 Cookies</h3>
                        <p>Good for trying them out</p>
                        <button className="price-button" style={{color: selectedColor.paint, backgroundColor: selectedPaint.paint2}} >5€</button>
                    </div>
                    <div className="price-container">
                        <h3 style={{ color: selectedColor.paint }}>15 Cookies</h3>
                        <p>For cookie lovers</p>
                        <button className="price-button" style={{color: selectedColor.paint, backgroundColor: selectedPaint.paint2}}>13.99€</button>
                    </div>
                    <div className="price-container">
                        <h3 style={{ color: selectedColor.paint }}>All of them</h3>
                        <p>Request a custom amount</p>
                        <button className="price-button" style={{color: selectedColor.paint, backgroundColor: selectedPaint.paint2}}>Custom Price</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template1;