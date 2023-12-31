import { Link } from 'react-router-dom';
import jumbo from '../images/reason/reason3.png';
import React from 'react';
import state from 'react';
import { handleChange } from 'react';
import selectedNominee from './CreateNomination';

export default function Reason(firstName) {
    const selectedNomineeFN = firstName.toString(); //TODO bind the nominee name from the API
    console.log(selectedNomineeFN);

    // state = {
    //     disabled: true
    // }

    // handleChange = (e) => {
    //     if (e.target.value.length >= 10) {
    //         this.setState({
    //             disabled: false
    //         });
    //     }
    //     else {
    //         this.setState({
    //             disabled: true
    //         });
    //     }
    // }

    return (
        <>
            <div className="bg h-screen w-screen flex justify-center">
                <div className="container max-w-2xl intro-screen">
                    <div className='jumbo-container'>
                        <img src={jumbo} alt="Jumbo image of the cube office" />
                    </div>
                    <div className='box-text'>
                        <h2>I’d like to nominate <span>John</span> because...</h2>
                        <p>Please let us know why you think this cube deserves the ‘cube of the month’ title 🏆⭐</p>
                        <div>
                            <label><b>Reasoning</b></label>
                            <textarea placeholder="Enter reason here"></textarea>
                        </div>
                        <div className='navigation flex justify-between'>
                            <Link to="/create-nomination" className='flex justify-center'>
                                <button type="button" className='button-secondary-active w-24'>
                                    BACK
                                </button>
                            </Link>
                            <Link to="/process" className='flex justify-center'>
                                <button type="button" className='button-primary-active w-40'>
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