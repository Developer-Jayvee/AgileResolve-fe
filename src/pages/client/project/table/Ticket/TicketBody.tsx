

export default function TicketBody() {

    return <tr className="text-center cursor-pointer hover:bg-gray-200">
        <td>1</td>
        <td>Bug Issue</td>
        <td>Ticket Description here</td>
        <td>
            <div className="flex gap-2 justify-center items-center">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p>On-going</p>
            </div>
        </td>
        <td>
            <p className="font-light text-md italic">May 22 2026</p>
        </td>
        <td>
            <p className="font-light text-md italic">May 22 2026</p>
        </td>
    </tr>
}