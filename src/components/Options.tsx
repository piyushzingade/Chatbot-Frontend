

export default function Options() {
    return (
        <div className="container mx-auto max-w-[720px] px-4 md:px-0 justify-center items-center mt-12">
            <div className='flex  mb-6'>
                <div className="flex items-center">
                    <img className="w-6 h-6" src="./public/img.svg" alt="Get Started" />
                    <p className='px-2'>Get Started</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <OptionsButton image="./public/image1.png" title="Course Registration Help" />
                <OptionsButton image="./public/image2.png" title="Internship Opportunities" />
                <OptionsButton image="./public/image3.png" title="Library Resources" />
                <OptionsButton image="./public/image4.png" title="Graduation Requirements" />
            </div>
        </div>
    );
}

export interface OptionsProps {
    image: string;
    title: string;
}

export function OptionsButton(props: OptionsProps) {
    const { image, title } = props;
    return (
        <button className="p-4 text-left rounded-lg bg-white mt-5 hover:shadow-xl focus:shadow-xl duration-150">
            <div className=''>
                <img className="h-6 w-6 "
                    src={image} alt="image1" />
                <p className='font-semibold text-xs mt-3'>{title}</p>
            </div>
        </button>
    )
}
