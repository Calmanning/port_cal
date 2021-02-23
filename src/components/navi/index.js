import React from 'react'
import "./navi.css"

function Navi() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
                <a id="navi" className="navbar-brand hover_link" href="/">So, About Calvin</a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className=" navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a id="navi" className="nav-link" href="/port">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a id="navi" className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <footer className="row" id="foot">
                <div className="col footer-end d-flex flex-row bg-dark footer-position  align-items-center 
                                justify-content-center justify-content-around fixed-bottom">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-1">
                        <a href="https://github.com/Calmanning" target="_blank">
                            <img src="images/github_48px.png" alt="Calvin's GitHub page" />
                        </a>
                    </div>
                    <div className="col-sm-1">
                        <a href="https://twitter.com/_castr_" target="_blank">
                            <img src="images/twitter_48px.png" alt="Calvin's Twitter page" />
                        </a>
                    </div>
                    <div className="col-sm-1">
                        <a href="https://www.linkedin.com/in/calvin-manning-8a450014/" target="_blank">
                            <img src="images/linkedin_48px.png" alt="Calvin's GitHub page" />
                        </a>
                    </div>
                    <div className="col-sm-1">
                        <a href="https://www.instagram.com/_castr_/" target="_blank">
                            <img src="images/instagram_48px.png" alt="Calvin's twitter page" />
                        </a>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </footer>

        </div>
    )
}

export default Navi;