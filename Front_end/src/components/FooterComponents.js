import React from 'react'

const FooterComponent = () => {
  return (
    <div>
        <footer className='footer'>
            <span>All Right Reserved, <span>Designed by Tushar Khadke</span> &copy; {new Date().getFullYear()}</span>
        </footer>
    </div>
  )
}

export default FooterComponent