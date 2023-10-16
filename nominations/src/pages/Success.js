import { Link } from 'react-router-dom';
import jumbo from '../images/reason/reason3.png';
import Confetti from '../components/Confetti';

export default function Success() {
    return (
        <>
            {/* <Confetti /> */}
            <div className="bg h-screen w-screen flex justify-center">
                <div className="container max-w-2xl intro-screen">
                    <div className='jumbo-container'>
                        <img src={jumbo} alt="Jumbo image of the cube office" />
                    </div>
                    <div className='box-text'>
                        <h2>NOMINATION SUBMITTED</h2>
                        <p>Thank you for taking the time to fill out this form! Why not nominate another cube?</p>

                        <div className='navigation flex justify-center'>
                            <Link to="/tobecreated" className='flex justify-center'>
                                <button type="button" className='button-secondary-active w-42 short-btn'>
                                    VIEW NOMINATION
                                </button>
                            </Link>
                            <Link to="/create-nomination" className='flex justify-center'>
                                <button type="button" className='button-secondary-active w-42 short-btn'>
                                    CREATE NEW NOMINATION
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            {/* <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            <div>
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other
            </div>
            <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={10}
                min={10}
                max={110}
            />
            <Typography id="non-linear-slider" gutterBottom>
                Storage: {valueLabelFormat(calculateValue(value))}
            </Typography>
            <Slider
                value={value}
                min={5}
                step={1}
                max={30}
                scale={calculateValue}
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
            /> */}
        </>
    );
}