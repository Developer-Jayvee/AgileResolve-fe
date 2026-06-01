import type { ReactNode } from "react";

interface TicketTableHeaderProps {
    children: ReactNode;
}
export default function TicketTableHeader({
    children
}: TicketTableHeaderProps) {

    return <div>
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
                {children}
            </tbody>
        </table>
    </div>
}