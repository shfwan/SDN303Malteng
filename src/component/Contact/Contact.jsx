import './Contact.css'

const Contact = () => {
    return(
        <section className="flex flex-col justify-center items-center h-screen" style={{backgroundColor:'#F0FBFD'}}>
            {/* Title */}
            <div className="Title">
                <h1>Kontak kami</h1>
                <h3>Silahkan kirimkan kritik dan saran anda</h3>
            </div>
            {/* Icon contacts */}
            <div className="icon-contacts">
                <div className="contact-1">
                    <img className="object-1" src="/src/assets/telp.png" alt="" width='40px' height='40px'/>
                    <h3 className='object-2'>08123344345</h3>
                </div>
                <div className="contact-2">
                    <img className="object-1" src="/src/assets/email.png" alt="" width='40px' height='40px'/>
                    <h3 className='object-2'>sd303@gmail.com</h3>
                </div>
                <div className="contact-3">
                    <img className="object-1" src="/src/assets/pin.png" alt="" width='40px' height='40px'/>
                    <h3 className='object-2'>C23M+PJ5, Seith, Leihitu, <br/> Central Maluku Regency, Maluku</h3>
                </div>
            </div>
            {/* Map */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d970.2417583606509!2d128.03368126548833!3d-3.5959682522790226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1686121496236!5m2!1sen!2sid" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="Pesan">
                <h1>Kirim Pesan</h1>
                <form action="#" method="post">
                    <div className="flex flex-col items-center">
                        <div className="box">
                            <input style={{padding:'5px'}} className="input-1" type="text" name="" placeholder="Nama" id="" />
                            <input style={{padding:'5px'}} className="input-2" type="email" name="" placeholder="email@email.com" id="" />
                        </div>
                        <div className="pesan">
                            <div className="flex items-center justify-center w-screen h-fit">
                                <textarea className="border rounded border-solid border-black" type="text" name="" placeholder="Pesan" id="" />
                            </div>
                            <div className="button-kirim">
                                <input  type="submit" value="Kirim Pesan" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact