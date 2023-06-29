export const getEquityPrice = async (value) => {
    try {
        let isin;
        if(value == 2){
            isin = "INE021A01026";
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "isinNumber": isin,
                "exchangeValue": "BSE"
            })
        };

        let data;
        const result = await fetch("http://localhost:8083/equity-price", requestOptions);
        
        if (result.ok) {
            const responseText = await result.text();
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
        console.error(error);
        return '-';
    }

}