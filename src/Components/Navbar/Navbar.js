import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className='navbarDisplay'>
                <div className='navbar_left_section'>

                    <div className='navbar_left_section_hamburger'>
                        <div className='hamburger_line'></div>
                        <div className='hamburger_line'></div>
                        <div className='hamburger_line'></div>
                    </div>

                    <div className='ff2'><img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt=''></img></div>

                    <div className='navbar_left_section_link'>
                        <div>
                            <div className='link'>TV</div>
                            <div className='subLink'>
                                <div>Mix Mood</div>
                                <div>Other Shows</div>
                                <div>hotstar Specials</div>
                                <div>Quix</div>
                                <div>Star Jalsah</div>
                                <div>StarPlus</div>
                                <div>Star Vijay</div>
                                <div>Star Bharat</div>
                                <div>More...</div>
                            </div>
                        </div>
                        <div>
                            <div className='link'>Movies</div>
                            <div className='subLink'>
                                <div>Odia</div>
                                <div>Hindi</div>
                                <div>Bengali</div>
                                <div>Telugu</div>
                                <div>Malayalam</div>
                                <div>Tamil</div>
                                <div>Marathi</div>
                                <div>English</div>
                                <div>Kannada</div>
                                <div>Korean</div>
                                <div>Japanese</div>
                            </div>
                        </div>
                        <div>
                            <div className='link'>Sports</div>
                            <div className='subLink'>
                                <div>Cricket</div>
                                <div>Football</div>
                                <div>Hockey</div>
                                <div>Kabaddi</div>
                                <div>Martial Art</div>
                                <div>American Football</div>
                                <div>Tennis</div>
                                <div>Khelo India</div>
                                <div>Formula E</div>
                                <div>Athletics</div>
                            </div>
                        </div>
                        <div>
                            <div id="TV">Disney+</div>
                        </div>
                    </div>
                </div>

                <div className='navbar_right_section'>
                    <input type="text" placeholder='Search'></input>
                    <button>SUBSCRIBE</button>
                    <div>LOGIN</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar