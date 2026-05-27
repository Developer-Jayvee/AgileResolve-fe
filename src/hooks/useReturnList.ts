import { useEffect, useState } from "react";


interface ReturnListProps<R> {
    service : () => Promise<R>;
}
export default function useReturnList<R>({ service} : ReturnListProps<R>){
    const [dataList ,setDataList] = useState<R[]>([]);
    const [isLoading , setLoading] = useState<boolean>(false);
    const [errorResponse,setErrorResponse] = useState<Array<[]>>([]);
    const handleResponseList =  async () => {
        setLoading(true);
        await service()
        .then(
            (result) => {
                const { data } = result?.data;
                if(data){
                    setDataList(data);
                }
            }
        )
        .catch((error ) => {
            if(error.response){
                const errorResponse = error.response.data?.error;
                setErrorResponse(errorResponse);
            }
        })
        .finally( () => {
            setLoading(false);
        })
    }

    useEffect( () => {
        const abort = new AbortController;
        handleResponseList();

        return () => {
            abort.abort();
        } 
    },[])
    return {
        dataList,
        isLoading,
        errorResponse,
        setDataList,
        handleResponseList
    }

}