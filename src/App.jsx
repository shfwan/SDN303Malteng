// import './App.css'
import Contact from './component/Contact/Contact'
import Galeri from './component/Galeri/Galeri'
import Home from './component/Home/Home'
import Profil from './component/Profil/Profil'

import iconTutwuri from './assets/tut.png'
import {BsFillEnvelopeAtFill, BsGeoAlt, BsHouse, BsImages, BsInfoCircle, BsInstagram, BsList, BsPersonLinesFill, BsTelephoneFill, BsXLg} from 'react-icons/bs'

import { Link } from 'react-scroll'
import './App.css'
import { useState } from 'react'
import User from './component/User/User'

import shfwan from './assets/user/shfwan.jpg'
import ein from './assets/user/ein.jpg'
import endang from './assets/user/endang.jpg'
import ali from './assets/user/ali.jpg'
import hamsin from './assets/user/hamsin.jpg'
import asril from './assets/user/asril.jpg'
import rika from './assets/user/rika.jpg'

function App() {
  const menuItem = [
    {
      id: 1,
      title: 'Home',
      icon: <BsHouse/>,
      component: <Home/>
    },
    {
      id: 2,
      title: 'Profil',
      icon: <BsInfoCircle/>,
      component:
        <div className="bg-item">
          <Profil/>
        </div>
    },
    {
      id: 3,
      title: 'Galeri',
      icon: <BsImages/>,
      component: <Galeri/>
    },
    {
      id: 4,
      title: 'Contact',
      icon: <BsPersonLinesFill/>,
      component: 
        <div className="bg-item">
          <Contact/>
        </div>
    },
    {
      id: 'btnClose',
      icon: <div className="btnClose"><BsXLg/></div>,
    },
  ]
  
  const [ navbar, setNavbar ] = useState(false)
  const [ dropNavBar, setDropNavBar ] = useState(false)

  window.addEventListener('scroll', () => { (window.scrollY >= 5) ? setNavbar(true) : setNavbar(false) } )
  
  const dropDown = () => {
    document.getElementById('dropDown').addEventListener('click', () => {
      setDropNavBar(true)
    })
  }

  const btnList = () => {
    menuItem.map((menu) => {
      document.getElementById(menu.id).addEventListener('click', () => {
        setDropNavBar(false)
      })
    })
  }

  const btnClose = () => {
    document.getElementById('btnClose').addEventListener('click', () => {
      setDropNavBar(false)
    })
  }

  const userProfil = [
    {
      nim: 200101139,
      nama: 'Shafwan Masyukur Nurlette',
      foto: shfwan,
      social: 'https://www.instagram.com/shafwan____/',
    },
    {
      nim: 200101118,
      nama: 'Erlin Indrayani Karim',
      foto: ein,
      social: 'https://www.instagram.com/erlin_karim/',
    },
    {
      nim: 200101180,
      nama: 'Endang Tuanany',
      foto: endang,
      social: 'https://www.facebook.com/profile.php?id=100068288614654',
    },
    {
      nim: 200101123,
      nama: 'Hamsin Mony',
      foto: hamsin,
      social: 'https://www.instagram.com/hamsinmony367/',
    },
    {
      nim: 200101115,
      nama: 'Asril Khalid',
      foto: asril,
      social: 'https://www.instagram.com/asril_khalid/',
    },
    {
      nim: 200101112,
      nama: 'Ali Putuhena',
      foto: ali,
      social: 'https://www.instagram.com/ali.putuhena/',
    },
    {
      nim: 200101136,
      nama: 'Rika Jahidin',
      foto: rika,
      social: 'https://www.instagram.com/rhikajahidin/',
    },
  ]

  const btnKelompok = () => {
    if(document.getElementById('user-profil').style.display === 'none') {
      document.getElementById('kelompok').addEventListener('click', () => {
        document.getElementById('kelompok').style.fontWeight = 'bold'
        document.getElementById('user-profil').style.display = 'flex'
        window.scrollTo(0, 10000)
      }) 
    } else {
      document.getElementById('kelompok').addEventListener('click', () => {
        document.getElementById('kelompok').style.fontWeight = 'normal'
        document.getElementById('user-profil').style.display = 'none'
      }) 
    }
  }

  return (
    <>
    <div className='app'>
      <div className={navbar ? 'nav-active' : 'nav'} id='navigation'>
        <div className={dropNavBar ? 'dropDownNavBar-active' : 'dropDownNavBar'}>
          <div className='span-title' id='dropDown' onClick={dropDown}>
            <div id="BsList">
              <BsList/>
            </div>
            <div className='title-inline'>
                <img id='iconTut' src={iconTutwuri} alt="icon-tutuwuri" width={40} style={{marginRight: '10px'}}/>
                <a className='title'>SDN 303 Maluku Tengah</a>
            </div>
          </div>
            <ul>
              {menuItem.map((menu) => (
                // eslint-disable-next-line react/jsx-key
                <li className={menu.title} id={menu.id} onClick={btnClose}>
                  <Link className='link-item' id={menu.id} onClick={btnList} to={menu.title} smooth={true} offset={1} duration={1000}>
                    <div className="nav-item">
                      {menu.icon}
                      {menu.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </div>
      {menuItem.map((menu) => (
        // eslint-disable-next-line react/jsx-key
        <div className="component" id={menu.title}>
          {menu.component}
        </div>
      ))}
      <footer>
          <div className='container-footer'>
            <div className='row-card-detail'>
              {/* Logo */}
              <div className='col-1'>
                <img src='src\assets\tutwuri.png' alt="" width='100px' height='fit-content' />
                <div>
                  <h2>SD NEGERI 303 MALUKU TENGAH</h2>
                </div>
              </div>
              {/* layanan publik */}
              <div className='col-2'>
                <h3>LAYANAN PUBLIK</h3>
                <ul className='list-1'>
                  <li><a>Pendaftaran Siswa Baru</a></li>
                  <li><a>Pembayaran Komite</a></li>
                </ul>
              </div>
              {/* layanan publik */}
              <div className='col-4'>
                <h3>KANTOR LAYANAN</h3>
                <ul className='list-3'>
                  <li>
                    <BsGeoAlt className='BsGeoAlt'/>
                    <a>Desa seith, Kec. Leihitu, kab.Maluku Tengah</a>
                  </li>
                  <li>
                  <BsTelephoneFill/>
                    <a>090000001</a>
                  </li>
                  <li>
                  <BsFillEnvelopeAtFill/>
                    <a>sdn303@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className='label-copyright' style={{ backgroundColor: '#0B698B', color: 'white' }}>
            <label style={{ textAlign: 'center' }} >Copyright &#169; By <span id='kelompok' onClick={btnKelompok} style={{cursor:'pointer'}}>Kelompok 6</span></label>
          </div>
      </footer>
      <div className='user-profil' id='user-profil'>
        {userProfil.map((item) => (
        // eslint-disable-next-line react/jsx-key, react/jsx-no-target-blank
          <a href={item.social}  target="_blank"><User idUser={item.nim} image={item.foto} nama={item.nama} nim={item.nim}/></a>
        ))}
      </div>
    </div>
    </>
  )
}

export default App