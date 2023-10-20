import { Link } from 'react-router-dom';
import jumbo from '../images/reason/reason3.png';

export default function Process() {

    return (
        <>
            <div className="bg h-screen w-screen flex justify-center">
                <div className="container max-w-2xl intro-screen">
                    <div className='jumbo-container'>
                        <img src={jumbo} alt="Jumbo image of the cube office" />
                    </div>
                    <div className='box-text'>
                        <h2>IS HOW WE CURRENTLY RUN CUBE OF THE MONTH FAIR?</h2>
                        <p>As you know, out the nominees chosen, we spin a wheel to pick the cube of the month. What’s your opinion on this method?</p>
                        <div>
                            {/* slider goes here */}
                            {/* smiley faces go under */}
                        </div>
                        <div className='navigation flex justify-between'>
                            <Link to="/reason" className='flex justify-center'>
                                <button type="button" className='button-secondary-active w-24'>
                                    BACK
                                </button>
                            </Link>
                            <Link to="/overview" className='flex justify-center'>
                                <button type="button" className='button-primary-active w-40' disabled='true'>
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