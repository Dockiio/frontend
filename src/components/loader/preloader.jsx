import { PreloaderImg, Logo } from "../../assets/index"
function Preloader() {
  return (
    <div
        className="flex fixed top-0 left-0 w-full bg-center h-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${PreloaderImg})` }}
    >
        <div className='flex justify-center items-center w-full '>
            <img src={Logo} alt="preloader image" className='w-[30%]'/>
        </div>
    </div>
  );
}

export default Preloader;