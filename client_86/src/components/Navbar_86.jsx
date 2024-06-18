import { useState, useRef } from 'react';
import Wrapper from '../assets/wrappers/Navbar_86';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
import HeaderMenu from '../ui/HeaderMenu';

const Navbar_86 = () => {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);
  const mobileBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleMobileBtn = () => {
    mobileMenuRef.current.classList.toggle('hidden');
    setIsMobileMenuHidden(!isMobileMenuHidden);
  };
  return (
    <Wrapper>
      <HeaderMenu />
      <header className='header'>
        <div
          className='header-row container'
          role='navigation'
          aria-label='Main'
        >
          <div className='header-left'>
            <div className='logo'>
              <h1>209410686 許琦涓</h1>
            </div>
          </div>
          <div className='header-right'>
            <ul className='main-menu'>
              <li className='menu-item'>
                <Link to='/' className='active'>
                  Home
                </Link>
              </li>

              <li className='menu-item dropdown'>
                <Link to='#'>Class Demo +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link to='./demoGetBlog_86'>demo : SupaGetBlog_86</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='#'>mid1</Link>
                    </li>
                    <li className='menu-item'>
                      <Link to='#'>mid2</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item'>
                <Link to='./CRUD'>CRUD Application</Link>
              </li>
              <li className='menu-item'>
                <Link to='./Other'>Other</Link>
              </li>
              <li className='menu-item mega-menu'>
                <Link to='#'>Mega menu +</Link>
                <div className='mega-menu-wrapper slideInUp'>
                  <div className='mega-menu-col'>
                    <h5>Menu block 1</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 2</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 3</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 4</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className='menu-item'>
                <Link to='./login'>Login</Link>
              </li>
            </ul>
            <Link
              to='#'
              id='hamburger-icon'
              className='mobile-toggler'
              aria-label='Mobile Menu'
              ref={mobileBtnRef}
              onClick={handleMobileBtn}
            >
              {''}
              {isMobileMenuHidden ? (
                <FaBars size={16} />
              ) : (
                <FaXmark size={16} />
              )}
            </Link>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Navbar_86;
