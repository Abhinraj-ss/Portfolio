import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function ParticlesBg({bgColor,zIndex}) {
    const particlesInit = async (main) => {
        await loadFull(main);
      };
      const particlesLoaded = (container) => {
      };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "background": {
            "color": `${bgColor}`,
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        },
        "fullScreen": {
            "enable": true,
            "zIndex": `${zIndex}`
        },
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#DE354C"
            },
            
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.4,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.2,
                    "sync": false
                }
            },
            "size": {
                "value": 6,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 10,
                    "size_min": 0.4,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 200,
                "color": "#482673",
                "opacity": 0.4,
                "width": 3,
                "shadow": {
                    "enable": false,
                    "blur": 5,
                    "color": "#000000"
                }
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse",
                    "parallax": {
                        "enable": false,
                        "force": 60,
                        "smooth": 10
                    }
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "fpsLimit": 120,
        "retina_detect": true
    }}
    />
  )
}

export default ParticlesBg