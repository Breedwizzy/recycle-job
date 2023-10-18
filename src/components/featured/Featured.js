
import React from 'react'
import './Featured.css'
import Plastic1 from '../../assets/plastic1.webp'
import Plasticpickers from '../../assets/plasticpickers.jpg'
import Marine from '../../assets/marine.webp'
import Smithlonepics from '../../assets/smithlonepics.jpg'
import Pavers from '../../assets/pavers.jpg'
import Smittthnewtiless from '../../assets/smittthnewtiless.jpg'
import Wasteeeeettt from '../../assets/wasteeeeettt.webp'



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
                <img className='order-4' src={Wasteeeeettt} alt='' />
                <img className='order-5' src={Plastic1} alt='' />


            </div>

            {/* <img className='span-3 image-grid-row-2' src={Marine} alt='' />
            <img className='span-3 image-grid-row-2' src={Marine} alt='' /> */}

            <div className='container-2'>
                <div>
                    leader in the plastic recycling industry by providing enhanced services,
                    relationships and profitability

                </div>
                <div>
                    Creating a circular economy for Nigeria’s waste using innovative solutions, while promoting
                    sustainable practices


                </div>
            </div>

            <div className='container-3'>

                <br />
                <div>

                    <img className='marine-image' src={Marine} alt='' />
                </div>
                <br />
                <p className='our-products'>Our Products</p>
                <div>

                    <img className='image-smith' src={Smithlonepics} alt='' />
                    <img className='image-smith' src={Smittthnewtiless} alt='' />
                    <img className='image-smith' src={Pavers} alt='' />
                </div>




            </div>

            <div className='amplify-text'>
                <p>
                    we amplify our impact exponentially. Through education, <br />
                    empowerment, and shared responsibility,
                </p>
            </div>


        </div>


    )
}

export default Featured
