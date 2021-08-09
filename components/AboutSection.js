import Container from "./Container";
import ShadowHeader from "./ShadowHeader";

export default function AboutSection() {
    return (
        <section className="pt-20 lg:pt-44" id="about">
            <Container>
                <div className="relative text-center lg:text-left mb-20 z-10 px-5">
                    <ShadowHeader
                        title="ABOUT ME"
                        subtitle="ABOUT ME"
                        variant="absolute"
                    />
                    <div className="bg-white-500 w-full sm:w-80 lg:w-96 h-2 rounded-md mt-20 lg:absolute lg:top-12 mx-auto lg:mx-0"></div>
                </div>
                <div className="lg:pl-32">
                    <div className="px-5 sm:px-10 md:px-12 lg:px-0 text-white-500">
                        <div
                            className="flex mb-10"
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration="2000"
                        >
                            <div className="mr-5 sm:mr-12 lg:mr-14">
                                <img
                                    src="/icon/light-red.svg"
                                    alt="Red Light Icons"
                                    className="light"
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <p className="mt-1 mb-6">Biodata</p>
                                <p className="text-white-700">
                                    Hai! Saya Valentino Stania, saat ini Saya
                                    adalah salah satu siswa di SMK di Kota
                                    Bandung
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex mb-10"
                            data-aos="fade-right"
                            data-aos-delay="400"
                            data-aos-duration="2000"
                        >
                            <div className="mr-5 sm:mr-12 lg:mr-14">
                                <img
                                    src="/icon/light-yellow.svg"
                                    alt="Yellow Light Icons"
                                    className="light"
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <p className="mt-1 mb-6">Perjalanan</p>
                                <p className="text-white-700">
                                    Saya memulai dan mengenal coding saat duduk
                                    di kelas 10 SMK. Saya mulai belajar mengenai
                                    Frontend pada tahun 2020 menggunakan
                                    teknologi Javascript. Dan pada tahun 2021,
                                    Saya mulai belajar dan memperdalam Backend
                                    menggunakan teknologi PHP dengen mengerjakan
                                    latihan berupa relasi database, CRUD, API,
                                    dll.
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex mb-10"
                            data-aos="fade-right"
                            data-aos-delay="500"
                            data-aos-duration="2000"
                        >
                            <div className="mr-5 sm:mr-12 lg:mr-14">
                                <img
                                    src="/icon/light-green.svg"
                                    alt="Green Light Icons"
                                    className="light"
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <p className="mt-1 mb-6">Tujuan</p>
                                <p className="text-white-700">
                                    Hal yang saya impikan melalui ilmu ini
                                    adalah membuat suatu produk agar bisa
                                    membantu pekerjaan manusia lebih cepat dan
                                    bermanfaat bagi orang banyak.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
