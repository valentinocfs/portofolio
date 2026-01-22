import Container from './Container';
import SocmedCard from './SocmedCard';

export default function SocmedBox() {
    return (
        <section className="">
            <Container className="flex justify-left">
                <div className="py-4 sm:py-6 border-b-2 border-white-700">
                    <ul className="flex">
                        <SocmedCard
                            link="valentinocfs"
                            type="instagram"
                            className="mr-8 sm:mr-10"
                        />
                        <SocmedCard
                            link="valentino_cfs"
                            type="twitter"
                            className="mr-8 sm:mr-10"
                        />
                        <SocmedCard
                            link="in/valentinostania"
                            type="linkedin"
                            className="mr-8 sm:mr-10"
                        />
                        <SocmedCard
                            link="valentinocfs"
                            type="github"
                            className=""
                        />
                    </ul>
                </div>
            </Container>
        </section>
    );
}
