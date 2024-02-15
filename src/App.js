import './App.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hiro from './components/Hiro';
import AOS from 'aos';
import 'aos/dist/aos.css';
import backgroundImage from './assets/backgroundImage.png';

function App() {
    useEffect(() => {
        document.title = 'Diego Acosta';
        AOS.init();
    }, []);

    return (
        <div className="px-6 lg:px-20 xl:px-36 bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
            <Navbar />
            <Hiro />
        </div>
    );
}

export default App;
