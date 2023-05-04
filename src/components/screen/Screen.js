import { Textfit } from "react-textfit";

const Screen = ({value}) => {
    
    return (
        <Textfit className="screen" max={20}  mode="single">{value.num ? value.num : value.res}</Textfit>
    )
};

export default Screen;