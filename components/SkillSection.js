import Container from './Container';
import ShadowHeader from './ShadowHeader';
import SkillCard from './SkillCard';

export default function SkillSection() {
    return (
        <section className="px-10 pt-15 pb-16 lg:pt-32" id="skills">
            <Container>
                <div className="relative text-center lg:text-left mb-20 z-10">
                    <ShadowHeader
                        title="SKILLS"
                        subtitle="MY SKILLS"
                        variant="absolute"
                    />
                    <div className="bg-white-500 w-full sm:w-80 lg:w-96 h-0.5 rounded-md mt-20 lg:absolute lg:top-12 mx-auto lg:mx-0"></div>
                </div>
                <div className="skill-cards grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-10  sm:px-5 lg:px-0 px-5">
                    <SkillCard
                        skill="JAVASCRIPT"
                        level="Intermediated"
                        img="/img/javascript.svg"
                        alt="Javascript"
                        list={[
                            'API Consumption',
                            'Asynchronous',
                            'ES6',
                            'RegEx - Soon',
                        ]}
                    />
                    <SkillCard
                        skill="REACT"
                        level="Beginner"
                        img="/img/reactjs.svg"
                        alt="Framework React JS"
                        list={[
                            'Hooks',
                            'Lifecycle',
                            'Context & Redux',
                            'Next.js',
                            'Testing - Soon',
                        ]}
                    />
                    <SkillCard
                        skill="TAILWIND"
                        level="Intermediated"
                        img="/img/tailwind.svg"
                        alt="FRAMEWORK TAILWIND"
                        list={[
                            'Responsive',
                            'Mobile First',
                            'Dark mode',
                            'JIT',
                            'Animation',
                        ]}
                    />
                    <SkillCard
                        skill="LARAVEL"
                        level="Beginner"
                        img="/img/laravel.svg"
                        alt="Framework Laravel"
                        list={['CRUD', 'Middleware', 'ORM', 'Logging']}
                    />
                    <SkillCard
                        skill="FIGMA"
                        level="Beginner"
                        img="/img/figma.svg"
                        alt="Figma"
                        list={[
                            'Grouping',
                            'Wireframing',
                            'Animation',
                            'Auto Layout - Soon',
                        ]}
                    />
                </div>
                <div className="mt-8 text-center">
                    <p>Alsa Git - Github -Gitlab, Vscode, </p>
                    <p className="text-white-700">
                        What I want to learn on {new Date().getFullYear() + 1} :
                        <span className="">
                            Nodejs, Typescript, Svelte, Kotlin / Dart, and
                            anything about UI design
                        </span>
                    </p>
                </div>
            </Container>
        </section>
    );
}
