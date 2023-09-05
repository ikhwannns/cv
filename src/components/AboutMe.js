import ButtonSaya from "./ButtonSaya"
function AboutMe(){
    return (
        <div className="section">
            <div className="row align-items-center">
                <div className="col-6 text-center">
                    <img
                        className="avatar"
                        src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" />
                </div>
                <div className="col-6 ">
                    <h1> About Me </h1>
                    <p>
                        Nama saya Muhammad Ikhwan
                    </p>
                    <p>
                        umurku 21, lahir 22 mei 2002 di Makassar, Kuliah di Universitas Fajar Makassar
                    </p>
                    <p>
                        Program Studi Teknik Elektro Konsentrasi Informatika angkatan 2020 dan nim saya 2020221026 
                    </p>
                    <ButtonSaya 
                        text="Download Sv"
                        warna="primary" 
                        link="https://getbootstrap.com/docs/5.3/components/buttons/#base-class"/>
                </div>
            </div>
        </div>
    )
}
export default AboutMe