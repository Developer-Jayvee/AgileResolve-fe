import type { TicketResponseProps } from "@/types/ResponseTypes"
import { dateFormatter } from "@/utils/utilities.util";

interface TicketTableDataProps {
    items : TicketResponseProps
    count : number;
}
export default function TicketTableData({
    items , count
} : TicketTableDataProps) {

    return <tr className="text-center cursor-pointer hover:bg-gray-200">
        <td>{count}</td>
        <td>{items.title}</td>
        <td>{items.description}</td>
        <td>{items.status}</td>
        <td>{items.deadline}</td>
        <td>{dateFormatter(items.created_at)}</td>
    </tr>
}