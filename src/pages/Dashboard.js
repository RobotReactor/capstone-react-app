import React from "react";

class Dashboard extends React.Component {
    render() {
        return ( 
        <div>
            <header>
                <div class="top-dock">
                    <div class="btn-toggle" onclick="openSidebar();">
                        <i id="tog-sammy" class="fa fa-bars" aria-hidden="true"></i>
                        <i id="tog-x" class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div class="btn-section replacable-section">
                        <div class="top-divider"></div>
                        <div id="langModalBtn" class="modalButton btn-language" onclick="langSelect();" title="Change the Language">
                            <i class="fa fa-globe" aria-hidden="true"></i>
                        </div>
                        <div id="quoteModalBtn" class="modalButton btn-quote" onclick="showQuote();" title="Quote Someone">
                            <i class="fa fa-quote-right" aria-hidden="true"></i>
                        </div>
                        <div id="notifModalBtn" class="modalButton btn-notify" onclick="toggleNotifs();" title="Turn on Notifications">
                            <i class="fa fa-bell" aria-hidden="true"></i>
                        </div>
                        <div class="top-divider"></div>
                    </div>
                    <div class="btn-section">
                        <div class="top-divider"></div>
                        <div class="btn-toggle-dark-mode" onclick="toggleDark();" title="Toggle Dark Mode">
                            <i id="toggle-sun" class="fa fa-sun-o" aria-hidden="true"></i>
                            <i id="toggle-moon" class="fa fa-moon-o" aria-hidden="true"></i>
                        </div>
                        <div class="btn-toggle-all-time" onclick="toggleCalendar();" title="Change Time-Frame">
                            <i id="cal-week" class="fa fa-calendar-o" aria-hidden="true"></i>
                            <i id="cal-month" class="fa fa-calendar" aria-hidden="true"></i>
                        </div>
                        <div class="btn-units" onclick="toggleUnit();" title="Change Unit of Measurement">
                            <i class="fa fa-flask" aria-hidden="true"></i>
                        </div>
                        <div class="top-divider"></div>
                    </div>
                    <div class="user">
                        <img src="./assets/images/def-icon.png" />
                    </div>
                    <div id="right-most-divider" class="top-divider"></div>
                    <div class="drop-down" onclick="openInfo();">
                        <i id="tog-dwn" class="fa fa-angle-down" aria-hidden="true"></i>
                        <i id="tog-up" class="fa fa-angle-up" aria-hidden="true"></i>
                    </div>
                </div>
            </header>

        <div id="langModal" class="template-modal">
            <div id="fuckingwork" class="modal-contents">
                <span id="closeModalBtnL" class="closeModalBtn">&times;</span>
                <p>Hello! This is your modal speaking. LANGUAGE</p>
            </div>
        </div>
        <div id="quoteModal" class="template-modal">
            <div class="modal-contents">
                <span id="closeModalBtnQ" class="closeModalBtn">&times;</span>
                <p>Hello! This is your modal speaking. QUOTE</p>
            </div>
        </div>
        <div id="notifModal" class="template-modal">
            <div class="modal-contents">
                <span id="closeModalBtnN" class="closeModalBtn">&times;</span>
                <p>Hello! This is your modal speaking. NOTIFICATIONS</p>
            </div>
        </div>

        <div id="main-screen" class="main-screen">
            <div class="top-container">
                <div class="top-page-info">
                    <div class="bc-info">
                        <div class="head-info">
                            <i class="fa fa-building"></i>
                            <h5>Main Dashboard</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg-container">
                <div class="big-section"></div>
                <div class="nrml-section"></div>
            </div>
            <div class="md-container">
                <div class="big-section"></div>
                <div class="big-section"></div>
            </div>
            <div class="sm-container">
                <div class="nrml-section"></div>
                <div class="big-section"></div>
            </div>
            <div class="lg-container">
                <div class="nrml-section"></div>
                <div class="nrml-section"></div>
                <div class="nrml-section"></div>
            </div>
            <div class="lg-container">
                <div class="big-section"></div>
            </div>
        </div>

        <div id="sidebar" class="sidebar">
            <ul>
                <li class="main-list-item">
                    <a class="main-anchor" href="#">
                        <span class="main-emblem"><img src="./images/main-emblem.png"/></span>
                        <span class="main-title">Wor::Cout</span>
                    </a>
                </li>
                <li class="list-item active">
                    <a class="minor-anchor" href="#">
                        <span class="nav-icon"><i class="fa fa-area-chart" aria-hidden="true"></i></span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>
                <li class="list-item">
                    <a class="minor-anchor" href="#">
                        <span class="nav-icon"><i class="fa fa-tasks" aria-hidden="true"></i></span>
                        <span class="title">Log Workout</span>
                    </a>
                </li>
                <li class="list-item">
                    <a class="minor-anchor" href="#">
                        <span class="nav-icon"><i class="fa fa-file-text" aria-hidden="true"></i></span>
                        <span class="title">Add Workouts</span>
                    </a>
                </li>
                <li class="list-item">
                    <a class="minor-anchor" href="#">
                        <span class="nav-icon"><i class="fa fa-cubes" aria-hidden="true"></i></span>
                        <span class="title">Measurements</span>
                    </a>
                </li>
                <li class="list-item">
                    <a class="minor-anchor" href="#">
                        <span class="nav-icon"><i class="fa fa-trophy" aria-hidden="true"></i></span>
                        <span class="title">Goals</span>
                    </a>
                </li>
                <li class="list-item">
                    <a class="minor-anchor" href="#">
                        <span class="nav-icon"><i class="fa fa-cogs" aria-hidden="true"></i></span>
                        <span class="title">Settings</span>
                    </a>
                </li>
                <li class="list-item">
                    <a class="minor-anchor" href="#">
                        <span class="nav-icon"><i class="fa fa-question" aria-hidden="true"></i></span>
                        <span class="title">Help</span>
                    </a>
                </li>
                <li class="list-item sign-out">
                    <a class="minor-anchor" href="#">
                        <span class="nav-icon"><i class="fa fa-sign-out" aria-hidden="true"></i></span>
                        <span class="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
        );
    }
}

export default Dashboard;