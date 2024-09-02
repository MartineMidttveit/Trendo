function Header() {
    return (
      <header>
        <div className="bg-customOrange flex items-center justify-center py-6 text-primary">
            <div className="flex gap-2 text-lg">
               <p>Unique offers as a member.</p> 
               <a href="#" className="border-b border-primary font-medium">Join the club.</a>
            </div>
        </div>

        <div className="flex justify-between items-center wrapper py-6 2xl:text-lg text-primary">
            <h1 className="font-bold 2xl:text-4xl w-2/5 flex items-start">Trendo</h1>
            
            <div className="w-1/5 border-b-secondary text-secondary">
                <div className="flex items-center justify-between px-4 py-2">
                    <input
                        type="text"
                        placeholder="Search through 11.345 products..."
                        className="focus:outline-none w-full"
                        />

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>

            <div className="w-2/5 flex justify-end items-center">
                <p>Home</p>
                <p className="px-8">Contact</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </div>
        </div>
      </header>
    );
  }
  
  export default Header;