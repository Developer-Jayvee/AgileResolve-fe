import type { ButtonProps } from "@/types/ComponentTypes";
import { useEffect, useState } from "react";


export default function Button({
    isDisabled = false , buttonText , buttonType = 'button' , customClass , isLoading = false
} : ButtonProps){
    const [btnText , setBtnText] = useState(buttonText);
    const [isBtnDisabled,setBtnDisabled] = useState(isDisabled);
    useEffect( () => {
        console.log(isLoading);
        
        if(isLoading){
            setBtnDisabled(true);
            setBtnText("Loading");
        }else{
            setBtnDisabled(false);
            setBtnText(buttonText);
        }
    },[isLoading])
    return  <button
                type={buttonType}
                disabled={isBtnDisabled}
                className={`disabled:cursor-not-allowed disabled:bg-blue-400 bg-primary hover:bg-secondary text-white p-3 text-[17px] cursor-pointer ${customClass}`}
              >{btnText}</button>
}