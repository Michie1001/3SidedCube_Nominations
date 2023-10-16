import { Link } from 'react-router-dom';
import jumbo from '../images/enterNomimee/enterNominee3.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { formSchema } from '../validations/NominationValidation';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


export default function CreateNom() {
    // const { data: nominees, error, isLoading } = useQuery('nominees', async () => {
    //     const response = await axios.get('https://cube-academy-api.cubeapis.com/api/nominee');
    //     return response.data;
    // });
    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    // const nomineeQuery = useQuery({
    //     queryKey: ["nominees"], 
    //     queryFn: () => waitFor(1000).then(() => [...nominees]),
    // })

    // const createNomination = async (event) => {
    //     event.preventDefault()
    //     let nomineeName = {
    //         name: event.target[0]
    //     };
    //     const isValid = await formSchema.isValid(nomineeName);
    // }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const formSubmitHandler = (data) => {
        console.log(data);
    };
    return (
        <>
            <div className="bg h-screen w-screen flex justify-center">
                <div className="container max-w-2xl intro-screen">
                    <div className='jumbo-container'>
                        <img src={jumbo} alt="Jumbo image of the cube office" />
                    </div>
                    <div className='box-text'>
                        <h2>I’d like to nominate... </h2>
                        <p>Please select a cube who you feel has done something honourable this month or just all round has a great work ethic.</p>
                        <form onSubmit={handleSubmit(formSubmitHandler)}>
                            <label
                                htmlFor="nomineeName"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Cube's name
                            </label>
                            <select
                                {...register("nomineeName")}
                                name="nomineeName"
                                id="nomineeName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="">Dummy names</option>
                                <option value="">Dummy name 1</option>
                                <option value="">Dummy name 2</option>
                                <option value="">Dummy name 3</option>
                            </select>{" "}
                            {errors.nomineeName ? (
                                <span className="text-red-900">{errors.nomineeName.message}</span>
                            ) : (
                                <></>
                            )}
                            {/* <label><b>Cube's name</b></label>
                            <select>
                                <option>Dummy name 1</option>
                                <option>Dummy name 2</option>
                                <option>Dummy name 3</option>
                                <option>Dummy name 4</option>
                                {/* <option value="">Select a Nominee</option>
                                {nominees.map((nominee) => (
                                    <option key={nominee.nominee_id} value={nominee.nominee_id}>
                                        {nominee.first_name} {nominee.last_name}
                                    </option>
                                ))} 
                            </select> */}
                        </form>
                        <div className='navigation flex justify-between'>
                            <Link to="/create-nomination" className='flex justify-center'>
                                <button type="button" className='button-secondary-active w-24'>
                                    BACK
                                </button>
                            </Link>
                            <Link to="/reason" className='flex justify-center'>
                                <button type="submit" className='button-primary-inactive w-40'>
                                    NEXT
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}