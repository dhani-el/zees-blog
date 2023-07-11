import { useState, useEffect } from "react";

const Usefetch = (url , id) => {
    const [data, setdata] = useState(null);
    const [IsPending, setIsPending] = useState(true);
    const [error,  setError] = useState(null);
    const abortCont = new AbortController();

    useEffect(() => {
        setTimeout(() => {
            fetch(url, {
                credentials:"include"
            })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch resource');
                }
                return res.json();
            })
            .then(data => {
                setdata(data);
                setIsPending(false);
                window.scrollTo(0,0);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
        }, 1000);
        // return () => abortCont.abort();
    }, [id]);
    
    return ( {data, IsPending, error , setdata} );
}
 
export default Usefetch;