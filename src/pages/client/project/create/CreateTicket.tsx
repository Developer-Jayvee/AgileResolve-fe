import Button from "@/components/Button";
import DefaultInputText from "@/components/DefaultInputText";
import DefaultTextArea from "@/components/DefaultTextArea";
import { TicketContext } from "@/contexts";
import { useContext } from "react";

export default function CreateTicket(){
    const { 
        handleSubmit : onSubmitForm,
        initStateForm,
        handleInput,
        formLoading
      } = useContext(TicketContext)
    return <div className="p-2">
        <div className="flex flex-col">
            <div className="border-0 border-b border-gray-300 py-1">
                <h1 className="font-bold text-2xl">New Ticket</h1>
                <p className="text-sm font-light">Issue new ticket</p>
            </div>
            <div>
                <div className="mt-4">
                    <form className="flex flex-col gap-3" onSubmit={onSubmitForm}>
                        <DefaultInputText
                            isRequired={true}
                            label={{
                                labelName:"Title",
                            }}
                            input={{
                                onChangeInput: (e) => handleInput('title',e.target.value),
                                defaultName:"title",
                                defaultValue:initStateForm.title,
                                placeholder:"Ticket title"
                            }}
                        />
                        <DefaultTextArea
                        isRequired={true}
                        label={{
                            labelName:"Content"
                        }}
                        textarea={{
                            onChangeInput: (e) => handleInput('content',e.target.value),
                            defaultName:"content",
                            defaultTextAreaValue:initStateForm.content,
                            placeholder:"Ticket Content"
                        }}
                        />
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-lg">Deadline</label>
                            <input type="date" onChange={(e) => handleInput('deadline',e.target.value)} value={initStateForm.deadline} className="p-2 outline-0 border border-gray-300" />
                        </div>
                        <Button isDisabled={formLoading} buttonText="Create" buttonType="submit" />
                    </form>
                </div>
            </div>
        </div>
    </div>
}