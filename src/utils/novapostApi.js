// import axios from 'axios';


export const novapostRequest = async formData => {
    try {
        const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Methods": "POST",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
};
// try {
//     const { data, status } = await axios.post('https://api.novaposhta.ua/v2.0/json/',
//         body, {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     if (status !== 200) {
//         throw new Error(`Failed to fetch data: ${status}`);
//     }
//     return data;
// } catch (error) {
//     console.log(error.message);
//     return error;
// }

