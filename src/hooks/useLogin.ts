import { useEffect, useState, type FormEvent } from "react";
import useInputHandler from "./useInputHandler";
import LoginService from "@/services/LoginService";

export default function useLogin() {
  const { login } = LoginService();
  const [errors, setErrors] = useState(null);
    const [successMessage , setSuccessMessage] = useState(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const { handleInput, initStateForm, setInitStateForm } = useInputHandler<{
    username: string;
    password: string;
  }>({
    formData: {
      username: "",
      password: "",
    },
  });

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);
    setSuccessMessage(null);
    const service = login({
      username: initStateForm.username,
      password: initStateForm.password,
    });

    service.then((result) => {
        if(result instanceof Error){
            const { data } = result?.response;
            setErrors(data?.message)
            return false;
        }
        setSuccessMessage(result?.message);
    })
    .finally( () => {
        setLoading(false)
    })
  };

  useEffect(() => {
    setCanSubmit(
      initStateForm.username.trim() !== "" &&
        initStateForm.password.trim() !== "",
    );
  }, [initStateForm]);

  return {
    initStateForm,
    setInitStateForm,
    errors,
    setErrors,
    canSubmit,
    setCanSubmit,
    isLoading,
    setLoading,
    successMessage,
    setSuccessMessage,
    handleSubmitForm,
    handleInput,
  };
}
