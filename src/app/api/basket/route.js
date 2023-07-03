
// API call for getting the price of Equity
export const getEquityPrice = async (value) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "isinNumber": value,
                "exchangeValue": "BSE"
            })
        };

        let data;
        const response = await fetch("http://localhost:8083/equity-price", requestOptions);
        
        if (response.ok) {
            const responseText = await response.text();
            if (responseText) {
            data = JSON.parse(responseText);
            }
        }
        if (data) {
            return data.price;
        } else {
            throw new Error("Failed to fetch equity price data");
        }
    }
    catch(error){
        throw new Error("Failed to fetch data");
        return '-';
    }

}

// API call to get the constituents and exchange details
export const getInstrumentDetails = async () => {
    try{
        const response = await fetch("https:localhost:8083/")
        
        if(response.ok){
            const jsonData = await response.json();
            return jsonData;
        }
        else{
            throw new Error("Failed to fetch data");
        }
        
    }
    catch(error){
        throw new Error("Failed to fetch data");
        retutn;
    }
}