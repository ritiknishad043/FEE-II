import { useEffect,useState } from "react";
function useFetch(url){
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");
    
    useEffect(()=>{
        setLoading(true);
        fetch(url)
        .then(res=>{
            return res.json()})
        .then(data=>{
            setData(data)
        })
        .catch((error)=>{
            setError(error.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[url])

    return {data,loading}
}
export default useFetch;