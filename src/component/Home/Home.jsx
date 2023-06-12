import Background from '/src/assets/background.jpg'


const Home = (prop) => {
    return (
        <div style={{display: 'flex'}}>
            <section 
                className="flex items-center justify-center h-screen bg-center bg-cover"
                style={{backgroundImage: `url(${Background})`}}>
                    {/* Container card */}
                <div className="container w-fit p-4 md:p-8">
                    <div className='rounded-lg bg-white bg-opacity-30 backdrop-blur-sm p-3 md:p-4'>
                        <div className='flex flex-col md:flex-row justify-center items-center'>
                            {/* Column 1 */}
                            <img className='lg:w-64 lg:h-64' src={prop.iconSd} alt="icon " />
                            {/* Column 2 */}
                            <div className='block text-white'>
                                <h1 className='font-bold text-lg md:text-2xl'>SDN 303 Maluku Tengah</h1>
                                <h5 className='text-sm md:text-lg'>Sekolah ini berdiri dan beraktivitas pada Oktober 2011</h5>
                                <h5 className='text-sm md:text-lg'>sampai sekarang (12 tahun).</h5>
                                {/* PPDB btn */}
                                <div className='flex float-left justify-center items-center border-2 border-r-white rounded-3xl px-3 py-1 my-5 text-sm md:text-base' style={{cursor:'pointer'}}>
                                    <a href="#"style={{marginRight:'9px'}}>PPDB</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                asdasd
            </section>
        </div>
    )
}

export default Home