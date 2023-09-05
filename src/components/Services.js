import ServicesItem from "./ServiceItem"

function Services(props){
    return (
        <div className="section bg-dark text-light">
            <div className="container">
             <h1> Services </h1>
             <div className="row">
             <ServicesItem 
                judul="Desain"
                warna="merah"
                deskripsi="is simply dummy text of the printing and typesetting industry."
             />
             <ServicesItem 
                judul="Video Editing"
                warna="hijau"
                deskripsi="is simply dummy text of the printing and typesetting industry."
             />
             <ServicesItem 
                judul="Web Development"
                warna="kuning"
                deskripsi="is simply dummy text of the printing and typesetting industry."
             />
             <ServicesItem 
                judul="3D Desain"
                warna="biru"
                deskripsi="is simply dummy text of the printing and typesetting industry."
             />
             </div>
        </div>
    </div>
    )
}
export default Services