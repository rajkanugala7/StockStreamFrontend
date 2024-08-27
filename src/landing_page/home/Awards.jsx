export default function Awards() {
    return (<div>
        <div className="container p-5 mt-4">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largest-broker.svg" alt="" />
                </div>
                <div className="col-6 p-5">
                    <h1 className="mb-5">Largest stock broker in India</h1>
                     <p className="mb-3">1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                          </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                       <img src="media/images/press-logos.png" alt="press Logos" style={{width:"95%"}} />
                
                </div>

            </div>
        </div>
    </div>  );
}