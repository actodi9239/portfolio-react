export default function SkillCard(props){
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="w-11/12 p-4 text-center border-2 border-gray-800 bg-dark-200 rounded-md flex flex-col h-48 mx-auto items-center justify-center bg-opacity-50">
            <img src={props.img} className="w-20 max-h-20" alt={props.name} />
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <p className="font-light md:text-lg">{props.experience} of experience</p>
            </div>
        </div>
    )
}

