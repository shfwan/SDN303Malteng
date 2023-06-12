import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

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
            backgroundColor: ['#77DECC','#F8897E','#49C2FF'],
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

    let total = [99,10,1]

    return (
            <section className="flex flex-col justify-evenly items-center h-screen " style={{backgroundColor: '#F0FBFD'}}>
                <div className="flex">
                    <div className="grid gap-10 grid-cols-2 items-center">
                        <div style={{scale:'100%'}}>
                            <Doughnut 
                            data={data}
                            options={options}
                            ></Doughnut>
                        </div>
                        <div className="grid gap-8 grid-rows-4">
                            <div className="flex flex-row">
                                <span style={{backgroundColor: '#77DECC', marginRight: '15px', width: '30px', height: '30px', borderRadius:'50%'}}></span>
                                <h4> {total[0]} Siswa</h4>
                            </div>
                            <div className="flex flex-row">
                                <span style={{backgroundColor: '#F8897E', marginRight: '15px', width: '30px', height: '30px', borderRadius:'50%'}}></span>
                                <h4> {total[1]} Guru</h4>
                            </div>
                            <div className="flex flex-row">
                                <span style={{backgroundColor: '#49C2FF', marginRight: '15px', width: '30px', height: '30px', borderRadius:'50%'}}></span>
                                <h4> {total[2]} Operator</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-x-10 grid-cols-3">
                    {/* kotak visi misi */}
                    <div className="flex flex-col" >
                        <div className="flex float-left text-left relative" style={{padding: '5px', width: '300px', backgroundColor:'#0B698B', color: '#FFFFFF', borderRadius: '10px 10px 0 0'}}>
                            <h3>Visi</h3>
                        </div>
                        <div className="flex float-left text-left relative" style={{padding: '15px', width: '300px', height:'180px' , backgroundColor:'#0099B3', color: '#FFFFFF', borderRadius: '0 0 10px 10px'}}>
                            <h3>Mewujudkan manusia yang segar bugar, benar-benar, pintar, akur, dan jujur berdasarkan IMTAQ dan IPTEK</h3>
                        </div>
                    </div>
                    <div className="flex flex-col" >
                        <div className="flex float-left text-left relative" style={{padding: '5px', width: '300px', backgroundColor:'#0B698B', color: '#FFFFFF', borderRadius: '10px 10px 0 0'}}>
                            <h3>Misi</h3>
                        </div>
                        <div className="flex float-left text-left relative" style={{padding: '15px', width: '300px', height:'180px' , backgroundColor:'#0099B3', color: '#FFFFFF', borderRadius: '0 0 10px 10px'}}>
                            <ol>
                                <li>Meningkatkan Pemahaman dan pengalaman ajaran agama</li>
                                <li>Membentuk kepribadian yang tangguh berdasarkan imtaq dan iptek</li>
                                <li>Menciptakan iklim dan lingkungan  <u className="cursor-pointer">selengkapnya...</u></li>
                            </ol>
                        </div>
                    </div>
                    <div className="flex flex-col" >
                        <div className="flex float-left text-left relative" style={{padding: '5px', width: '300px', backgroundColor:'#0B698B', color: '#FFFFFF', borderRadius: '10px 10px 0 0'}}>
                            <h3>Tujuan</h3>
                        </div>
                        <div className="flex float-left text-left relative" style={{padding: '15px', width: '300px', height:'180px' , backgroundColor:'#0099B3', color: '#FFFFFF', borderRadius: '0 0 10px 10px'}}>
                            <h3>Harapan kami untuk mewujudkan sekolah yang berkualitas baik professional kerja maupun peningkatan mutu dan terwujud melalui bantuan dan perhatian dari semua pihak. </h3>
                        </div>
                    </div>
                </div>
            </section>
    )

}

export default Profil