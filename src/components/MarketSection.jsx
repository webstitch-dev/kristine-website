import {useState, useEffect, useRef} from 'react';
import '../styles/MarketSection.css';

const MarketSection = () => {
    const [ lineVisible, setLineVisible ] = useState(false);
    const [horizontalFinished, setHorizontalFinished] = useState(false);
    const marketContainerRef = useRef(null);

    const markets = [
        { market: "Fab Flea Market", when: "May 12th, 8am-1pm", where: "Arlington, VA" },
        { market: "Georgetown Market", when: "May 20th, 9am-2pm", where: "Georgetown, DC" },
        { market: "Vintage Market", when: "June 1st, 10am-3pm", where: "Alexandria, VA" },
    ];

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
            { threshold: 0.4 }  
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

            <div className="markets-table">
                {/* Desktop headers */}
                <div className={`table-header ${horizontalFinished ? 'fade-in' : ''}`}>
                    <span>Market</span>
                    <span>When</span>
                    <span>Where</span>
                </div>

                {/* Rows */}
                {markets.map((m, i) => (
                    <div key={i} className={`market-row row-${i + 1} ${horizontalFinished ? 'fade-in' : ''}`}>
                        <span data-label="Market">{m.market}</span>
                        <span data-label="When">{m.when}</span>
                        <span data-label="Where">{m.where}</span>
                    </div>
                ))}
            </div>
            {/* <div className="columns-wrapper">
                <div className="column">
                    <h3 className={`row column-title ${horizontalFinished ? 'fade-in' : ''}`}>Market</h3>
                    <div className="col-container">
                        <p className={`row row-1 ${horizontalFinished ? 'fade-in' : ''}`}>Fab Flea Market</p>
                        <p className={`row row-2 ${horizontalFinished ? 'fade-in' : ''}`}>Georgetown Market</p>
                        <p className={`row row-3 ${horizontalFinished ? 'fade-in' : ''}`}>Vintage Market</p>
                    </div>
                   
                </div>
                <div className="column">
                    <h3 className={`row column-title ${horizontalFinished ? 'fade-in' : ''}`}>When</h3>
                    <div className="col-container">
                        <p className={`row row-1 ${horizontalFinished ? 'fade-in' : ''}`}>May 12th, 8am-1pm</p>
                        <p className={`row row-2 ${horizontalFinished ? 'fade-in' : ''}`}>May 20th, 9am-2pm</p>
                        <p className={`row row-3 ${horizontalFinished ? 'fade-in' : ''}`}>June 1st, 10am-3pm</p>
                    </div>
                </div>
                <div className="column">
                    <h3 className={`row column-title ${horizontalFinished ? 'fade-in' : ''}`}>Where</h3>
                    <div className="col-container">
                        <p className={`row row-1 ${horizontalFinished ? 'fade-in' : ''}`}>Arlington, VA</p>
                        <p className={`row row-2 ${horizontalFinished ? 'fade-in' : ''}`}>Georgetown, DC</p>
                        <p className={`row row-3 ${horizontalFinished ? 'fade-in' : ''}`}>Alexandria, VA</p>
                    </div>
                    
                </div>
            </div> */}
        </div>
    );
        
};

export default MarketSection;