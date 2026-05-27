import type { TicketBodyTypes } from "@/types/TicketTypes";
import { dateFormatter } from "@/utils/utilities.util";


export default function TicketBody({ data , index } : TicketBodyTypes & { index : number; }) {

    return <tr className="text-center cursor-pointer hover:bg-gray-200">
        <td>{index}</td>
        <td>{data.title}</td>
        <td>{data.content}</td>
        <td>
            <div className="flex gap-2 justify-center items-center">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p>{data.status}</p>
            </div>
        </td>
        <td>
            <p className="font-light text-md italic">{dateFormatter(data.deadline)}</p>
        </td>
        <td>
            <p className="font-light text-md italic">{dateFormatter(data.created_at)}</p>
        </td>
    </tr>
}