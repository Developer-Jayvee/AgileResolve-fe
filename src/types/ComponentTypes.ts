
export type ButtonTypes = "button" | "submit" | "reset" | undefined;
export type InputTextTypes = "text" | "password";
export interface ButtonProps {
    buttonText : string;
    isDisabled ?: boolean;
    buttonType ?: ButtonTypes;
    customClass ?: string;
    isLoading ?: boolean;
}
export interface InputProps {
    inputValue ?: string;
    inputName : string;
    inputType ?: InputTextTypes;
    inputPlaceholder ?: string;
    inputCustomClass ?: string;

}
export interface LabelProps {
    labelName : string;
    labelCustomClass ?: string;
}
export interface InputTextProps {
    inputProps : InputProps;
    labelProps : LabelProps;
    isHorizontal ?: boolean;

    onInputChange ?: (value : string , name : string) => void;
}

export interface PageLinksProps {
    customClass ?: string;
    pageNumber : number;
    isActive ?: boolean;
}