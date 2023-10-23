import { Link } from 'react-router-dom';
import jumbo from '../images/enterNomimee/enterNominee3.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { formSchema } from '../validations/NominationValidation';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from '../components/CancelModal'
import { UseGetAllNominees } from '../api/Hooks/GetAllNominees';


export default function CreateNom(setState, stater) {
    const [openModal, setOpenModal] = useState(false);

    // this.state = {
    //     disabled: true
    // }

    // this.handleChange = (e) => {
    //     if (e.target.value.index > 0) {
    //         this.setState({
    //             disabled: false
    //         });
    //     }
    // }

    const { data, isLoading } = UseGetAllNominees();

    // const [selectedNomineeFN, setSelectedNomineeFN] = useState(0);

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

    const selectedFirstName = e => {
        const selectedId = e.target.value;
        const selectedFirstName = data.data.data.filter((d) => d.nominee_id == selectedId)[0];
        //console.log(setState = selectedFirstName.first_name);
        return setState = selectedFirstName.first_name;
    }


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
                                className="block mb-2 "
                            >
                                Cube's name
                            </label>
                            <select
                                {...register("nomineeName")}
                                name="nomineeName"
                                id="nomineeName"
                                className="mt-0 ml-0"
                                onChange={(e) => { selectedFirstName(e) }}
                            >
                                {
                                    isLoading ? (
                                        //<CircularProgress size='1.5rem' isIndeterminate color='primary-pink'/>
                                        <option>Loading...</option>
                                    ) : data ? (
                                        data.data.data.map((nominee) => {
                                            return (
                                                <option key={nominee.nominee_id} value={nominee.nominee_id}>
                                                    {nominee.first_name} &nbsp;
                                                    {nominee.last_name}
                                                </option>
                                            )
                                        })) : (
                                        <h3>N/A</h3>
                                    )
                                }
                            </select>{" "}
                            {errors.nomineeName ? (
                                <span className="text-red-900">{errors.nomineeName.message}</span>
                            ) : (
                                <></>
                            )}
                        </form>
                        <div className='navigation flex justify-between'>
                            <button type="button" className='button-secondary-active w-24' onClick={() => setOpenModal(true)}>
                                BACK
                            </button>
                            <Link to="/reason" className='flex justify-center'>
                                <button type="submit" className='button-primary-active w-40'>
                                    NEXT
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <Modal open={openModal} close={() => setOpenModal(false)} />
        </>
    );
}