import React from 'react'

const Card = ({Img, Radius, Title, Date, Text, Button, Comments, width, textwidth , Height , Display}) => {
  return (
    <div  className='Carddiv' style={{width: width, height: Height, }} >
        <img src={Img} alt="" className='surati'/>
        <h1 className='Title'>{Title}</h1>
        <p className='date'>{Date}</p>
        <p className='text'>{Text}</p>
        <div className="But" style={{display: Display}}>
            <h1 className='Read'>Read more</h1>
        </div>
        <div className="fle" style={{display: Display ,}}>
            <p className='com'>Comments</p>
            <div className="radius" style={{borderRadius : {Radius}}}>

            <p className='black' >{Comments}</p>
            </div>
        </div>

    </div>
  )
}
 
export default Card
