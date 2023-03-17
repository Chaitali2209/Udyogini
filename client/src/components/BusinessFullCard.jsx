import './BusinessFullCard.css';

function BusinessFullCard({selectedBusinessProfile}) {
    return (
        <div class="businessFullCardContainer">

            <div class="businessFullCard">
                <div class="orgFull">
                    <div class="logoFull"><img src="https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png" alt="" /></div>
                    <div class="orgNameFull">{selectedBusinessProfile.organizationName} </div>
                </div>

                <div className="descriptionFull">
                    <div className="orgDescriptionFull">
                        <div class="orgLocationFull"> <span className="label">Location:</span> <span>{selectedBusinessProfile.location}</span></div>
                        <div class="AboutUs"><div className="label">About Us:</div> <span>{selectedBusinessProfile.aboutUs} </span></div>


                        <div className="miniOrderValue"><span className="label">Minimum Order value:</span>  <span>{selectedBusinessProfile.minOrderValue} items</span></div>

                        <div class="productRateFull"><span className="label">Product Rate:</span> <span>Rs {selectedBusinessProfile.productRate}</span></div>

                        <div class="productFull"><span className="label">Product :</span>  <span>{selectedBusinessProfile.organizationName}</span></div>

                    </div>

                    <div className="productImgFull">
                        <img src={selectedBusinessProfile.productImages && selectedBusinessProfile.productImages[0]} alt="" />

                        <img src={selectedBusinessProfile.productImages && selectedBusinessProfile.productImages[1]} alt="" />

                        <img src={selectedBusinessProfile.productImages && selectedBusinessProfile.productImages[2]} alt="" />
                    </div>

                    <div className='contactContainer'>
                        <div class="ContactFull"><span>Contact:                 9237387481</span></div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default BusinessFullCard;
