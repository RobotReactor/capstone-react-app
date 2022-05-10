

const Sidebar = () => {
  return (
    <div>
        <div id="sidebar" className="sidebar">
            <ul>
                <li className="main-list-item">
                    <a className="main-anchor" href="#">
                        <span className="main-emblem"><img src="./images/main-emblem.png"/></span>
                        <span className="main-title">Wor::Cout</span>
                    </a>
                </li>
                <li className="list-item active">
                    <a className="minor-anchor" href="#">
                        <span className="nav-icon"><i className="fa fa-area-chart" aria-hidden="true"></i></span>
                        <span className="title">Dashboard</span>
                    </a>
                </li>
                <li className="list-item">
                    <a className="minor-anchor" href="#">
                        <span className="nav-icon"><i className="fa fa-tasks" aria-hidden="true"></i></span>
                        <span className="title">Log Workout</span>
                    </a>
                </li>
                <li className="list-item">
                    <a className="minor-anchor" href="#">
                        <span className="nav-icon"><i className="fa fa-file-text" aria-hidden="true"></i></span>
                        <span className="title">Add Workouts</span>
                    </a>
                </li>
                <li className="list-item">
                    <a className="minor-anchor" href="#">
                        <span className="nav-icon"><i className="fa fa-cubes" aria-hidden="true"></i></span>
                        <span className="title">Measurements</span>
                    </a>
                </li>
                <li className="list-item">
                    <a className="minor-anchor" href="#">
                        <span className="nav-icon"><i className="fa fa-trophy" aria-hidden="true"></i></span>
                        <span className="title">Goals</span>
                    </a>
                </li>
                <li className="list-item">
                    <a className="minor-anchor" href="#">
                        <span className="nav-icon"><i className="fa fa-cogs" aria-hidden="true"></i></span>
                        <span className="title">Settings</span>
                    </a>
                </li>
                <li className="list-item">
                    <a className="minor-anchor" href="#">
                        <span className="nav-icon"><i className="fa fa-question" aria-hidden="true"></i></span>
                        <span className="title">Help</span>
                    </a>
                </li>
                <li className="list-item sign-out">
                    <a className="minor-anchor" href="#">
                        <span className="nav-icon"><i className="fa fa-sign-out" aria-hidden="true"></i></span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar