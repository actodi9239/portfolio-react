import CertCard from "./CertCard.js"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Java from "../assets/certificates/Java.png"
import Encaminamiento from "../assets/certificates/Encaminamiento.png"
import SansiCup from "../assets/certificates/SansiCup.png"
import Electrored from "../assets/certificates/Electrored.png"
import AuxUmss from "../assets/certificates/AuxUmss2023.png"
import SpringBoot from "../assets/certificates/SpringBoot.png"
import RedesComp from "../assets/certificates/RedesComp.png"
import MantComp from "../assets/certificates/MantComp.png"
import C from "../assets/certificates/C.png"
import enyoi from "../assets/certificates/enyoi.png"


export default function Certs(){
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div id="certs" className="mt-2 text-white px-2 sm:px-4 md:px-8">
            <h1 className="text-2xl sm:text-3xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>
            <div className="mt-4">
                <Slider {...settings}>
                <CertCard name="Java Basic Module" img={Java} issued="Universidad Mayor de San Simon" date="Jul 2016" />
                <CertCard name="Network Information Routing" img={Encaminamiento} issued="Universidad Mayor de San Simon" date="Jun 2022" />
                <CertCard name="University Programming Competition" img={SansiCup} issued="Universidad Mayor de San Simon" date="Dec 2023" />
                <CertCard name="Wiring Seminar" img={Electrored} issued="Cochabamba Society of Engineers" date="May 2017" />
                <CertCard name="Assistant in the IT and Systems Department computer lab" img={AuxUmss} issued="Universidad Mayor de San Simon" date="2023" />
                <CertCard name="Spring Boot" img={SpringBoot} issued="Universidad Mayor de San Simon" date="Apr 2024" />
                <CertCard name="Installation and Configuration of Computer Networks" img={RedesComp} issued="Universidad Mayor de San Simon" date="Apr 2024" />
                <CertCard name="Computer Maintenance" img={MantComp} issued="Universidad Mayor de San Simon" date="Apr 2024" />
                <CertCard name="Backend Development with C# and .NET" img={C} issued="Universidad Mayor de San Simon" date="Aug 2024" />
                <CertCard name="Fullstack Ract+Node.Js" img={enyoi} issued="Colombia" date="Nov 2024" />
                </Slider>
            </div>
        </div>
    )
}
