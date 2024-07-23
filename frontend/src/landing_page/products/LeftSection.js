import React from 'react';
function LeftSection({
    imageURL,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,

}) 


{
    return (  

        <div className="container mt-5">
      <div className="row">
        <div className="col-6 ">
          <img src={imageURL} alt={`Image of ${productName}`}/>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/googlePlayBadge.svg" alt="Google Play Badge"/>
            </a>
            <a href={appStore}>
              <img
                src="media/appstoreBadge.svg"  alt="App Store Badge"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
        
    );
}

export default LeftSection;

