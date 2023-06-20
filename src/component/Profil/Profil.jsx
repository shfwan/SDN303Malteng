import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import './Profil.css'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

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
        <body>
            <div className="profil-1">
                <div className="container-stats">
                    <div className="Details-1" style={{ scale: '100%', width:'300px', height:'300px' }}>
                        <Doughnut
                            data={data}
                            options={options}
                        ></Doughnut>
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
            <div className="profil-2">
                <div className="container">
                    <div className="box-profil">
                    <div className="box" >
                    <div className="sub-judul">
                        <h2>Visi</h2>
                    </div>
                    <div className="isi">
                        <h3>Mewujudkan manusia yang segar bugar, benar-benar, pintar, akur, dan jujur berdasarkan IMTAQ dan IPTEK</h3>
                    </div>
                    </div>
                    <div className="box" >
                    <div className="sub-judul">
                        <h2>Misi</h2>
                    </div>
                    <div className="isi">
                        <ol>
                            <li>Meningkatkan Pemahaman dan pengalaman ajaran agama</li>
                            <li>Membentuk kepribadian yang tangguh berdasarkan imtaq dan iptek</li>
                            <li>Menciptakan iklim dan lingkungan  <u className="cursor-pointer">selengkapnya...</u></li>
                        </ol>
                    </div>
                    </div>
                    <div className="box" >
                    <div className="sub-judul">
                        <h2>Tujuan</h2>
                    </div>
                    <div className="isi">
                        <h3>Harapan kami untuk mewujudkan sekolah yang berkualitas baik professional kerja maupun peningkatan mutu dan terwujud melalui bantuan dan perhatian dari semua pihak. </h3>
                    </div>
                    </div>
                    </div>
                </div>
            </div>

        </body>
    )

}

export default Profil