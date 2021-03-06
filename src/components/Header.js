import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
// import Search from './common/Search';
// import Sidebar from './common/Sidebar';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import { Styles } from "../styles/headerTwo";
import '../styles/button.css';
import { scroller } from "react-scroll";
import Logo from '../asset/logo.png';
import Mediumw from '../asset/medium-white.png';



class Header extends Component {
    handlescrollhiw = () => {
        scroller.scrollTo("hiw", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
    }
    handlescrollbft = () => {
        scroller.scrollTo("bft", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
    }
    handlescrolltest = () => {
        scroller.scrollTo("test", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
    }
    render() {
        
    return (
                <Styles>
                    {/* Logo Area 2 */}
                    <section className="logo-area2">
                        <Container>
                            <Row>
                                <Col md="2">
                                    <div className="logo">
                                        <Link ><img style={{height: "60px"}} src={Logo} alt="" /><span style={{color: "white"}} className="Logo">Bscpool</span></Link>
                                    </div>
                                </Col>
                                <Col md="10">
                                    <div className="menu-box d-flex justify-content-end">
                                        <ul className="nav menu-nav">
                                            <li className="nav-item dropdown active">
                                                <Link onClick={this.handlescrollhiw} className="nav-link dropdown-toggle"  data-toggle="dropdown">How it works <i className="las la-angle-down"></i></Link>
                                                
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link onClick={this.handlescrollbft} className="nav-link dropdown-toggle"  data-toggle="dropdown">Benifits <i className="las la-angle-down"></i></Link>
                                
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link onClick={this.handlescrolltest} className="nav-link dropdown-toggle"  data-toggle="dropdown">Testimonials <i className="las la-angle-down"></i></Link>
                                                
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to='/join' data-toggle="dropdown">join the Club <i className="las la-angle-down"></i></Link>
                                                
                                            </li>
                                            
                                            
                                        </ul>
                                        <div className="menu-box d-flex justify-content-end">
                                            <ul className="nav menu-nav">
                                            <li className="nav-item dropdown">
                                            {/* <Link className="nav-link dropdown-toggle"  data-toggle="dropdown"> */}
                                            <a className="nav-link dropdown-toggle" href ="https://twitter.com/Bscpool1" target = "_blank">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                                    </svg> <i className="las la-angle-down"></i>
                                            </a>
                                             {/* </Link>    */}
                                                
                                            </li>
                                            
                                            
                                            <li className="nav-item dropdown">
                                                {/* <Link   data-toggle="dropdown"> */}
                                                <a className="nav-link dropdown-toggle" href ="http://t.me/bscpool" target = "_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                                                </svg>
                                                </a>
                                                {/* </Link> */}
                                                
                                            </li>
                                            
                                            
                                            <li className="nav-item dropdown">
                                                {/* <Link className="nav-link dropdown-toggle"  data-toggle="dropdown"> */}
                                                <a className="nav-link dropdown-toggle" href ="https://github.com/BSCPOOL" target = "_blank">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                                </svg>
                                                </a>
                                                {/* </Link> */}
                                                
                                            </li>
                                            
                                            
                                            <li className="nav-item dropdown">
                                                {/* <Link className="nav-link dropdown-toggle"  data-toggle="dropdown"> */}
                                                <a className="nav-link dropdown-toggle" href="https://medium.com/@bscpool" target="_blank">
                                                {/* <img style={{height : "14px"}} src={Mediumw}/>   */}
                                                <h5 style={{color: "white"}}>M</h5>
                                                </a> 
                                                                                             {/* </Link> */}
                                                
                                            </li>
                                            
                                            </ul>
                                        </div>
                                        <div>
                                        <Link to="/join"><button class="custom-btnl btn-13l">Launch App</button></Link>
                                        </div>

                                        {/* <div className="apply-btn">
                                            <Link to={process.env.PUBLIC_URL + "/registration"}>Launch App</Link>
                                        </div> */}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
    
                    {/* Sticky Menu */}
                    <StickyMenu />
    
                    {/* Mobile Menu */}
                    <MobileMenu />
                </Styles>
            )
        
        
    }
}

export default Header
