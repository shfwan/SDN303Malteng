const Contact = () => {
    return(
        <section className="flex flex-col justify-center items-center h-screen" style={{backgroundColor:'#F0FBFD'}}>
            {/* Title */}
            <div className="text-center">
                <h1>Kontak kami</h1>
                <h3>Silahkan kirimkan kritik dan saran anda</h3>
            </div>
            {/* Icon contacts */}
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center">
                    <img className="m-5" src="/src/assets/telp.png" alt="" width='40px' height='40px'/>
                    <h3>08123344345</h3>
                </div>
                <div className="flex flex-row items-center">
                    <img className="m-5" src="/src/assets/email.png" alt="" width='40px' height='40px'/>
                    <h3>sd303@gmail.com</h3>
                </div>
                <div className="flex flex-row items-center">
                    <img className="m-5" src="/src/assets/pin.png" alt="" width='40px' height='40px'/>
                    <h3 style={{width:'14.5em'}}>C23M+PJ5, Seith, Leihitu, Central Maluku Regency, Maluku</h3>
                </div>
            </div>
            {/* Map */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d970.2417583606509!2d128.03368126548833!3d-3.5959682522790226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1686121496236!5m2!1sen!2sid" width="600" height="450" style={{borderRadius:'10px'}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="mt-5 flex flex-col items-center">
                <h1 className="mb-6">Kirim Pesan</h1>
                <form action="#" method="post">
                    <div className="flex flex-col items-center">
                        <div className="grid grid-cols-2 gap-x-10 grid-rows-2">
                            <input style={{padding:'5px', fontSize:'12px'}} className="border rounded border-solid border-black" type="text" name="" placeholder="Nama" id="" />
                            <input style={{padding:'5px', fontSize:'12px'}} className="border rounded border-solid border-black" type="email" name="" placeholder="email@email.com" id="" />
                        </div>
                        <div className="grid gap-y-5 ">
                            <div className="flex items-center justify-center w-screen h-fit">
                                <textarea style={{width:'350px', height:'100px', padding:'5px', fontSize:'12px'}} className="border rounded border-solid border-black" type="text" name="" placeholder="Pesan" id="" />
                            </div>
                            <div className="flex items-center justify-center w-screen h-fit">
                                <input style={{color:'#ffffff', backgroundColor:'#0B698B', width:'200px', padding:'5px 16px 5px 16px'}} type="submit" value="Kirim Pesan" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact