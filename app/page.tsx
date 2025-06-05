import Appbar from "@/components/appbar";
import FAQs from "@/components/FAQs";
import Features from "@/components/featurs";
import Hero from "@/components/hero";
import VideoSection from "@/components/VideoSection"; // Import the new component

export default function Home() {
  return (
    <div>
      {/* Video element removed from here */}
      <Appbar />
      <Hero />
      <VideoSection /> {/* Add the new VideoSection component */}
      <Features />
      <FAQs />
    </div>
  );
}
