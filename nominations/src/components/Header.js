import Progress from '../components/ProgressBar';
import inbox from '../icons/inbox.png';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Header() {
    const data = useQuery('nominations', () => {
        return axios.get('https://cube-academy-api.cubeapis.com/api/nominee');
    })
    return (
        <>
            <div className="header w-screen sticky top-0 min-h-max bg-black text-white font-medium">
                <a href='/intro'>
                    <div className='md:flex justify-center align-middle'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="37" viewBox="0 0 10 37" fill="none">
                            <path d="M19.9257 20.3797C18.9608 20.3797 17.9785 19.5796 17.9785 18.057L18.1958 5.86701L11.9019 11.8717C11.8237 11.9405 11.728 11.9921 11.6237 12.0093C11.4238 12.0437 11.2325 11.9663 11.1108 11.8114L11.1021 11.8028C11.0152 11.691 10.9804 11.5534 10.9978 11.4243L11.389 8.29296L11.4325 8.15531L11.5194 8.01767L18.5087 0.860265L19.0042 0.369914C19.2737 0.12904 19.5954 0 19.9257 0C20.2474 0 20.569 0.12904 20.8298 0.352709L21.334 0.851662L28.3321 8.01767L28.4103 8.12951L28.4624 8.28435L28.8623 11.4071C28.8797 11.519 28.8536 11.6394 28.7928 11.734C28.6885 11.9147 28.4885 12.0179 28.2799 11.9921H28.2625C28.1408 11.9835 28.0278 11.9319 27.9409 11.8459L21.6644 5.85841L21.8817 18.0398C21.873 19.5796 20.8994 20.3797 19.9257 20.3797ZM11.4064 36.9914L1.63524 34.5827L0.95717 34.402C0.609443 34.2902 0.339953 34.0751 0.174783 33.7998C0.00961186 33.5245 -0.0425472 33.1804 0.0356916 32.8535L0.218249 32.1739L3.00007 22.5992L3.05223 22.4787L3.16524 22.3497L5.70366 20.4485C5.79059 20.3797 5.9036 20.3453 6.01661 20.3453C6.22525 20.3453 6.4165 20.4657 6.50343 20.655L6.51212 20.6808C6.56428 20.7926 6.57298 20.913 6.5469 21.0249L4.45184 29.3953L15.0228 23.1153C15.4835 22.8572 15.9442 22.7196 16.3876 22.7196C17.0917 22.7196 17.709 23.0551 18.0393 23.6143C18.5261 24.4401 18.3175 25.6789 16.9787 26.4445L6.19048 32.3546L14.6055 34.7375C14.7098 34.7633 14.7967 34.8235 14.8663 34.901C14.9967 35.0472 15.0315 35.2623 14.9532 35.4429V35.4515C14.9011 35.5806 14.7967 35.6838 14.6663 35.7354L11.7194 36.9656L11.5803 37L11.4064 36.9914ZM28.2886 36.9914L28.1495 36.957L25.2112 35.7354C25.1069 35.6924 25.0199 35.615 24.9591 35.5117C24.8548 35.3311 24.8635 35.1074 24.9852 34.9354L24.9939 34.9182C25.0634 34.8235 25.1677 34.7547 25.2807 34.7203L33.6697 32.346L22.8814 26.4359C21.5427 25.6703 21.334 24.4315 21.8122 23.6057C22.1425 23.0465 22.7597 22.711 23.4639 22.711C23.9159 22.711 24.368 22.84 24.82 23.0981L35.3996 29.3781L33.2872 20.9905C33.2611 20.8872 33.2698 20.784 33.3046 20.6808C33.3741 20.4915 33.5393 20.3625 33.7392 20.3367H33.7566C33.8957 20.3195 34.0261 20.3539 34.1391 20.4399L36.6775 22.3411L36.7731 22.4443L36.8427 22.5906L39.6332 32.1567L39.8158 32.8191C39.894 33.1718 39.8418 33.5073 39.6854 33.7912C39.5202 34.0665 39.2507 34.2816 38.9291 34.3848L38.2423 34.5655L28.4624 36.9742L28.3234 36.9828L28.2886 36.9914Z" fill="white" />
                        </svg>
                        <span className='hidden md:block nav-text' >3 Sided Cube</span>
                    </div>
                </a>
                <a href='/toBeCreated' className='nominations'>
                    <img src={inbox} alt="Notifications" className='md:hidden' />
                    <span className='hidden md:flex'>Your nominations</span>
                </a>
            </div>

            <Progress />
        </>
    );
}