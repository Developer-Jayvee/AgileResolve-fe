import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PageLinks from "./PageLinks";


export default function Pagination() {

    return <div className="flex justify-between p-2 text-md">
        <div>
            <p>Showing 1 to 5 of 12 projects</p>
        </div>
        <div className="flex gap-2 items-center">
            <div className="border border-gray-300 h-10 w-8 flex items-center justify-center rounded-md">
                <IoIosArrowBack />
            </div>
            <div className="flex gap-2">
              <PageLinks pageNumber={1} isActive={true}/>
              <PageLinks pageNumber={2}/>
              <PageLinks pageNumber={3}/>
            </div>
            <div className="border border-gray-300 h-10 w-8 flex items-center justify-center rounded-md">
                <IoIosArrowForward />
            </div>
        </div>
    </div>
}