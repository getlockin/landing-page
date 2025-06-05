import Appbar from "@/components/appbar";
import Hero from "@/components/hero";
import VideoSection from "@/components/VideoSection"; // Import the new component

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Video element removed from here */}
      <Appbar />
      <Hero />
      <VideoSection /> {/* Add the new VideoSection component */}
    </div>
  );
}
