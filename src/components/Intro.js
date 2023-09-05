import ButtonSaya from "./ButtonSaya"
function Intro(){
    return (
        <div className="section text-light intro">
            <div className="container text-center">
                <img
                    className="avatar"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" />
                <h1> Muhammad Ikhwan </h1>
                <p>Mahasiswa</p>
                <a target="_blank" href="#" className="social-media">
                <i class="bi bi-github"></i>
                <a target="_blank" href="#" className="social-media"></a>
                <i class="bi bi-facebook"></i>
                <a target="_blank" href="https://www.instagram.com/ikhwan.muhammadd/?next=%2F" className="social-media"></a>
                <i class="bi bi-instagram"></i>
                </a>
                <div className="row">
                    <div className="col">
                    <ButtonSaya 
                    text="Hire Me"
                    link="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                    warna="warning"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Intro