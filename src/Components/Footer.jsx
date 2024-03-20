import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="flex">
            <div className="pre">
                <h1 className='prev'>Previous</h1>
            </div>
            <div className="ne">
                <h1 className='nex'>Next</h1>
            </div>

        </div>
        <div className="flex">
            <p className='bolo'>Powered by</p>
            <p className='bolos'> w3.css</p>
        </div>
    </footer>
  )
}

export default Footer
