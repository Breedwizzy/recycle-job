
import React from 'react'
import './Featured.css'
import Plastic1 from '../../assets/plastic1.webp'
import Plasticpickers from '../../assets/plasticpickers.jpg'
import Marine from '../../assets/marine.webp'



const Featured = () => {
    return (
        <div className='featured'>


            {/* Section section */}
            <div className='container'>


                <img className='order-2' src={Plasticpickers} alt='' />
                <img className='order-3' src={Plastic1} alt='' />
                <p className="overlay-text">Zero-Waste Future</p>
                <p className="overlay-text2">we collect and recycle waste</p>
                <img className='span-3 image-grid-row-2 order-1' src={Plastic1} alt='' />
                <img className='order-4' src={Plastic1} alt='' />
                <img className='order-5' src={Plastic1} alt='' />


            </div>



            <div className='container-2 span-3'>
                <img className='span-3 image-grid-row-2' src={Marine} alt='' />
            </div>



        </div>


    )
}

export default Featured
