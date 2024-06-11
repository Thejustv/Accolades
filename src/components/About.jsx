const About=()=>{
    return(
        <div className="min-h-lvh bg-black text-white pt-5">
            <div className="text-center ml-20 mr-20">
            <h1 className="font-bold text-5xl">Our Service</h1>
            <p className="text-center mt-2">A strong, consistent brand, built up over time, is the best guarantee we can assure you. Self, definition, transparency, authenticity and accountability are our keys to success. Convey your brand values and make your company more relatable, and translate into more leads, conversions, and sales.</p>
            </div>
            <div className="mt-20 ml-20 flex gap-10 flex-wrap">
                <div className="h-64 w-64 bg-black hover:bg-gradient-to-r from-[#f81f01] to-[#ee076e] rounded-lg flex justify-center content-center flex-col flex-wrap">
                    <img src="../src/assets/Digital-Marketing.png" alt="icon" className="h-[30%] w-20 mb-2 ml-2"/>
                    <h1 className="ml-2 text-2xl font-bold mb-3">Digital Marketing</h1>
                    <p className="ml-2 text-sm">Get ROI through digital marketing services, drive successful online marketing campaigns with our digital marketing services.</p>
                </div>
                <div className="h-64 w-64 bg-black hover:bg-gradient-to-r from-[#f81f01] to-[#ee076e] rounded-lg flex justify-center flex-col">
                    <img src="../src/assets/Creative-Design.png" alt="icon"className="h-[30%] w-20 mb-2 ml-2"/>
                    <h1 className="ml-2 text-2xl font-bold mb-3">Creative Design</h1>
                    <p className="ml-2 text-sm">Whether you are looking for website design services or the management of digital advertising campaigns, we are here to help.</p>
                </div>
                <div className="h-64 w-64 bg-black hover:bg-gradient-to-r from-[#f81f01] to-[#ee076e] rounded-lg flex justify-center flex-col">
                    <img src="../src/assets/Brand-Identity.png" alt="icon" className="h-[30%] w-20 mb-3 mt-2 ml-2"/>
                    <h1 className="ml-2 text-2xl font-bold mb-3">Brand Identity</h1>
                    <p className="ml-2 text-sm">A strong, consistent brand, built up over time, is the best guarantee we can assure you. Self, definition, transparency, authenticity and accountability are our keys to success</p>
                </div>
                <div className="h-64 w-64 bg-black hover:bg-gradient-to-r from-[#f81f01] to-[#ee076e] rounded-lg flex justify-center flex-col">
                    <img src="../src/assets/Web-Development.png" alt="icon" className="h-[30%] w-20 mb-2 ml-2"/>
                    <h1 className="ml-2 text-2xl font-bold mb-3">Web Development</h1>
                    <p className="ml-2 text-sm">Get Customized Website Design specific to your business. We design cross-browser compatibility websites with the latest features.</p>
                </div>
            </div>
        </div>
    )
}

export default About;