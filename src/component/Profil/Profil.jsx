import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import './Profil.css'
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

import iconKelas from './../../assets/college class-rafiki.svg'

const Profil = () => {
    const data = {
        labels: ['Siswa', 'Guru', 'Operator'],
        datasets: [{
            label: 'Total',
            data: [99, 10, 1],
            backgroundColor: ['#77DECC', '#F8897E', '#49C2FF'],
            hoverOffset: 5,
            borderWidth: 5,
            borderRadius: 0,
            borderColor: '#F0FBFD',
            rotation: 90
        }],
    }
    const options = {
        responesive: true,
        borderRadius: '2px',
        plugins: {
            legend: {
                display: false
            }
        }
    }
    let total = [99, 10, 1]
    return (
        <section className="profil-section">
            <div className="container-kelas">
                <div className="title-profil">
                    <h1>Total Keseluruhan</h1>
                </div>
                <div className="profil-1">
                    <div className="container-stats">
                        <div className="Details-1">
                            <Doughnut
                                data={data}
                                options={options}
                            />
                        </div>
                        <div className="Details-2">
                            <div className="box-1">
                            <div className="object-1"style={{ backgroundColor: '#77DECC', width: '30px', height: '30px', borderRadius: '15px' }}></div>
                                <h4 className="object-2"> {total[0]} Siswa</h4>
                            </div>
                            <div className="box-1">
                            <div className="object-1" style={{ backgroundColor: '#F8897E', width: '30px', height: '30px', borderRadius: '50%' }}></div>
                                <h4 className="object-2"> {total[1]} Guru</h4>
                            </div>
                            <div className="box-1">
                            <div className="object-1" style={{ backgroundColor: '#49C2FF', width: '30px', height: '30px', borderRadius: '50%' }}></div>
                                <h4 className="object-2"> {total[2]} Operator</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="iconProfil" src={iconKelas} alt=""/>
            </div>
            <div className="profil-2">
                <div className="container-box">
                    <div className="box-profil">
                        <div className="box" >
                            <div className="sub-judul">
                                <h2>Visi</h2>
                            </div>
                            <div className="isi">
                                <h3>Mewujudkan manusia yang segar bugar, benar-benar, pintar, akur, dan jujur berdasarkan IMTAQ dan IPTEK</h3>
                            </div>
                        </div>
                        <div className="box">
                            <div className="sub-judul">
                                <h2>Tujuan</h2>
                            </div>
                            <div className="isi">
                                <h3>Harapan kami untuk mewujudkan sekolah yang berkualitas baik professional kerja maupun peningkatan mutu dan terwujud melalui bantuan dan perhatian dari semua pihak. </h3>
                            </div>
                        </div>
                        <div className="box">
                            <div className="sub-judul" id="sub-judul">
                                <h2>Misi</h2>
                            </div>
                            <div className="isi" id="isi-detail">
                                <ol>
                                    <li>Meningkatkan Pemahaman dan pengalaman ajaran agama</li>
                                    <li>Membentuk kepribadian yang tangguh berdasarkan imtaq dan iptek</li>
                                    <li>Menciptakan iklim dan lingkungan pembelajaran yang kondusif dalam upaya meningkatkan mutu pembelajaran</li>
                                    <li>Mengembangkan bakat dan minat siswa</li>
                                    <li>Meningkatkan sarana dan prasarana pendidikan SD Negeri 303 Maluku Tengah</li>
                                    <li>Meningkatkan 3 kemampuan dasar (Baca Tulis Hitung) siswa</li>
                                    <li>Membina kerja sama yang baik dengan stackholder</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Profil