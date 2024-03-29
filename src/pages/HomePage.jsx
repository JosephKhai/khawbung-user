import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeatureProduct from '../components/home/FeatureProduct'
import HomeTop from '../components/home/HomeTop'
import HomeTopMobile from '../components/home/HomeTopMobile'
import NewArrival from '../components/home/NewArrival'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className='Desktop'>
          <NavMenuDesktop />
          <HomeTop />
        </div>


        <div className='Mobile'>
          <NavMenuMobile />
          <HomeTopMobile />
        </div>

        <FeatureProduct />
        <NewArrival />
        <Categories />
        <Collection />

        <div className='Desktop'>
          <FooterDesktop />
        </div>

        <div className='Mobile'>
          <FooterMobile />
        </div>



      </Fragment>
    )
  }
}

export default HomePage
