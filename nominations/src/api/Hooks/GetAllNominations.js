import { useQuery } from "@tanstack/react-query";
import axios from "../api";

const allNominations = "https://cube-academy-api.cubeapis.com/api/nomination";
const getAllNominations = async () => {
    const response = await axios.get(allNominations);
    return response;
}

export const UseGetAllNominations = () => {
    const { isLoading, data } = useQuery(['allNominations'], getAllNominations);
    console.log(data);
    return { data, isLoading };
}