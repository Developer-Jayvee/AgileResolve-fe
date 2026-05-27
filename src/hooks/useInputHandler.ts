import { useEffect, useState } from "react";

interface InputHandlerProps<T> {
  formData: T;
}
export default function useInputHandler<T>({ formData }: InputHandlerProps<T>) {
  const [initStateForm, setInitStateForm] = useState<T>(formData);

  const handleInput = (keyValue: keyof T, valueOf: string | number) => {
    setInitStateForm((prev) => ({
      ...prev,
      [keyValue]: valueOf,
    }));
  };
  const resetForm = () => setInitStateForm(formData);
  return {
    handleInput,
    initStateForm,
    setInitStateForm,
    resetForm,
  };
}
