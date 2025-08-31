import React, {useEffect, useState} from 'react';
import './PageLoader.css';


const PageLoader = ({delay = 3000, text = "Loading..."}) => {
    const [showImg, setShowImg] = useState(true);

    useEffect(() => {
        //Loading portion
        const timer = setTimeout(() => setShowImg(false), delay);
        return () => clearTimeout(timer);

    }, [delay]);

    if (!showImg) return null;


  return (
    
    <div className="page-loader-container">
        <div className="loader" aria-hidden="true"/>
        <span className="loader-text">{text}</span>
    </div>



  )
}

export default PageLoader