import React from 'react';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
  <div>
    <footer class="bg-black text-white display-flex justify-content-center">
      <p className='m-t-n'>
        &copy; Tyler Lowe Development
      </p>
      <a href="mailto:tyler.a.lowe@gmail.com">Tyler.a.Lowe@gmail.com</a>
    </footer>
    
  </div> 
  )
}

export default Footer;
