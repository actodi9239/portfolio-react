import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import resume from "../assets/resume.pdf";

export default function About() {
    return (
        <div>
            <div className="flex flex-col w-full mt-8">
                <h1 className="text-2xl text-gray-400">Hi, I'm</h1>
                <h1 className="text-3xl font-bold">Diego Acosta</h1>
                <p className="text-2xl font-bold text-gray-300">System Engineer</p>
                <p className="text-lg font-light text-gray-400">
                    I am a technology enthusiast with experience in Front-end (React JS, Angular, Next JS) and Back-end (Express, .NET). I have skills in software quality doing automated testing, using tools such as Python, pyTest in API and Selenium, Mocha and Chai, integrated in BrowserStack and GitHub Actions for UI testing with Allure. I have 4 years of experience in IT, managing servers, equipment and routers, as well as having been an assistant in development laboratories at the Universidad Mayor de San Simón. I like to be able to meet my goals, work in a team and I have experience working under pressure.
                </p>
            </div>

            <ul className='flex mt-2 gap-4 items-center'>
                <li>
                    <a href='https://github.com/actodi9239' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/diego-acosta-torrez-71b148230/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                </li>
                <li>
                    <a href='mailto:diegoacosta9239@gmail.com' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faEnvelope} /></a>
                </li>
            </ul>

            <div className="mt-8">
                <a href={resume} rel="noreferrer" target="_blank" className="custom-blue bg-blue-500 rounded-full px-4 py-1 border border-blue-800 border-4">
                    Resume
                </a>
            </div>
        </div>
    )
}