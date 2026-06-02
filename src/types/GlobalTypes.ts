import type { FormEvent } from "react";


export type HandleInputTypes<T,V> = (key : keyof T , value : V ) => void;
export type HandleFormSubmit = (e : FormEvent<HTMLFormElement>) => void;