import { Link } from 'react-router-dom';
import jumbo from '../images/reason/reason3.png';

export default function Overview() {

    return (
        <>
            <div className="bg h-screen w-screen flex justify-center">
                <div className="container max-w-2xl intro-screen">
                    <div className='jumbo-container'>
                        <img src={jumbo} alt="Jumbo image of the cube office" />
                    </div>
                    <div className='box-text'>
                        <h2>nomination overview</h2>
                        <p>Thank you for taking the time to nominate a fellow cube. Please check your answers before submitting.</p>
                        <div>
                            <div className='info-section flex justify-between'>
                                <div className='info'>
                                    <div className='section-name'>Cube's Name</div>
                                    <div className='section-info'>Dummy name</div>
                                </div>
                                <Link to="/create-nomination" className='flex justify-center'>
                                    <div className='edit'>edit icon</div>
                                </Link>
                            </div>
                            <div className='info-section flex justify-between'>
                                <div className='info'>
                                    <div className='section-name'>Reasoning</div>
                                    <div className='section-info'>Dummy reason</div>
                                </div>
                                <Link to="/reason" className='flex justify-center'>
                                    <div className='edit'>edit icon</div>
                                </Link>
                            </div>
                            <div className='info-section flex justify-between'>
                                <div className='info'>
                                    <div className='section-name'>Thoughts on Current Process</div>
                                    <div className='section-info'>Dummy thoughts</div>
                                </div>
                                <Link to="/process" className='flex justify-center'>
                                    <div className='edit'>edit icon</div>
                                </Link>
                            </div>
                        </div>
                        <div className='navigation'>
                            <Link to="/success" className='flex justify-center'>
                                <button type="button" className='button-primary-active w-40'>
                                    SUBMIT
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}