import {useState, useEffect, useRef} from 'react';
import '../styles/MarketSection.css';

const MarketSection = () => {
    const [ lineVisible, setLineVisible ] = useState(false);
    const [horizontalFinished, setHorizontalFinished] = useState(false);
    const [activeLocation, setActiveLocation] = useState(null);
    const [animated, setAnimated] = useState(false);
    const marketContainerRef = useRef(null);

    const markets = [
        { market: "Fab Flea Market", when: "May 12th, 8am-1pm", where: "Arlington, VA", location: "12345 made up location square"},
        { market: "Georgetown Market", when: "May 20th, 9am-2pm", where: "Georgetown, DC", location: "12345 made up location drive" },
        { market: "Vintage Market", when: "June 1st, 10am-3pm", where: "Alexandria, VA", location: "12345 made up location terrace" },
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

    useEffect(() => {
        if (lineVisible) {
            // after all line delays are done (~2.3s + 1.5s), mark as fully animated
            const timer = setTimeout(() => setAnimated(true), 3800);
            return () => clearTimeout(timer);
        }
    }, [lineVisible]);
    
    return (
        <div className="market-container" ref={marketContainerRef}>
            <p id="market-header">Find Me In Person</p>
            <div className={`trigger-line ${lineVisible ? 'visible' : ''} ${animated ? 'animated' : ''}`}>
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
                        <span data-label="Where">
                            <span className="where-trigger" onClick={() => setActiveLocation(activeLocation === i ? null : i)}>
                                {m.where}
                            </span>
                            {activeLocation === i && (
                                <div className="location-popup">
                                    <div className="location-popup__address">{m.location}</div>
                                    <button className="location-popup__close" onClick={() => setActiveLocation(null)}>✕</button>
                                </div>
                            )}    
                        </span>                        
                    </div>
                ))}
            </div>
        </div>
    );
        
};

export default MarketSection;