import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardContent from './components/DashboardContent';
import LogWorkout from './components/LogWorkout';
import AddWorkout from './components/AddWorkout';
import Measurements from './components/Measurements';
import Goals from './components/Goals';
import SignOut from './components/SignOut';
import Help from './components/Help';
import Settings from './components/Settings';

function App() {
    return ( 
        <div>
            <Header />
            <Router>
                <Sidebar />
                <Routes>
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