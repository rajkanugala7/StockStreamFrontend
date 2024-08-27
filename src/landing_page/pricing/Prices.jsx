export default function Prices() {
    return ( 
        <div className="container text-center  p-5 border-top border-bottom ">
            <div className="row me-3 p-5">
                
                <div className="col-3 p-2">
                    <h1 style={{ color: "gold", fontSize: "80px" }}>₹0</h1>
                    <h1 className="fs-3">Free equity delivery</h1>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-1"></div>
                <div className="col-3 p-2">
                    <h1 style={{ color: "gold", fontSize: "80px" }}>₹20</h1>
                    <h1 className="fs-3">Intraday and F&O trades
                    </h1>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-1"></div>
                <div className="col-4 p-2">
                    <h1 style={{ color: "gold", fontSize: "80px" }}>₹0</h1>
                    <h1 className="fs-3">Free direct MF</h1>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}