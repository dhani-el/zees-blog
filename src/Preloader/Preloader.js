import './Preloader.css';
import { gsap } from 'gsap';
import { useRef, useEffect } from "react";



const Preloader = () => {
    const el = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {      
        gsap.to(el.current, { 
            duration: 0.5,
            y: "-100%",
            ease: 'power2', 
            delay: 5
         });

         gsap.to(headerRef.current, { 
            duration: 0.8,
            autoAlpha: 0,
            ease: 'expo', 
            delay: 6.5
         });
      }, []);
    return ( 
        <div className="preloader-container" ref={headerRef} data-scroll-section>
            <p>
                The ideal lifestyle blog for the imperfect 20 something’s. 
            </p>
            <div className="name">
                <div className="name2">
                    <span>by</span>
                    <div className="preload-name-container"></div>
                    <div className="preload-nam" ref={el}>susan omono</div>
                </div>
            </div>
        </div>
     );
}
 
export default Preloader;