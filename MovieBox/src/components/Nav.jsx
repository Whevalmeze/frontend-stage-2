import '../../dist/output.css';
import Logo from '../assets/Logo.svg'
import Menu from '../assets/Menu.svg'
import SearchBar from './SearchBar'

export default function Nav() {
    const wrapperClass = 'container mx-auto px-4 py-4 items-center justify-between flex';
    const buttonClass = 'text-white';
    return (
        <div className={wrapperClass}>
            <img src={Logo} />
            <SearchBar/>
            <div className='flex px-4 gap-x-4'>
                <button className={buttonClass}>Sign in</button>
                <div className='flex px-2 py-2 bg-rose-700 mw-9 h-9 rounded-full'>
                    <img src={Menu} alt="" />
                </div>
            </div>
        </div>
    );
}