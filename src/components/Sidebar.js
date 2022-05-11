import { NavLink } from "react-router-dom";

const Sidebar = () => {


  return (
    <div>
        <div id="sidebar" className="sidebar">
            <ul>
                <NavLink className="main-list-item" to="#">
                    <a className="main-anchor">
                        <span className="main-emblem"><img src="./images/main-emblem.png"/></span>
                        <span className="main-title">Wor::Cout</span>
                    </a>
                </NavLink>
                <NavLink className="list-item" to="/dashboard/home">
                    <a className="minor-anchor">
                        <span className="nav-icon"><i className="fa fa-area-chart" aria-hidden="true"></i></span>
                        <span className="title">Dashboard</span>
                    </a>
                </NavLink>
                <NavLink className="list-item" to="/dashboard/log-workout">
                    <a className="minor-anchor">
                        <span className="nav-icon"><i className="fa fa-tasks" aria-hidden="true"></i></span>
                        <span className="title">Log Workout</span>
                    </a>
                </NavLink>
                <NavLink className="list-item" to="/dashboard/add-workout">
                    <a className="minor-anchor">
                        <span className="nav-icon"><i className="fa fa-file-text" aria-hidden="true"></i></span>
                        <span className="title">Add Workouts</span>
                    </a>
                </NavLink>
                <NavLink className="list-item" to="/dashboard/measurements">
                    <a className="minor-anchor">
                        <span className="nav-icon"><i className="fa fa-cubes" aria-hidden="true"></i></span>
                        <span className="title">Measurements</span>
                    </a>
                </NavLink>
                <NavLink className="list-item" to="/dashboard/goals">
                    <a className="minor-anchor">
                        <span className="nav-icon"><i className="fa fa-trophy" aria-hidden="true"></i></span>
                        <span className="title">Goals</span>
                    </a>
                </NavLink>
                <NavLink className="list-item" to="/dashboard/settings">
                    <a className="minor-anchor">
                        <span className="nav-icon"><i className="fa fa-cogs" aria-hidden="true"></i></span>
                        <span className="title">Settings</span>
                    </a>
                </NavLink>
                <NavLink className="list-item" to="/dashboard/help">
                    <a className="minor-anchor">
                        <span className="nav-icon"><i className="fa fa-question" aria-hidden="true"></i></span>
                        <span className="title">Help</span>
                    </a>
                </NavLink>
                <NavLink className="list-item" to="/dashboard/sign-out">
                    <a className="minor-anchor">
                        <span className="nav-icon"><i className="fa fa-sign-out" aria-hidden="true"></i></span>
                        <span className="title">Sign Out</span>
                    </a>
                </NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar