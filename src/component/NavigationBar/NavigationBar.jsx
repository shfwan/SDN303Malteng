import './NavigationBar.css'

const NavigationBar = () => {
    return(
        <div className="nav">
                <span>
                    <img src="" alt="" />
                    <a className='title' href='#' style={{color: 'black'}}>SDN 303 Maluku Tengah</a>
                </span>
                <ul>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>Profil</li></a>
                    <a href=""><li>Galeri</li></a>
                    <a href=""><li>Contact</li></a>
                </ul>
        </div>
    )
}

export default NavigationBar