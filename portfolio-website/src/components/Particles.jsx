
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useCallback, useEffect, useState } from "react";
import { loadFull } from "tsparticles"
const ParticlesBackground = () => {

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    const particlesInit = useCallback(async engine => {
        console.log('Particles init:', engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    if (init) return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            particlesLoaded={particlesLoaded}

            options={{
                autoPlay: true,
                background: {
                    color: {
                        value: "#2d1950",
                    },
                    image: "",
                    position: "",
                    repeat: "",
                    size: "",
                    opacity: 1,
                },
                backgroundMask: {
                    composite: "destination-out",
                    cover: {
                        color: {
                            value: "#fff",
                        },
                        opacity: 1,
                    },
                    enable: false,
                },
                defaultThemes: {},
                delay: 0,
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                detectRetina: true,
                duration: 0,
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        push: {
                            particles_nb: 1,
                        },
                    },
                },
                manualParticles: [],
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: true,
                            value_area: 1500,
                        },
                    },
                    line_linked: {
                        enable: false,
                        opacity: 0.03,
                    },
                    move: {
                        direction: "right",
                        speed: 0.05,
                    },
                    size: {
                        value: 1,
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.05,
                        },
                    },
                },
                pauseOnBlur: true,
                pauseOnOutsideViewport: true,
                responsive: [],
                smooth: false,
                style: {},
                themes: [],
                zLayers: 100,
                emitters: {
                    autoPlay: true,
                    fill: true,
                    life: {
                        wait: false,
                    },
                    rate: {
                        quantity: 1,
                        delay: 7,
                    },
                    shape: "square",
                    startCount: 0,
                    size: {
                        mode: "percent",
                        height: 0,
                        width: 0,
                    },

                    position: {
                        x: -5,
                        y: 55,
                    },
                },
                motion: {
                    disable: false,
                    reduce: {
                        factor: 4,
                        value: true,
                    },
                },
            }}

        />
    );
}

export default ParticlesBackground;
