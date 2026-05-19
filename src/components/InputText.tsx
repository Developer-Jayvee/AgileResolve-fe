import type { InputTextProps } from "@/types/ComponentTypes";


export default function InputText({
    labelProps , inputProps , onInputChange = () => void , isHorizontal = false
} : InputTextProps){
    
    return <div className={`${isHorizontal ? 'flex gap-3 ' : 'grid gap-y-3' } `}>
                <label className={`${labelProps.labelName ?? 'font-bold text-[14px]'}`}>{labelProps.labelName}</label>
                <input
                  value={inputProps.inputValue}
                  onChange={(e) => onInputChange(e.target.value,inputProps.inputName)}
                  className="p-3 px-6 outline-0 bg-login-input rounded-full"
                  type="text"
                  placeholder="Username"
                />
              </div>
}