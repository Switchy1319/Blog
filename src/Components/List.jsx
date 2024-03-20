import React from 'react'

const List = ({Width , Height , Display , Img , Tag}) => {
  return (
    <div className='List' style={{width : Width , height :Height}}>
      <div className="tavi">
        <h1 className='tag'>{Tag}</h1>
      </div>
      <div className="chamonatvali" style={{display : Display}}>
        <div className="info">
            <div className="ro">
                <div>
                    <img src="./srcc/work.jpg" className='i' alt="" />
                </div>
                <div>
                    <h1 className='txt'>Lorem</h1>
                    <p className='p'>sed mattis nunc</p>
                </div>
            </div>
            <div className="ro">
                <div>
                    <img src="./srcc/gondol.jpg" className='i' alt="" />
                </div>
                <div>
                    <h1 className='txt'>Imsum</h1>
                    <p className='p'>Praes tinc sed</p>
                </div>
            </div>
            <div className="ro">
                <div>
                    <img src="./srcc/skies.jpg" className='i' alt="" />
                </div>
                <div>
                    <h1 className='txt'>Dorum</h1>
                    <p className='p'>Ultricies congue</p>
                </div>
            </div>
            <div className="ro">
                <div>
                    <img src="./srcc/rock.jpg" className='i' alt="" />
                </div>
                <div>
                    <h1 className='txt'>Migsum</h1>
                    <p className='p'>Lorem ipsum dipsum</p>
                </div>
            </div>
        </div>
      </div>
      <div className="chamonatval" style={{display : Img}}>
            <h1 className='sh'>Travel</h1>
            <h1 className='t'>newyork</h1>
            <h1 className='t'>London</h1>
            <h1 className='t'>Ikea</h1>
            <h1 className='t'>Norway</h1>
            <h1 className='t'>Diy</h1>
            <h1 className='t'>Ideas</h1>

      </div>
      <div className="chamonatval" style={{display : Img}}>
            <h1 className='t'>Baby</h1>
            <h1 className='t'>Family</h1>
            <h1 className='t'>News</h1>
            <h1 className='t'>Clothing</h1>
            <h1 className='t'>Shopping</h1>
            <h1 className='t'>Sports</h1>

      </div>
      <div className="chamonatval" style={{display : Img}}>

            <h1 className='t'>Games</h1>


      </div>
    </div>
  )
}

export default List
