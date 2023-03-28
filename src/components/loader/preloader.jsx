import { PreloaderImg, Logo } from "../../assets/index"
function Preloader() {
  return (
    <div
        className="flex fixed top-0 left-0 w-full bg-center  h-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${"https://res.cloudinary.com/phantom1245/image/upload/v1679974351/dockii/preloaderImg_kzauqj.png" || PreloaderImg})` }}
    >
        <div className='flex justify-center items-center w-full '>
            <img src={"https://res.cloudinary.com/phantom1245/image/upload/v1679974349/dockii/logo_ntubpc.png" || Logo} alt="preloader image" className='w-[30%]'/>
        </div>
    </div>
  );
}

export default Preloader;