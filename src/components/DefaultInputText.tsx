import type { DefaultInputTextProps } from "@/types/ComponentTypes";

export default function DefaultInputText({
  isHorizontal = false,
  isRequired = false,
  label,
  input,
  hasErrors
}: DefaultInputTextProps) {
  return (
    <div
      className={`
            flex gap-2
            ${isHorizontal ? "" : "flex-col"}
        `}
    >
      <label className={`${label.labelCustomClass ?? "font-semibold text-lg"}`}>
        {label.labelName}{" "}
        <span className="font-bold text-red-500" hidden={isRequired}>
          *
        </span>
      </label>
      <input
        onChange={(e) => input.onChangeInput?.(e)}
        name={input.defaultName}
        value={input.defaultValue}
        className={`${input.customClass ?? "border border-gray-300 p-2"}`}
        type="text"
        placeholder={input.placeholder}
      />
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
