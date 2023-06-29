export const getEquityPrice = async (req, res) => {
    const result = await fetch("https://reqres.in/api/users/2");
    const data = await result.json();
    console.log(data.data.id);
    return data.data.id;
}
