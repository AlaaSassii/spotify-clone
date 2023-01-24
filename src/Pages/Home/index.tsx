import React from 'react'
import './index.scss'
import {MdOutlineArrowBackIosNew , MdOutlineArrowForwardIos} from 'react-icons/md' ; 
const index = () => {
  return (
    <div className='Sections'>
       <div className="buttons">
          <button><MdOutlineArrowBackIosNew/></button>
          <button><MdOutlineArrowForwardIos/></button>
      </div>

      <div className="section-1">
       
          <h1>Good Morning</h1>
          <ul className='albums'>
            <li>
              <img src="https://cdns-images.dzcdn.net/images/cover/9c413380c40cf2a435604bc8590fbf01/264x264.jpg" alt="" />
              <h3>100+ songs that 2000s kids grew ...</h3>
            </li>
            <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyJEckdruhR-ftBF9k7Dej1afqsXjs_SqKQ&usqp=CAU" alt="" />
              <h3>100+ songs that 2000s kids grew ...</h3>
            </li>
            <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKkjwX-t9sPCStnlwRayLfIafEe9jFashLw&usqp=CAU" alt="" />
              <h3>100+ songs that 2000s kids grew ...</h3>
            </li>
            <li>
              <img src="https://cdns-images.dzcdn.net/images/cover/69dd9f8aee198284ec39ec074545933d/200x200.jpg" alt="" />
              <h3>100+ songs that 2000s kids grew ...</h3>
            </li>
            <li>
              <img src="https://cdns-images.dzcdn.net/images/cover/d16617f0af4343496342b8015834a000/264x264.jpg" alt="" />
              <h3>100+ songs that 2000s kids grew ...</h3>
            </li>
            <li>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT918S8XSADLiD3cBiK2-Ld9FkpZcqCewu9EQ&usqp=CAU" alt="" />
              <h3>100+ songs that 2000s kids grew ...</h3>
            </li>
            
          </ul>
        </div>
      <div className="section-2">
      <div>
      <h3>Recently Played</h3>
      <h6>See All</h6>
      </div>

      <div className="albums">
      <div className='album'>
        <img src="https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg" alt="" />
      </div>
      <div className='album'>
        <img src="https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg" alt="" />
      </div>
      <div className='album'>
        <img src="https://pbs.twimg.com/media/Cs47zArVYAAg5dS.jpg" alt="" />
      </div>
      <div className='album'>
        <img src="https://media.pitchfork.com/photos/5929bfa95e6ef95969323435/1:1/w_600/795b3f6e.jpg" alt="" />
      </div>
      </div>

      </div>
    </div>
  )
}

export default index