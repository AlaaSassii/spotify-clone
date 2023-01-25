import React from 'react'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
import './index.scss'
const index = () => {
  return (
            <div className="buttons">
            <button><MdOutlineArrowBackIosNew/></button>
            <button><MdOutlineArrowForwardIos/></button>
            </div>
  )
}

export default index