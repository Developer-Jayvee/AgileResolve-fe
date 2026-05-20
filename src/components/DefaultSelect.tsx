import type { DefaultSelectProps } from "@/types/ComponentTypes";

export default function DefaultSelect({
  isHorizontal = false,
  input,
  label,
  isRequired,
  hasErrors,
}: DefaultSelectProps) {
  return (
    <div
      className={`
            flex gap-2
            ${isHorizontal ? '' : "flex-col"}
        `}
    >
      <label className={`${label.labelCustomClass ?? "font-semibold text-lg"}`}>
        {label.labelName}
        <span className="font-bold text-red-500" hidden={isRequired}>*</span>
      </label>
      <select
        value={input.defaultValue}
        onChange={(e) => input.onChangeInput?.(e)}
        className={`${input.customClass ?? "w-full outline-0 border border-gray-300 p-2"}`}
      >
        <option value="">{input.placeholder}</option>
        {input.options.map((val, index) => (
          <option value={val.keyValue} key={index}>
            {val.defaultValue}
          </option>
        ))}
      </select>
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
