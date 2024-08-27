export default function RightSection({imgUrl,prooductName,productDescription,tryDemo,learnMore,googlePlay,playStore }) {
    return <div className="container p-5">
        <div className="row ">
            
            <div className="col-5 mt-3"> 
                <h1>{prooductName}</h1>
                <p>{productDescription}</p>
                <div className="row mt-5">
                    <div className="col">
                        <a href="">{tryDemo} <i class="fa-solid fa-arrow-right"></i></a>
                        
                    </div>
                    <div className="col">
                        <a href="">{ learnMore} <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col ">
                        <img src="media/images/google-play-badge.svg" alt="" />
                    </div>
                    <div className="col">
                        <img src="media/images/appstore-badge.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="col-5">
                      <img src={imgUrl} alt="img" />
            </div>
           <div className="col-2"></div>
 
        </div>
    </div>
}