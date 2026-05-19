import { useEffect, useState, type FormEvent } from "react";
import useInputHandler from "./useInputHandler";
import LoginService from "@/services/LoginService";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const { login } = LoginService();
  const navigate = useNavigate();
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
        if(result){
          setSuccessMessage(result?.message);
          setTimeout( () => {
            navigate('client',{replace : true})
          },1500)
        }
    })
    .finally( () => {
        setLoading(false);
        // navigate('/client',{ replace : true});
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
