
import './BusinessPage.css';
// import BusinessCard from './component/BusinessCard.jsx';
import BusinessFullCard from '../components/BusinessFullCard';
import BusinessCard from '../components/BusinessCard';
import { useEffect, useState } from 'react';

function BusinessPage() {
  const [businessList, setBusinessList] = useState([]);
  const [selectedBusinessProfile,selectBusinessProfile] = useState([]);
  useEffect(()=>{
    const fetchBusinessProfile = async () => {
        const response = await fetch("http://localhost:8000/getBusinessProfileList");
        const resJson = await response.json();
        console.log(resJson);
        setBusinessList(resJson);
    }
    fetchBusinessProfile();
  },[])
  return (
    <div className="businessContainer">
      <div class="topnav">
        <div class="search-container">
          <form action="">
            <div>
              <input type="text" class="searchInput" placeholder="Search.." name="search"/>
              </div>
              <div class="searchButtonContainer">
                  <button type="submit"  class="searchButton">search</button>
              </div>
              </form>
            </div>
        {/* <BusinessCard/> */}
        <div class="businessCardOverflow">
        {/* <BusinessCard/>
        <BusinessCard/>
        <BusinessCard/>
        <BusinessCard/> */}
        {
          businessList.map(item => {
            return <BusinessCard selectBusinessProfile = {selectBusinessProfile} business={item.business}/>
          })
        }
        </div>
        </div>
    <div class="businessFullCardOverflow">
        <BusinessFullCard selectedBusinessProfile={selectedBusinessProfile}/>
        </div>

      {/* <div class="businessImage">
        <img src="https://1.bp.blogspot.com/-_DwhOPBm8oM/XoaQohewJ4I/AAAAAAAAAS0/GsnwLzlgvXgQiUkeKkclPXTQWods62RAwCLcBGAsYHQ/w1200-h630-p-k-no-nu/woman-1824150_1920.jpg" />
      </div> */}
      </div>
      );
}

export default BusinessPage;
