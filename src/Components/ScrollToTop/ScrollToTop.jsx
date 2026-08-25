import React from 'react'
import { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    };
  return (
    <>
    {visible && (
        <button 
            className="btn bg-sky-400 hover:bg-sky-500 hover:scale-105 transition-all duration-300 text-white border-none  rounded-full btn-circle z-50 shadow-lg"
            onClick={scrollToTop} style={{position: 'fixed', bottom: '50px', right: '50px'}}>
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    )}
    </>
  )
}

export default ScrollToTop