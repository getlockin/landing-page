import DownloadButtons from "./downloadButtons";
import { Badge } from "./ui/badge";

export default function Hero() {
    return (
        <div 
            className="hero-grid-bg relative z-10 flex justify-center items-center flex-col text-center min-h-[50vh] overflow-hidden bg-[url('/bggrid.png')] bg-cover bg-center"
        >
            <div className="relative z-10">
                <div>
                    <Badge
                        variant="outline"
                        className="text-[#ff5757] border-[#ff57573d] px-4 py-2 h-8 rounded-lg bg-black/70 backdrop-blur-sm"
                    >
                        Powered by Blockchain
                    </Badge>
                </div>

                <div className="mt-6">
                    <h1 className="font-semibold text-[3.0rem] sm:text-[4.2rem] md:text-[4.8rem] leading-[1.1] mb-5">
                        Bet on Yourself.<br />
                        Get <span className="text-[#ff6361]">Rewarded.</span>
                    </h1>
                </div>

                <div className="flex flex-col justify-center items-center text-[20px] mt-2 text-gray-300">
                    <p>Commit to personal goals. stake money.</p>
                    <p>stay accountable.</p>
                </div>

                {/* <div className="mt-10">
                    <DownloadButtons />
                </div> */}
            </div>
        </div>
    )
}