export default function WorkCard(props) {
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="w-full md:w-11/12 lg:w-11/12 xl:w-4/5 bg-dark-200 rounded-md p-2 md:p-4 mt-4 md:mt-8 mx-auto text-center justify-center border-2 border-gray-800 flex flex-col md:h-48 bg-opacity-50">
            <div className="grid grid-cols-1">
                <h1 className="font-bold text-lg mb-1 md:mb-2 text-left">{props.name}</h1>
                <p className="font-light text-sm mb-1 md:mb-2 text-left">Issued by {props.issued}</p>
                <p className="font-light text-sm text-gray-400 mb-1 md:mb-2 text-left">{props.desc}</p>
            </div>
        </div>
    )
}
