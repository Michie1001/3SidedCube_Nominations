import axios from 'axios';

const API_BASE_URL = 'https://cube-academy-api.cubeapis.com/api';
const token = '74|Pf1i5P57sQAa1CLR1nDmV6Ia9tVvGYbT8E69Jd2B4f11aa30';

export const getNominees = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/nominee`);
        return response.data;
    } catch (error) {
        console.error('Error fetching nominees:', error);
        throw error;
    }
};

// export const createNomination = async (nomineeId, reason, process) => {
//     try {
//         const response = await axios.post(`${API_BASE_URL}/nomination`, {
//             nomineeId: nomineeId,
//             reason: reason,
//             process: process,
//         },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`, // Include the API key
//                     //"authorization": `Bearer ${token}`
//                 },
//             }
//         );

//         // Handle success (e.g., show a success message)
//         console.log('Nomination created:', response.data);

//         return response.data;
//     } catch (error) {
//         // Handle the error (e.g., show an error message)
//         console.error('Error creating nomination:', error);
//         throw error;
//     }
// };
