import RevealOnScroll from "../Ui/RevealOnScroll";

export const Contact = () => {
    return (
        <section 
            id="contact" 
            className="min-h-screen font-mono flex items-center justify-center py-20" 
        >   
            <RevealOnScroll>
            <div className="px-5 w-150 ">
                <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent text-center">
                    Contact me
                </h2>
                <form  action="https://formsubmit.co/pandelisan28@outlook.com" method="POST" className="space-y-6 ">
                    <div className="relative">
                        <input 
                            type="text" 
                            id="name"
                            name="name" 
                            placeholder="Name.." 
                            required 
                            className="w-full bg-[#1E1E1E] border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#1E1E1E]" 
                        />
                    </div>
                    <div className="relative">
                        <input 
                            type="email" 
                            id="email"
                            name="email" 
                            placeholder="example@outlook.com" 
                            required 
                            className="w-full bg-[#1E1E1E] border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#1E1E1E]" 
                        />
                    </div>
                    <div className="relative">
                        <textarea 
                            id="message"
                            name="message" 
                            rows={6}
                            placeholder="Type your message.." 
                            required 
                            className="w-full bg-[#1E1E1E] border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#1E1E1E]" 
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-gradient-to-r justify-center cursor-pointer from-teal-500 to-indigo-600 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] py-3"
                    >
                        Submit
                    </button>
                </form>
            </div>
            </RevealOnScroll>
        </section>
    );
};