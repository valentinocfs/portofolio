import Container from "./Container";
import SocmedCard from "./SocmedCard";

export default function SocmedBox() {
    return (
        <section className="mx-3">
            <Container className="flex justify-center">
                <div className="py-4 px-6 sm:py-6 sm:px-10 bg-black-400 rounded-lg">
                    <ul className="flex">
                        <SocmedCard
                            link="valentino.cfs"
                            type="instagram"
                            className="mr-8 sm:mr-10"
                        />
                        <SocmedCard
                            link="valentinocfs"
                            type="github"
                            className="mr-8 sm:mr-10"
                        />
                        <SocmedCard
                            link="valentino_cfs"
                            type="twitter"
                            className="mr-8 sm:mr-10"
                        />
                        <SocmedCard
                            link="channel/UC2HgNd0k1P6iTdXVr-I-RVw"
                            type="youtube"
                        />
                    </ul>
                </div>
            </Container>
        </section>
    );
}
