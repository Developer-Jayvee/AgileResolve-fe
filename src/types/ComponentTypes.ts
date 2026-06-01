import type { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";

export type ButtonTypes = "button" | "submit" | "reset" | undefined;
export type InputTextTypes = "text" | "password";
export interface ButtonProps {
  buttonText: string;
  isDisabled?: boolean;
  buttonType?: ButtonTypes;
  customClass?: string;
  isLoading?: boolean;

  onClick?: () => void;
}
export interface InputProps {
  inputValue?: string;
  inputName: string;
  inputType?: InputTextTypes;
  inputPlaceholder?: string;
  inputCustomClass?: string;
}
export interface LabelProps {
  labelName: string;
  labelCustomClass?: string;
}
export interface InputTextProps {
  inputProps: InputProps;
  labelProps: LabelProps;
  isHorizontal?: boolean;

  onInputChange?: (value: string, name: string) => void;
}

export interface PageLinksProps {
  customClass?: string;
  pageNumber: number;
  isActive?: boolean;
}

export interface DefaultModalProps {
    children : ReactNode | null;
    setModalOpen? : Dispatch<SetStateAction<boolean>>;
    isModalOpen? : boolean;
}
export interface DefaultInputTextProps {
  isHorizontal?: boolean;
  label: LabelProps;
  input: {
    placeholder: string;
    defaultName: string;
    customClass?: string;
    defaultValue : string;

    onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  isRequired?: boolean;
  hasErrors ?: Array<string> | undefined | null;
}


export interface DefaultTextAreaProps extends Omit<DefaultInputTextProps,"input"> {
    textarea : {
        defaultName: string;
        customClass ?: string;
        defaultTextAreaValue : string;
        placeholder : string;
        onChangeInput?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    }
    customClass ?: string;
};
export interface SelectOptionProps {
  keyValue : string;
  defaultValue : string;
}
export interface DefaultSelectProps extends Omit<DefaultInputTextProps,"input"> {
  input: {
    placeholder: string;
    defaultName: string;
    customClass?: string;
    defaultValue : string;
    options : SelectOptionProps[];
    onChangeInput?: (e: ChangeEvent<HTMLSelectElement>) => void;
  };
}

export interface CenterModalProps {
  children : ReactNode;
  isOpen ?: boolean;
}