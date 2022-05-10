import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AddWorkout from './pages/AddWorkout';
import LogWorkout from './pages/LogWorkout';

function App() {
    return ( 
        <div>
            <Header />
            <Router>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/Log-Workout' element={<LogWorkout />}/>
                    <Route path='/Add-Workout' element={<AddWorkout />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;