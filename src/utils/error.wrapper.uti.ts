import axios from "axios";
import type { Dispatch, SetStateAction } from "react";

interface ErrorWrapperUtilProps {
  error: any;
  setErrorState: Dispatch<SetStateAction<any>>;
}
export default function ErrorWrapperUtil({
  error,
  setErrorState,
}: ErrorWrapperUtilProps) {
  if (axios.isAxiosError(error)) {
    const err = error.response?.data;
    if (err) {
      setErrorState(err.error);
    }
  } else {
    setErrorState((prev) => [...prev, error?.message]);
  }

  return error;
}
