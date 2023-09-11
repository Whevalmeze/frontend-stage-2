import '../../dist/output.css';
import HeartIcon from "../assets/heart-icon.svg"
import Poster from "../assets/posters/p-1.svg"
import ImdbLogo from "../assets/imdb-logo.svg"
import RtLogo from "../assets/tomato.svg"

function Card() {
    const spanText = "text-sm text-gray-100";
    const flexclass = "flex text-xs";
    return ( 
        <div className='w-grid max-w-[15.625rem] relative'>
            <div className='w-grid'>
                <div className='absolute top-[10%] flex justify-between min-w-full'>
                    <div className='bg-gray-100'>TV Series</div>
                    <div><img src={HeartIcon} alt="" /></div>
                </div>
                <img src={Poster} alt="" />
                <span className={spanText}>USA, 2016-current</span>
                <h3 className='font-bold text-3xl'>Stranger Things</h3>
                <div className={flexclass + " gap-x-5 justify-between"}>
                    <div className={flexclass + " gap-x-2.5"}>
                        <img src={ImdbLogo} alt="imdb logo" />
                        <p>86.0 / 100</p>
                    </div>
                    <div className={flexclass + " gap-x-2.5"}>
                        <img src={RtLogo} alt="rotten tomato logo" />
                        <p>97%</p>
                    </div>
                </div>
                <p className={spanText}>
                    {"Action" + ", " + "Adventurous" + ", " + "Horror"}
                </p>
            </div>
        </div>
     );
}

export default Card;