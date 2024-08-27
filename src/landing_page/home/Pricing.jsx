export default function Pricing() {
    return <div className="container mt-5">
        <div className="row">
            <div className="col-4">
                <h1 className="fs-2">Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges</p>
                <a href="" style={{textDecoration:"none"}}>see pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col-2"></div>
            <div className="col-4">
                <div className="row text-center">
                    <div className="col border p-2">
                        <h1>₹0</h1>
                        <p className="mt-3">Free equity delivery  <br />and direct mutual funds</p>
                    </div>
                    <div className="col border p-2">
                        <h1>₹20</h1>
                        <p className="mt-3">Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}