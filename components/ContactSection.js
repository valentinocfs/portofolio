import { useEffect, useState } from 'react';
import { FiClock, FiMail, FiMapPin } from 'react-icons/fi';
import Container from './Container';
// import ShadowHeader from './ShadowHeader';

export default function ContactSection() {
    const [hours, setHours] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    
    setInterval(() => {
        setHours(new Date().getHours());
        setMinutes(new Date().getMinutes() >= 10 ? new Date().getMinutes() : "0" + new Date().getMinutes());
    }, 5000);

    useEffect(() => {

    }, [minutes]);

    return (
        <section className="pt-16 pb-20" id="contact">
            <Container className="relative px-10 sm:px-8">
                <div className="mx-auto relative -top-3 lg:-top-16 flex flex-col-reverse items-center justify-center">
                    <div className="bg-black-500 text-white-500 p-5 lg:w-1/2 rounded-md">
                        <h3
                            className="font-bold text-2xl sm:text-3xl md:text-center mb-8"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="3000"
                        >
                            Let's work together 🤝
                        </h3>
                        <p
                            className="text-white-700 md:text-center"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="3000"
                        >
                            CONTACT DETAILS —
                        </p>
                        <div
                            className="my-6 grid sm:grid-cols-2 md:flex gap-x-8 lg:gap-0 justify-between"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="3000"
                        >
                            <p className="flex items-center gap-x-2 mb-2">
                                <i className="text-purple-500">
                                    <FiMail />
                                </i>
                                <a
                                    href="mailto:valentinostania@gmail.com"
                                    target="_blank"
                                    rel="noopener"
                                    className="hover:underline"
                                >
                                    valentinostania@gmail.com
                                </a>
                            </p>
                            <p className="flex items-center gap-x-2 mb-2">
                                <i className="text-purple-500 -mt-1">
                                    <FiMapPin />
                                </i>
                                Bandung, Indonesia
                            </p>
                            <p className="flex items-center gap-x-2 mb-2">
                                <i className="text-purple-500">
                                    <FiClock />
                                </i>
                                {hours}.
                                {minutes} GMT+7
                            </p>
                        </div>
                        {/* <div>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />
                            <textarea
                                cols="30"
                                rows="5"
                                placeholder="Message"
                            ></textarea>
                            <button className="bg-purple-500 text-white-500 px-6 rounded-md mt-4 mb-8">
                                SEND
                            </button>
                        </div> */}
                    </div>
                </div>
            </Container>
        </section>
    );
}
