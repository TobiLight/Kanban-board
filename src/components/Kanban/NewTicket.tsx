import { CloseIcon } from "../icons/close"

type NewKanBanTicketType = {
    closeTicketForm: () => void
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
    onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    error: string
}

export const NewKanbanTicket = ({ closeTicketForm, onChange, onSubmit, error }: NewKanBanTicketType) => {
    return (
        <div className="w-full h-full absolute bg-transparent top-[0] left-0 right-0 z-[4] m-auto pb-10">
            <div className="bg-[#3d3d3d] w-[50%] relative mx-auto top-[10%] pb-10">
                <div className="flex justify-end">
                    <CloseIcon onClick={closeTicketForm} className="w-8 h-8 cursor-pointer bg-white" />
                </div>
                <form className="mt-4 flex flex-col gap-y-5 w-[80%] mx-auto">
                    <div className="flex justify-center">
                        <label htmlFor="title" className="flex flex-col gap-2 w-[100%] text-gray-300">
                            Title
                            <input name="title" onChange={onChange} type="text" className="p-2 rounded bg-white text-black focus:outline-none" />
                        </label>
                    </div>

                    <div className="flex justify-center">
                        <label htmlFor="content" className="flex flex-col gap-2 w-[100%] text-gray-300">
                            Content
                            <textarea onChange={onChange} className="text-black p-2 rounded focus:outline-none" name="content" rows={4} cols={4} />
                        </label>
                    </div>

                    <div className="flex justify-center">
                        <label htmlFor="status" className="flex flex-col gap-2 w-[100%] text-gray-300">
                            Status
                            <select onChange={onChange} className="text-black focus:outline-none p-2 rounded" name="status" id="status">
                                <option>---</option>
                                <option value="todo">Todo</option>
                                <option value="inProgress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex justify-end w-[100%]">
                        <button onClick={onSubmit} className="p-3 text-white bg-[#5000a1]">Add ticket</button>
                    </div>
                    <p className="text-white italic">{error}</p>
                </form>
            </div>
        </div>

    )
}