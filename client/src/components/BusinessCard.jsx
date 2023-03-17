import './businessCard.css';

function BusinessCard({business,selectBusinessProfile}) {
    console.warn(business);
    return (
        <div onClick={e => selectBusinessProfile(business)} class="businessCardContainer">

            <div class="businessCard">
                <div class="org">
                    <div class="logo"><img src="https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png" alt="" /></div>
                    <div class="orgName">{business.organizationName} </div>
                </div>

                <div className="description">
                    <div className="orgDescription">
                        <div class="orgLocation">Location: {business.location}</div>

                        <div class="product">Product: {business.productName}</div>

                        <div class="productRate">Product Rate : Rs {business.productRate}</div>
                        {/* <div class="Contact">Contact: {business.}</div> */}
                    </div>

                    <div className="productImg">
                    <img src={business.productImages[0]} alt="" />
                </div>
                </div>

              
            </div>

        </div>
    );
}

export default BusinessCard;
