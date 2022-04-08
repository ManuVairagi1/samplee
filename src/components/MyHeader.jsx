import React from 'react'
import '../styles/myheader.css';

export default function MyHeader() {
  return (
    <>
      <header>
          <a href="" className='logo'>
          <img
            src="https://orinovait.com/wp-content/uploads/2021/02/orinovait-sticky-logo.png"
            alt=""
          />
          </a>

          <input type="checkbox" id='menu-bar'/>
          <label htmlFor="menu-bar">Menu</label>

          <nav className='navbar'>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Pages +</a>
                    <ul>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Services +</a>
                          <ul>
                              <li><a href="#">html</a></li>
                              <li><a href="#">css</a></li>
                              {/* <li><a href="#">javascript</a></li> */}
                          </ul>
                        </li>
                    </ul>
                  </li>
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">Contact Us</a></li>
              </ul>
          </nav>
      </header>
    </>
  )
}
