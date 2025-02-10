import { Slide } from "react-awesome-reveal";

const SectionHeader = ({title,subTitle}) => {
    return (
        <div>
             <div> <div className="flex justify-center items-center text-center  mt-6 mb-10">
                    <div className="md:w-2/3">
                    <Slide direction="right">
                        <h2 className="font-bold font-Handlee   text-3xl">{title}</h2>
                        <p className="my-4"> {subTitle}</p>
                        </Slide>
                     </div>
                </div>
                </div>
        </div>
    );
};

export default SectionHeader;