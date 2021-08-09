import Container from "./Container";
import ShadowHeader from "./ShadowHeader";
import SocmedCard from "./SocmedCard";
import Button from "./Button";

export default function ContactSection() {
    return (
        <section className="pt-40 pb-20" id="contact">
            <Container className="relative px-5 sm:px-8">
                <div className="text-center">
                    <ShadowHeader subtitle="CONTACT" />
                </div>
                <div className="bg-black-600 xl:flex text-center justify-between items-center p-8 rounded-xl relative -top-3 lg:-top-16 lg:w-9/12 mx-auto">
                    <div className="lg:mb-8 xl:mb-0">
                        <p className="text-white-500 text-base sm:text-xl font-semibold mb-14 lg:mb-0 tracking-widest">
                            Bekerja sama dengan Saya?
                        </p>
                    </div>
                    <div className="lg:mb-8 xl:mb-0">
                        <Button
                            value="EMAIL"
                            link="mailto:valentinostania@gmail.com"
                            variant="green"
                            type="envelope"
                        />
                    </div>
                    <div className="lg:mb-4 xl:mb-0">
                        <p className="text-white-700 my-8 lg:my-0">atau</p>
                    </div>
                    <div className="bg-black-400 sm:px-8 py-4 rounded-md w-full sm:w-5/12 lg:w-3/12 mx-auto xl:mx-0">
                        <ul className="flex justify-center">
                            <SocmedCard
                                type="instagram"
                                link="valentino.cfs"
                                className="mr-8"
                            />
                            <SocmedCard
                                type="twitter"
                                link="valentino_cfs"
                                className="mr-8"
                            />
                            <SocmedCard
                                type="facebook"
                                link="valentino_cfs"
                                className=""
                            />
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
