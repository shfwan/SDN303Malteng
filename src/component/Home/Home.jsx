import Background from '/src/assets/background.jpg'
import iconSd from './../../assets/sd.png'
import './Home.css'

const Home = () => {
    return (
<<<<<<< HEAD
        <section 
            style={{backgroundImage: `url(${Background})`}}>
                {/* Container card */}
            <div className="container-card">
                <div className='corner-card'>
                    <div className='column-card'>
                        {/* Column 1 */}
                        <img src={iconSd} alt="icon " width="300px" height="300px" />
                        {/* Column 2 */}
                        <div className='container-block'>
                            <h5>SDN 303 Maluku Tengah</h5>
                            <h5>Sekolah ini berdiri dan beraktivitas pada Oktober 2011</h5>
                            <h5>sampai sekarang (12 tahun).</h5>
                            {/* PPDB btn */}
                            <div className='ppdb-btn' style={{cursor:'pointer'}}>
                                <a href="#"style={{marginRight:'9px'}}>PPDB</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                </svg>  
=======
        <div style={{display: 'flex'}}>
            <section 
                style={{backgroundImage: `url(${Background})`}}>
                    {/* Container card */}
                <div className="container-card">
                    <div className='corner-card'>
                        <div className='column-card'>
                            {/* Column 1 */}
                            <img src={iconSd} alt="icon " width="300px" height="300px" />
                            {/* Column 2 */}
                            <div className='container-block'>
                                <h1>SDN 303 Maluku Tengah</h1>
                                <h5>Sekolah ini berdiri dan beraktivitas pada Oktober 2011</h5>
                                <h5>sampai sekarang (12 tahun).</h5>
                                {/* PPDB btn */}
                                <div className='ppdb-btn' style={{cursor:'pointer'}}>
                                    <a href="#"style={{marginRight:'9px'}}>PPDB</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>  
                                </div>
>>>>>>> a8032cb200ff6d162b405bd4f1cf7985d2ba00d1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home