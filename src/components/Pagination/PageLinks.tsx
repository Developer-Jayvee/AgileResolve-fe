import type { PageLinksProps } from "@/types/ComponentTypes";
import { useState } from "react";


export default function PageLinks({
    customClass = '', pageNumber , isActive = false
} : PageLinksProps) {

    const [classStyle ,setClassStyle] = useState<string>("cursor-pointer border  border-gray-300 h-10 w-10 flex items-center justify-center rounded-md")
    return <div className={`${classStyle} ${customClass} ${isActive ? 'bg-blue-500 text-white' : 'text-black'}`}>
        <p>{pageNumber}</p>
    </div>
}