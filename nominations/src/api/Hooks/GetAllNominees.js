import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from 'react';
import axios from "../api";

const allNominees = "https://cube-academy-api.cubeapis.com/api/nominee";
const getAllNominees = async () => {
    const response = await axios.get(allNominees);
    return response;
}

export const UseGetAllNominees = () => {
    const { isLoading, data } = useQuery(['allNominees'], getAllNominees);
    //console.log(data);
    return { data, isLoading };
}