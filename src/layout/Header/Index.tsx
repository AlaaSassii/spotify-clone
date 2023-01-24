import React, { FC } from 'react'

// icons
import {ImSpotify} from 'react-icons/im'
import {AiFillHome , AiOutlinePlus , AiFillHeart}  from 'react-icons/ai' 
import {BsSearch} from 'react-icons/bs' 
import {BiLibrary} from 'react-icons/bi' 
import {GrInstallOption} from 'react-icons/gr'
// interface 
import { ButtonIcon} from './interfaces'
// style 
import './index.scss'

const Index:FC = () => {
  return (
    <header>
      <div className="logo">
        <span><ImSpotify/></span><span>Spotify</span>
      </div>
      <ul className="pages">
        <li><AiFillHome/><span>Home</span></li>
        <li><BsSearch/><span>Search</span></li>
        <li><BiLibrary/><span>your library</span></li>
      </ul>
      <ul className="creation">
        <li><button><AiOutlinePlus style={{...ButtonIcon , backgroundColor:"#fff",color:"#191414"} }/></button> <span>Create playlist</span></li>
        <li><button><AiFillHeart style={{fontSize:25}}/></button> <span>Liked Songs</span></li>
      </ul>
      <ul className="long-list">
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <button className='button'><GrInstallOption style={{fontSize:25,color:"#fff",backgroundColor:"white"}}/>install the app</button>
    </header>
  )
}

export default Index