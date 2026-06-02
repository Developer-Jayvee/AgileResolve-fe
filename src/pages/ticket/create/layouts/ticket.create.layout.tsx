import Button from "@/components/Button";
import DefaultInputText from "@/components/DefaultInputText";
import DefaultTextArea from "@/components/DefaultTextArea";
import type { HandleFormSubmit, HandleInputTypes } from "@/types/GlobalTypes";
import type { PayloadTicketProps } from "@/types/PayloadTypes";

interface TicketCreateLayoutProps {
    initStateForm: PayloadTicketProps;
    handleInput: HandleInputTypes<PayloadTicketProps, number | string>;
    handleSubmit : HandleFormSubmit;
    isLoading : boolean;
}
export default function TicketCreateLayout({
    initStateForm,
    isLoading,
    handleInput,
    handleSubmit,
}: TicketCreateLayoutProps) {
    return (
        <div className="p-4 h-full">
            <div className="flex h-full flex-col gap-2">
                <div className="flex justify-between">
                    <div>
                        <h1 className="font-bold text-2xl">Create new ticket</h1>
                        <p className="font-light text-md">Issue new ticket</p>
                    </div>
                </div>
                <div className="grow  h-full p-2 w-full  ">
                    <form onSubmit={handleSubmit} className="h-full flex flex-col gap-5">
                        <div className="grid grid-cols-[1fr_auto] gap-x-10">

                            <DefaultInputText
                                isHorizontal={true}
                                isRequired={true}
                                label={{ labelName: "Title" }}
                                input={{
                                    defaultName: "title",
                                    defaultValue: initStateForm?.title,
                                    placeholder: "Ticket Title",
                                    onChangeInput: (e) => handleInput("title", e.target.value),
                                }}
                            />
                            <div className="flex gap-2 items-center">
                                <label className="font-semibold text-lg ">Deadline</label>
                                <input
                                    type="date"
                                    onChange={(e) => handleInput("deadline", e.target.value)}
                                    value={initStateForm?.deadline}
                                    className="border border-gray-300 p-2 w-full "
                                />
                            </div>
                        </div>
                        <div className="grow ">
                            <DefaultTextArea
                                customClass="h-full"
                                isRequired={true}
                                label={{ labelName: "Content" }}
                                textarea={{
                                    defaultName: "content",
                                    defaultTextAreaValue: initStateForm?.content,
                                    placeholder: "Please input content...",
                                    customClass: "outline-0",
                                    onChangeInput: (e) => handleInput('content', e.target.value)
                                }}
                            />
                        </div>
                        <div className="flex justify-end gap-2 items-end">
                            <button type="button" className="py-1 px-4 bg-yellow-500  text-white rounded-md ">
                                Clear
                            </button>
                            <Button isLoading={isLoading} buttonText="Save" buttonType="submit" customClass="py-1 px-4 bg-primary text-white rounded-md " />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
