import {
  useState,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";

interface SubmitFormProps<P, R> {
  service: (payload: P) => Promise<R>;
  payload: P;
  appendToList?: boolean;
  setList?: Dispatch<SetStateAction<R[]>>;
}
export default function useSubmitForm<P, R>({
  service,
  payload,
  setList = () => [],
  appendToList = false,
}: SubmitFormProps<P, R>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formResponse, setFormResponse] = useState<R | null>(null);
  const [errorResponse, setErrorResponse] = useState([]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    await service(payload)
      .then((result) => {
        if (result) {
          const { data } = result.data;
          if (data) {
            setFormResponse(data);
            if (appendToList) {
              setList((prev) => [...prev, data]);
            }
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          const errorResponse = error.response.data?.error;
          setErrorResponse(errorResponse);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return { isLoading, handleSubmit, formResponse, errorResponse };
}
