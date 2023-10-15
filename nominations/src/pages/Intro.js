import { Link } from 'react-router-dom';
import jumbo from '../images/Jumbo/Jumbo2.png';

export default function Intro() {
    return (
        <>
            <div className="bg h-screen w-screen flex justify-center">
                <div className="container max-w-2xl intro-screen">
                    <div className='jumbo-container'>
                        <img src={jumbo} alt="Jumbo image of the cube office" />
                    </div>
                    <div className='box-text'>
                        <h1>CUBE OF THE MONTH NOMINATIONS</h1>
                        <p>At cube we’re passionate about recognising the great work that our cubes do. Each month one of our cubes are crowned cube of the month 👑⭐. Please nominate who you think deserves this month's title.</p>
                        <Link to="/create-nomination" className='flex justify-center'>
                            <button type="button" className='button-primary-active'>
                                GET STARTED
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}