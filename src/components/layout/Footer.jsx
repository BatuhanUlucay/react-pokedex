import React from 'react'

const footerYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className='footer p-2 bg-base-300 footer-center'>
        <div>
             <p>Copyright &copy; {footerYear} All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer