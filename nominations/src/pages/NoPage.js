import Image from '../images/notFound.jpg'
export default function NoPage() {

    return (
        <div className="w-screen h-screen bg-white">
            <div className="text-center p-10">
                <h2>404: Not found</h2>
                <p>Please come back later....this page is still being constructed</p>
            </div>
            <div className='notFound'>
                <img src={Image} />
            </div>
        </div>

    );
}