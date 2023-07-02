/* eslint-disable react/prop-types */
import './User.css'
const User = (props) => {
    return(
        <section className="user-section" >
            <div className="profil-user">
                <div className="foto-setting">
                    <img className="foto" id={props.idUser} src={props.image} alt="" />
                </div>
                <label className="nama">{props.nama}</label>
                <label className="nim">{props.nim}</label>
            </div>
        </section>
    )
}

export default User