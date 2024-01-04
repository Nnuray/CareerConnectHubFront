import './App.css'
import logo from '../set.svg'
import Header from './Header'
import AppContent from "./AppContent";
function App() {
    return(
        <div className="App">
            <Header pageTitle ="Career Connect Hub" logoSrc={logo} />
            <AppContent/>
        </div>
    );
}

export default App;