import type { DefaultTextAreaProps } from "@/types/ComponentTypes";


export default function DefaultTextArea({
    isHorizontal = false ,
    textarea,
    label,
    isRequired,
    hasErrors,
    customClass
} : DefaultTextAreaProps) {
  
  return (
    <div className={`
        flex gap-2 
        ${customClass ?? ''}
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
        className={`${textarea.customClass ?? ''} p-2 border h-full border-gray-300`}
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
