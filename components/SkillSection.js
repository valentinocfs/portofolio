import Container from "./Container";
import ShadowHeader from "./ShadowHeader";
import SkillCard from "./SkillCard";

export default function SkillSection() {
    return (
        <section className="pt-20 lg:pt-44 px-5" id="skills">
            <Container>
                <div className="relative text-center lg:text-left mb-20 z-10">
                    <ShadowHeader
                        title="SKILLS"
                        subtitle="MY SKILLS"
                        span=" & TOOLS"
                        variant="absolute"
                    />
                    <div className="bg-white-500 w-full sm:w-80 lg:w-96 h-2 rounded-md mt-20 lg:absolute lg:top-12 mx-auto lg:mx-0"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-10 sm:px-5 lg:px-0">
                    <SkillCard
                        skill="HTML"
                        level="Advanced"
                        img="/img/html.svg"
                        alt="HyperText Markup Language"
                        list={["Responsive", "Semantic", "Accessibility"]}
                    />
                    <SkillCard
                        skill="JAVASCRIPT"
                        level="Intermediated"
                        img="/img/javascript.svg"
                        alt="Javascript"
                        list={["Functional", "Asynchronous", "DOM", "ES6"]}
                    />
                    <SkillCard
                        skill="REACT JS"
                        level="Beginner"
                        img="/img/reactjs.svg"
                        alt="Framework React JS"
                        list={[
                            "Lifecycle",
                            "Context & Redux",
                            "Basic Hooks",
                            "Nextjs",
                        ]}
                    />
                    <SkillCard
                        skill="BOOTSTRAP"
                        level="Beginner"
                        img="/img/bootstrap.svg"
                        alt="Framework Bootstrap CSS"
                        list={["Components", "SASS", "GRID & FLEX"]}
                    />
                    <SkillCard
                        skill="TAILWIND CSS"
                        level="Beginner"
                        img="/img/tailwind.svg"
                        alt="FRAMEWORK TAILWIND CSS"
                        list={["Responsive", "Dark mode", "JIT", "Animation"]}
                    />
                    <SkillCard
                        skill="PHP"
                        level="Beginner"
                        img="/img/php.svg"
                        alt="PHP or Hypertext Preprocessor"
                        list={["OOP", "MYSQL", "MVC"]}
                    />
                    <SkillCard
                        skill="LARAVEL"
                        level="Beginner"
                        img="/img/laravel.svg"
                        alt="Framework Laravel"
                        list={["Blade", "Migration & Seeder", "CRUD", "ORM"]}
                    />
                    <SkillCard
                        skill="FIGMA"
                        level="Beginner"
                        img="/img/figma.svg"
                        alt="Figma"
                        list={["Grouping", "Wireframing", "Animation"]}
                    />
                    <SkillCard
                        skill="VS CODE"
                        img="/img/vscode.svg"
                        alt="Visual Studio Code"
                    />
                </div>
            </Container>
        </section>
    );
}
