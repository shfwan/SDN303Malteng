import './Contact.css'
import iconContact from './../../assets/Contact us-bro.svg'

const Contact = () => {
    return(
        <section className="contact-section" style={{backgroundColor:'#F0FBFD'}}>
            {/* Title */}
            <div className="container-contact">
                {/* Map */}
                <div className="container-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d970.2417583606509!2d128.03368126548833!3d-3.5959682522790226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1686121496236!5m2!1sen!2sid" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="icon-contacts">
                        <div className="contact">
                            <img className="object-1" src="/src/assets/telp.png" alt="" width='40px' height='40px'/>
                            <h3 className='object-2'>08123344345</h3>
                        </div>
                        <div className="contact">
                            <img className="object-1" src="/src/assets/email.png" alt="" width='40px' height='40px'/>
                            <h3 className='object-2'>sd303@gmail.com</h3>
                        </div>
                        <div className="contact">
                            <img className="object-1" src="/src/assets/pin.png" alt="" width='40px' height='40px'/>
                            <h3 className='object-2'>C23M+PJ5, Seith, Leihitu, <br/> Central Maluku Regency, Maluku</h3>
                        </div>
                    </div>
                </div>
                <div className="container-information">
                    <div className="Title">
                        <h1 style={{fontSize:'18pt', color:'#0b698b'}}>Kontak kami</h1>
                    </div>
                    {/* Icon contacts */}
                    <img src={iconContact} alt=""  style={{scale:'100%'}}/>
                    <div className="Pesan">
                        <h3 style={{fontSize:'10pt', color:'gray', fontWeight:'normal'}}>Silahkan kirimkan kritik dan saran anda</h3>
                        {/* <h1>Kirim Pesan</h1> */}
                        <form method="post">
                            <div className="container-input">
                                <input className='input-contact' type="text" name="" placeholder="Nama" id="" />
                                <input className='input-contact' type="email" name="" placeholder="email@email.com" id="" />
                                <textarea className="border rounded border-solid border-black" type="text" name="" placeholder="Pesan" id="" />
                                <input className='btn-submit'  type="submit" value="Kirim Pesan" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact