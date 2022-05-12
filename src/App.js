import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardContent from './Components/DashboardContent';
import LogWorkout from './Components/LogWorkout';
import AddWorkout from './Pages/AddWorkouts/AddWorkout';
import Measurements from './Components/Measurements';
import Goals from './Components/Goals';
import SignOut from './Components/SignOut';
import Help from './Components/Help';
import Settings from './Components/Settings';

function App() {

    return ( 
        <div>
            <Router>
                <Header />
                <Sidebar />
                <Routes>
                    <Route path='/' element={<DashboardContent />}/>
                    <Route path='/dashboard/home' element={<DashboardContent />}/>
                    <Route path='/dashboard/log-workout' element={<LogWorkout />}/>
                    <Route path='/dashboard/add-workout' element={<AddWorkout />}/>
                    <Route path='/dashboard/measurements' element={<Measurements />}/>
                    <Route path='/dashboard/goals' element={<Goals />}/>
                    <Route path='/dashboard/settings' element={<Settings />}/>
                    <Route path='/dashboard/help' element={<Help />}/>
                    <Route path='/dashboard/sign-out' element={<SignOut />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;