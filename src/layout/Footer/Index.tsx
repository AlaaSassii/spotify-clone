import React, { FC } from 'react'
import './index.scss' ; 
import {AiFillStepBackward ,AiFillStepForward , AiOutlineStop} from 'react-icons/ai'
import {BsPauseFill ,BsPlayFill ,BsFillVolumeDownFill ,BsFillVolumeMuteFill, BsFillVolumeUpFill, BsLayoutTextSidebarReverse  } from 'react-icons/bs'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {FaRegHeart} from 'react-icons/fa'
import {TbArrowsShuffle} from 'react-icons/tb'
import {ImLoop} from 'react-icons/im'
const Index:FC = () => {
  const [pause , setPause] = React.useState<boolean>(false)
  return (
    <footer>
        <div className="song">
          <img src="https://yt3.googleusercontent.com/QiI-c4cFyRPD0qVwTQooC3dlgJqHA_t6CpEAv818om-mqL9bqNDL4L_qXQVXx_eY76D_7cLD=s900-c-k-c0x00ffffff-no-rj" alt="album" />
          <div>
            <div>The Weeknd - Save Your Tears (Official Music Video)</div>
            <div>The Weeknd</div>
          </div>
          <div><span><FaRegHeart/></span> <span><AiOutlineStop/></span></div>
        </div>
        <div className="audio">
          <div className="top">
            <button><TbArrowsShuffle/></button>
            <button><AiFillStepBackward/></button>
            <button className='button'>{pause ? <BsPauseFill/> : <BsPlayFill/>}</button>
            <button><AiFillStepForward/></button>
            <button><ImLoop/></button>
          </div>
          <div className="bottom">
            <span>0:00</span>
            <input type={"range"} /> 
            <span>3:45</span>
          </div>
        </div>
        <div className="last">
          <span><HiOutlineDesktopComputer/></span>
          <span><BsLayoutTextSidebarReverse/></span>
          <span><BsFillVolumeUpFill/></span>
          <input type={"range"} /> 

        </div>
    </footer>
  )
}

export default Index


