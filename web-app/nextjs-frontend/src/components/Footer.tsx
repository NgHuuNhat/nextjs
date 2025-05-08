import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
                {/* Left section */}
                <div className='md:flex md:flex-col md:justify-between'>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Logo</h2>
                        {/* <div className="text-xl font-bold mb-2 bg-white p-5">
                        <Image src="/next.svg" alt="Next.js Logo" width={100} height={100} />
                    </div> */}
                        <p className="text-sm mb-6">
                            We are a residential interior design firm located in Portland. Our boutique studio offers more than
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                        <a href="#"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                        <a href="#"><FontAwesomeIcon icon={faTiktok} size="lg" /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                    </div>
                </div>

                {/* Middle section */}
                <div>
                    <h3 className="font-semibold mb-3">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">Bonus program</a></li>
                        <li><a href="#">Gift cards</a></li>
                        <li><a href="#">Credit card payment</a></li>
                        <li><a href="#">Service contracts</a></li>
                        <li><a href="#">Non-cash account</a></li>
                        <li><a href="#">Payment</a></li>
                    </ul>
                </div>

                {/* Right section */}
                <div>
                    <h3 className="font-semibold mb-3">Assistance to the buyer</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">Find an order</a></li>
                        <li><a href="#">Terms of delivery</a></li>
                        <li><a href="#">Exchange and return of goods</a></li>
                        <li><a href="#">Guarantee</a></li>
                        <li><a href="#">Frequently asked questions</a></li>
                        <li><a href="#">Terms of use of the site</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
