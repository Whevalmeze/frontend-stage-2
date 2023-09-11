import '../../dist/output.css';
import ChevronRight from "../assets/Chevron-right.svg"
import Card from "./Card.jsx"

function Body() {
    const wrapperClass = "container mx-auto min-w-full flex flex-col px-4 py-4 w-full"
    return ( 
        <div className={wrapperClass}>
            <div className='flex max-w-full min-w-full justify-between px-4 py-4'>
                <h2 className='text-4xl font-bold'>Featured Movie</h2>
                <div className='w-fit flex'>
                    <button className='text-rose-700'>See more</button>
                    <img src={ChevronRight} alt="" />
                </div>
            </div>
            <div className='px-4 py-4 grid grid-cols-3 grid-rows-auto'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
     );
}

export default Body;