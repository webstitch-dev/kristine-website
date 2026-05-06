import {useState, useEffect, useRef} from 'react';
import '../styles/MarketSection.css';

const MarketSection = () => {
    const [ lineVisible, setLineVisible ] = useState(false);
    const [horizontalFinished, setHorizontalFinished] = useState(false);
    const marketContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLineVisible(true);

                    setTimeout(() => {
                        setHorizontalFinished(true); 
                        console.log("horizontal line finished animating");
                      }, 2300);
                } 
            },
            { threshold: 0.6 }  
        );
    
        if (marketContainerRef.current) observer.observe(marketContainerRef.current);
        return () => observer.disconnect();
    }, []);
    
    return (
        <div className="market-container" ref={marketContainerRef}>
            <p id="market-header">Find Me In Person</p>
            <div className={`trigger-line ${lineVisible ? 'visible' : ''}`}>
                <span className="arm-left" />
                <span className="arm-right" />
            </div>
            <div className="columns-wrapper">
                <div className="column">
                    <h3 className={`column-title ${horizontalFinished ? 'fade-in' : ''}`}>Market</h3>
                    <p className={`row-1 ${horizontalFinished ? 'fade-in' : ''}`}>Fab Flea Market</p>
                    <p className={`row-2 ${horizontalFinished ? 'fade-in' : ''}`}>Georgetown Market</p>
                    <p className={`row-3 ${horizontalFinished ? 'fade-in' : ''}`}>Vintage Market</p>
                </div>
                <div className="column">
                    <h3 className={`column-title ${horizontalFinished ? 'fade-in' : ''}`}>When</h3>
                    <p className={`row-1 ${horizontalFinished ? 'fade-in' : ''}`}>May 12th, 8am-1pm</p>
                    <p className={`row-2 ${horizontalFinished ? 'fade-in' : ''}`}>May 20th, 9am-2pm</p>
                    <p className={`row-3 ${horizontalFinished ? 'fade-in' : ''}`}>June 1st, 10am-3pm</p>
                </div>
                <div className="column">
                    <h3 className={`column-title ${horizontalFinished ? 'fade-in' : ''}`}>Where</h3>
                    <p className={`row-1 ${horizontalFinished ? 'fade-in' : ''}`}>Arlington, VA</p>
                    <p className={`row-2 ${horizontalFinished ? 'fade-in' : ''}`}>Georgetown, DC</p>
                    <p className={`row-3 ${horizontalFinished ? 'fade-in' : ''}`}>Alexandria, VA</p>
                </div>
            </div>
        </div>
    );
        
};

export default MarketSection;