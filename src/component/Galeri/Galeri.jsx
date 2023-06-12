import f from '../../assets/IMG20230510094413.jpg'

const Galeri = () => {
    return(
        <section className="flex flex-col justify-center items-center h-screen" style={{backgroundColor:'#F0FBFD'}}>
            <div className="w-screen" style={{backgroundColor:'#00BFE0', height:'70vh', borderRadius:'0 0 100px 100px'}}>
                {/* Tittle */}
                <div className="flex flex-col items-center w-screen text-white">

                    <h1>Galeri SDN 303 Malteng</h1>
                </div>
                <div className="grid grid-rows-1 grid-cols-4">
                    <div className="flex flex-row">
                        <img src={f} alt="" />
                        <div className=' absolute' style={{width:'100%', border:'2px solid #000000'}}>
                            <div className='cursor-pointer' style={{backgroundColor:'#006D8F', padding:'10px 20px', opacity:'70%', color:'#FFFFFF', borderRadius: '50px'}}>
                                <h2>View</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Galeri