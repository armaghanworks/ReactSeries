// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
    
//     useEffect(()=>{
//         fetch(`https://open.er-api.com/v6/latest/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//     },[currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
            fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)            .then((res) => res.json())
            .then((res) => {
                // normalize to lowercase keys so the rest of your app
                // (which likely does data[toCurrency]) keeps working
                const lowerCased = Object.fromEntries(
                    Object.entries(res.rates).map(([k, v]) => [k.toLowerCase(), v])
                );
                setData(lowerCased);
            })
            .catch((err) => console.error("Currency fetch failed:", err));
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;