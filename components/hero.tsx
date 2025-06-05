import DownloadButtons from "./downloadButtons";
import { Badge } from "./ui/badge";

export default function Hero() {
    return (
        <div className="flex justify-center items-center flex-col h-[70vh]">

            <div>
            <Badge
          variant="outline"
          className=" text-[#ff5757] border-[#ff57573d] px-4 py-2 h-8 rounded-lg"
        >
          Powered by Blockchain
        </Badge>
            </div>

            <div>
            <h1 className="font-semibold text-[3.0rem] sm:text-[4.2rem] md:text-[4.8rem] leading-[1.1] mb-5">
          Bet on Yourself.<br />
          Get <span className="text-[#ff6361]">Rewarded.</span>
        </h1>
            </div>

            <div className="flex flex-col justify-center items-center text-[20px]">
                <p>Commit to personal goals. stake money. stay </p>
                <p>stay accountable.</p>
            </div>

            <div>
                <DownloadButtons />
            </div>
            
        </div>
    )
}