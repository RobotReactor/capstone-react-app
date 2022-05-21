import { NavLink } from "react-router-dom";

const Sidebar = () => {

     function onClik () {

        let sidebar = document.querySelector('.sidebar');
        let sidebarActive = sidebar.classList.contains('active');

        let toggle = document.querySelector('.btn-toggle');
        let navBar = document.querySelector('.top-dock');
        let mainScreen = document.querySelector('.main-screen');
        let togSammich = document.querySelector('#tog-sammy');
        let togX = document.querySelector('#tog-x');
        
        if(sidebarActive) {
            toggle.classList.remove('active');
            navBar.classList.remove('active');
            togSammich.classList.remove('active');
            togX.classList.remove('active');
            mainScreen.classList.remove('active');
            sidebar.classList.remove('active');
        } else {
            toggle.classList.remove('active');
            navBar.classList.remove('active');
            togSammich.classList.remove('active');
            togX.classList.remove('active');
            mainScreen.classList.remove('active');
            sidebar.classList.remove('active');
        }
    }

  return (
    <div id="sidebar" className="sidebar">
        <ul className="ull">
            <NavLink className="main-list-item" to="#">
                <a href="/dashboard/" className="main-anchor">
                    <span className="main-emblem"><img src={require("../main-emblem.png")} alt="Main Emblem"/></span>
                    <span className="main-title">Wor::Cout</span>
                </a>
            </NavLink>
            <NavLink id="itemHome" className="list-item" to="/dashboard/home" onClick={onClik}>
                <a href="/dashboard/home" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i className="fa fa-area-chart text-decoration-none" aria-hidden="true"></i></span>
                    <span className="minor-title text-decoration-none">Dashboard</span>
                </a>
            </NavLink>
            <NavLink id="itemAdd"  className="list-item" to="/dashboard/add-workout" onClick={onClik}>
                <a href="/dashboard/add-workout" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i className="fa fa-file-text" aria-hidden="true"></i></span>
                    <span className="minor-title text-decoration-none">Add Workouts</span>
                </a>
            </NavLink>
            <NavLink id="itemLog"  className="list-item" to="/dashboard/log-workout" onClick={onClik}>
                <a href="/dashboard/log-workout" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i className="fa fa-tasks" aria-hidden="true"></i></span>
                    <span className="minor-title text-decoration-none">Log Workout</span>
                </a>
            </NavLink>
            <NavLink id="itemMeasure" className="list-item" to="/dashboard/measurements" onClick={onClik}>
                <a href="/dashboard/measurements" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i className="fa fa-cubes" aria-hidden="true"></i></span>
                    <span className="minor-title text-decoration-none">Measurements</span>
                </a>
            </NavLink>
            <NavLink id="itemGoals" className="list-item" to="/dashboard/goals" onClick={onClik}>
                <a href="/dashboard/goals" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i className="fa fa-trophy" aria-hidden="true"></i></span>
                    <span className="minor-title text-decoration-none">Goals</span>
                </a>
            </NavLink>
            <NavLink id="itemSettings" className="list-item" to="/dashboard/settings" onClick={onClik}>
                <a href="/dashboard/settings" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i className="fa fa-cogs" aria-hidden="true"></i></span>
                    <span className="minor-title text-decoration-none">Settings</span>
                </a>
            </NavLink>
            <NavLink id="itemHelp" className="list-item" to="/dashboard/help" onClick={onClik}>
                <a href="/dashboard/sign-out" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i className="fa fa-question" aria-hidden="true"></i></span>
                    <span className="minor-title text-decoration-none">Help</span>
                </a>
            </NavLink>
            <NavLink id="itemSign" className="list-item" to="/dashboard/sign-out" onClick={onClik}>
                <a href="/dashboard/sign-out" className="minor-anchor text-decoration-none">
                    <span className="nav-icon"><i className="fa fa-sign-out" aria-hidden="true"></i></span>
                    <span className="minor-title text-decoration-none">Sign Out</span>
                </a>
            </NavLink>
        </ul>
    </div>
  )

}
export default Sidebar;