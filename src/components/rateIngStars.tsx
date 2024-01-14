import React from 'react'
import Style from './ratestar.module.css'
import { CiStar } from 'react-icons/ci'
import { FaStar } from "react-icons/fa6";
function RateIngStars() {
  return (
    <div className="d-flex justify-content-start">
      <span className={Style.star}><FaStar  size={25} /></span>
      <span className={Style.star}><FaStar  size={25} /></span>
      <span className={Style.star}><FaStar  size={25} /></span>
      <span className={Style.unfilled}><CiStar size={25} /></span>
      <span className={Style.unfilled}><CiStar size={25} /></span>
    </div>
  )
}

export default RateIngStars