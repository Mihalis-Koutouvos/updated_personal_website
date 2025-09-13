import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "#07131c"
                    },
                },

                particles: {
                    number: {
                        value: 50,
                    },

                    size: {
                        value: 3,
                    },

                    links: {
                        enable: true,
                        color: "#ffffff",
                    },

                    move: {
                        enable: true,
                        speed: 1,
                    },
                },

                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                },
            }}
        />
    );
}

export default ParticlesBackground;