import { Link } from 'react-router-dom';
import jumbo from '../images/enterNomimee/enterNominee3.png';

export default function CreateNom() {

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
                        <div>
                            <label><b>Cube's name</b></label>
                            <select>
                                <option value="0">Select Option</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="4">Ford</option>
                            </select>
                        </div>
                        <div className='navigation flex justify-between'>
                            <Link to="/create-nomination" className='flex justify-center'>
                                <button type="button" className='button-secondary-active w-24'>
                                    BACK
                                </button>
                            </Link>
                            <Link to="/reason" className='flex justify-center'>
                                <button type="button" className='button-primary-inactive w-40'>
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