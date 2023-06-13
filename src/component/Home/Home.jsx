import './Home.css'


const Home = (prop) => {
    return (
        // <header>
            
        //         {/* Container card */}
        //         <div className="container">
        //             <div className='hero'>
        //                 <div className='hero-box'>
        //                     {/* Column 1 */}
        //                     <img className='lg:w-64 lg:h-64' src={prop.iconSd} alt="icon " />
        //                     {/* Column 2 */}
        //                     <div className='block text-white'>
        //                         <h1 className='font-bold text-lg md:text-2xl'>SDN 303 Maluku Tengah</h1>
        //                         <h5 className='text-sm md:text-lg'>Sekolah ini berdiri dan beraktivitas pada Oktober 2011</h5>
        //                         <h5 className='text-sm md:text-lg'>sampai sekarang (12 tahun).</h5>
        //                         {/* PPDB btn */}
        //                         <div className='flex float-left justify-center items-center border-2 border-r-white rounded-3xl px-3 py-1 my-5 text-sm md:text-base' style={{ cursor: 'pointer' }}>
        //                             <a href="#" style={{ marginRight: '9px' }}>PPDB</a>
        //                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
        //                                 <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        //                             </svg>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
            
        // </header>

    <header>
        <div className="hero">
            <div className="container">
                <div className="box-hero">
                    <div className="box">
                        <h1>
                            Selamat Datang
                        </h1>
                        <h2>
                        SD NEGERI 303 MALUKU TENGAH
                        </h2>
                        <p>Sekolah ini berdiri dan beraktivitas pada <br/> Oktober 2011 sampai sekarang (12 tahun)</p>
                        <button>PPDB</button>
                    </div>
                    <div className="box">
                        <img src='src\assets\school.png' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Home