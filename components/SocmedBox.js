import Container from './Container';
import SocmedCard from './SocmedCard';

export default function SocmedBox() {
    return (
        <section className="mx-3">
            <Container className="flex justify-center">
                <div className="py-4 px-6 sm:py-6 sm:px-10 border-b-2 border-white-500 bg-black-500">
                    <ul className="flex">
                        <SocmedCard
                            link="valentinocfs"
                            type="github"
                            className="mr-8 sm:mr-10"
                        />
                        <SocmedCard
                            link="in/valentino-s-9643131b6"
                            type="linkedin"
                            className="mr-8 sm:mr-10"
                        />
                        <SocmedCard
                            link="valentino.cfs"
                            type="instagram"
                            className="mr-8 sm:mr-10"
                        />
                        <SocmedCard
                            link="valentino_cfs"
                            type="twitter"
                            className=""
                        />
                    </ul>
                </div>
            </Container>
        </section>
    );
}
