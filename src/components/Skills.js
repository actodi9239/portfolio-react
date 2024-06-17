import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import remix from "../assets/skills/Remix.png"
import aws from "../assets/skills/aws.png"
import azure from "../assets/skills/azure.png"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
import mikrotik from "../assets/skills/mikrotik.svg"
import wordpress from "../assets/skills/wordpress.png"
import figma from "../assets/skills/figma.png"
import react from "../assets/skills/react.svg"
import cisco from "../assets/skills/cisco.svg"
import github from "../assets/skills/github.png"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"
import next from "../assets/skills/Next.png"
import illustrator from "../assets/skills/illustrator.png"
import java from "../assets/skills/java.png"
import photoshop from "../assets/skills/photoshop.png"
import selenium from "../assets/skills/selenium.png"
import ts from "../assets/skills/ts.png"
import docker from "../assets/skills/docker.svg"
import csharp from "../assets/skills/csharp.png"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="aws" experience="5 months" img={aws} />
                <SkillCard name="remix" experience="1 year" img={remix} />
                <SkillCard name="python" experience="6 months" img={python} />
                <SkillCard name="javascript" experience="2 years" img={javascript} />
                <SkillCard name="react" experience="2 years" img={reactIcon} />
                <SkillCard name="tailwind" experience="1 year" img={tailwind} />
                <SkillCard name="figma" experience="1 year" img={figma} />
                <SkillCard name="mikrotik" experience="6 months" img={mikrotik} />
                <SkillCard name="wordpress" experience="3 years" img={wordpress} />
                <SkillCard name="next" experience="1 year" img={next} />
                <SkillCard name="azure" experience="1 year" img={azure} />
                <SkillCard name="react" experience="2 years" img={react} />
                <SkillCard name="cisco" experience="6 months" img={cisco} />
                <SkillCard name="github" experience="1 year" img={github} />
                <SkillCard name="git" experience="1 year" img={git} />
                <SkillCard name="express" experience="1 year" img={express} />
                <SkillCard name="gitlab" experience="1 year" img={gitlab} />
                <SkillCard name="illustrator" experience="1 year" img={illustrator} />
                <SkillCard name="java" experience="3 years" img={java} />
                <SkillCard name="photoshop" experience="2 years" img={photoshop} />
                <SkillCard name="selenium" experience="1 year" img={selenium} />
                <SkillCard name="typescripy" experience="1 year" img={ts} />
                <SkillCard name="docker" experience="5 month" img={docker} />
                <SkillCard name="C#" experience="1 year" img={csharp} />
                </Slider>
            </div>
        </div>
    )
}