export default function Contact() {
    return (
        <main className="text-primary font-barlow relative">
            <div className=" bg-customGrey shadow-lg">

                <div className="2xl:w-1/3 mx-auto px-10 pt-12 pb-20">
                
                <div className="pt-4 pb-8">
                    <h1 className="font-bold text-6xl mb-5">Contact</h1>
                    <p className="font-medium text-xl">Any questions or remarks? Write us a message.</p>
                </div>
                    
                <form action="" className="flex items-center flex-col text-left">

                    <div className="flex justify-center w-full gap-5">
                        <div className="flex flex-col w-full">
                            <label for="email">E-mail:</label>
                            <input type="text" id="email" className="border border-secondary py-2 pl-3 mt-4"/>
                        </div>
                        
                        <div className="flex flex-col w-full">
                            <label for="name">Name:</label>
                            <input type="text" id="name" className="border border-secondary py-2 pl-3 mt-4"/>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mx-auto mt-5">
                        <label for="message">Your message:</label>
                        <textarea name="message" id="message" className="h-[14rem] border border-secondary resize-none mt-4">

                    </textarea>
                    </div>
                    

                    </form>
                </div>
            </div>
            
            <div className="bg-customGreen">
                <div className="h-96">
                    <span className="min-h-[20rem] min-w-[20rem] rounded-full bg-white">
                        HEI
                    </span>
                </div>
            </div>
        </main>
)
}