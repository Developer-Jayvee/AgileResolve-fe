import TicketBody from "./TicketBody";
import type { TicketTable } from "@/types/TicketTypes";


export default function TicketsTable({
    list
} :TicketTable) {
    return (<div>
        <table className="w-full ticket-list-table">
            <thead className="border-0 border-b border-gray-500">
                <tr >
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Deadline</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                {
                    list && list.map((items, index) => (
                        <TicketBody key={index} data={items} index={++index} />
                    ))
                }
            </tbody>
        </table>
    </div>)
}