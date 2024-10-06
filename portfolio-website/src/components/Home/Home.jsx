import reactsvg from '../../assets/react.svg'
import MEdessin from '../../assets/MEdessin.svg'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
export const Home = () => {
    return (

        <section>
            <div className="container mx-auto relative bg-center bg-no-repeat pb-[30px] pt-[30px]">
                <div className="flex flex-wrap text-white py-[9rem] pb-[2rem] text-left text-whitesmoke">
                    <div className="w-full md:w-7/12 home-header p-4 pt-[80px]">
                        <h1 style={{ paddingBottom: 15 }} className="font-bold text-[2.4em] pl-[50px]">
                            Hi There!{" "}
                            <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>

                        <h1 className="text-[2.5em] pl-[45px]">
                            I&apos;M
                            <strong className="text-[#cd5ff8]"> Lou-Anne COSTES</strong>
                        </h1>
                        <div className="p-12 text-left">
                            <div className="relative w-[max-content] font-mono text-2xl before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
                                <p>coucou wesh</p>
                            </div></div>
                    </div>

                    <div className="w-full md:w-5/12 p-4">
                        <img
                            src={MEdessin}
                            alt="home pic"
                            className="img-fluid max-h-450"
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto relative pb-[70px] pt-[70px] ">
                <div className="flex flex-wrap text-white">
                    {/* Section gauche avec texte */}
                    <div className="w-full md:w-2/3 px-4 mb-8 md:mb-0 text-white pt-[100px] pb-[20px]">
                        <h1 className="text-4xl md:text-5xl">
                            LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
                        </h1>
                        <p className="pt-[50px] text-[1.2em] text-left">
                            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                        </p>
                        <p className="mt-4">
                            I am fluent in classics like{" "}
                            <i>
                                <b className="text-purple-500">C++, Javascript and Go.</b>
                            </i>
                        </p>
                        <p className="mt-4">
                            My fields of interest include building new{" "}
                            <i>
                                <b className="text-purple-500">Web Technologies and Products</b>
                            </i>{" "}
                            and areas related to{" "}
                            <i>
                                <b className="text-purple-500">Blockchain.</b>
                            </i>
                        </p>
                        <p className="mt-4">
                            Whenever possible, I also apply my passion for developing products with{" "}
                            <b className="text-purple-500">Node.js</b> and modern frameworks like{" "}
                            <i>
                                <b className="text-purple-500">React.js and Next.js.</b>
                            </i>
                        </p>
                    </div>

                    {/* Section droite avec image */}
                    <div className="w-full md:w-1/3 flex justify-center myAvtar">

                        <img src={MEdessin} className="img-fluid" alt="avatar" />

                    </div>
                </div>

                <div className="w-full mt-8 text-center pt-[25px] text-white">
                    <h1>FIND ME ON</h1>
                    <p>
                        Feel free to <span className="text-purple-500">connect</span> with me
                    </p>
                    <ul className="flex justify-center space-x-4 home-about-social-links mt-4">
                        <li className="social-icons">
                            <a
                                href="https://github.com/soumyajit4419"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl icon-colour home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/Soumyajit4419"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl icon-colour home-social-icons"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/soumyajit4419/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl icon-colour home-social-icons"
                            >
                                <AiFillLinkedin />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/soumyajit4419"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl icon-colour home-social-icons"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}