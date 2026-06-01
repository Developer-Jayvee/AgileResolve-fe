import DefaultInputText from "@/components/DefaultInputText";
import DefaultTextArea from "@/components/DefaultTextArea";


export default function TicketCreate(){
    return <>
        <div className="p-4 h-full">
            <div className="flex h-full flex-col gap-2">
                <div className="flex justify-between">
                    <div>
                        <h1 className="font-bold text-2xl">Create new ticket</h1>
                        <p className="font-light text-md">Issue new ticket</p>
                    </div>
                   
                </div>
                <div className="grow  h-full p-2 w-full  flex flex-col gap-5">
                    <div className="grid grid-cols-[1fr_auto] gap-x-10">
                        <DefaultInputText
                            isHorizontal={true}
                            isRequired={true}
                            label={{ labelName:"Title" }}
                            input={{
                                defaultName:"title",
                                defaultValue:"",
                                placeholder:"Ticket Title"
                            }}
                        />
                        <div className="flex gap-2 items-center">
                            <label className="font-semibold text-lg ">Deadline</label>
                            <input type="date"  className="border border-gray-300 p-2 w-full "/>
                        </div>
                    </div>
                    <div className="grow ">
                        <DefaultTextArea
                            customClass="h-full"
                            isRequired={true}
                            label={{ labelName : "Content" }}
                            textarea={{
                                defaultName:"content",
                                defaultTextAreaValue:"",
                                placeholder:"Please input content...",
                                customClass:"outline-0"
                            }}
                        />
                    </div>
                    <div className="flex justify-end gap-2 items-end">
                        <button className="py-1 px-4 bg-yellow-500  text-white rounded-md ">Clear</button>
                        <button className="py-1 px-4 bg-primary text-white rounded-md ">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}