import {useEffect, useState} from "react";

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [tryAgain, setTryAgain] = useState(0);

    const retry = () => {
        setTryAgain(prev => prev + 1);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try{const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Veriler alınamadı");
                }
                const result = await response.json();
                setData(result);
            } catch {
                setError("Bir hata oluştu");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url, tryAgain]);

    return { data, loading, error, retry };


}export default useFetch;


                
           


