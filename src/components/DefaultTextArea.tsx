import type { DefaultTextAreaProps } from "@/types/ComponentTypes";


export default function DefaultTextArea({
    isHorizontal = false ,
    textarea,
    label,
    isRequired,
    hasErrors
} : DefaultTextAreaProps) {
  
  return (
    <div className={`
        flex gap-2 
        ${isHorizontal ?'' :'flex-col'}
        `
    }>
      <label className={`${label.labelCustomClass ?? 'font-semibold text-lg'} `}>
        {label.labelName} <span className="font-bold text-red-500" hidden={isRequired}>*</span>
      </label>
      <textarea
        placeholder={textarea.placeholder}
        value={textarea.defaultTextAreaValue}
        onChange={(e) => textarea.onChangeInput?.(e)}
        className="border h-full border-gray-300 p-2"
      >
      </textarea>
      {
        hasErrors && (
          hasErrors.map( (errors) => (
            <p className="text-sm text-red-500">{errors}</p>
          ))
        )
      }
    </div>
  );
}
