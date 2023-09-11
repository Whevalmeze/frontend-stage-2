import '../../dist/output.css';

function SearchBar() {
    return ( 
        <>
            <form>
                <input className='rounded-md px-[10px] py-[6px] w-[525px] border-white border-2' type="search" name="searchbar" id="searchbar" placeholder='What do you want to watch?'/>
            </form>
        </>
     );
}

export default SearchBar;