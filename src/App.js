import './App.css';
import { useEffect } from 'react';
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
        <div 
            className="
                min-h-screen
                bg-cover bg-center
                px-2 sm:px-4 md:px-10 lg:px-20 xl:px-36
            "
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
          
            <Hiro />
        </div>
    );
}

export default App;