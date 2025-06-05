export default function VideoSection() {
    return (
      <div className="flex justify-center items-center my-[50px]">
        <video src="/lockin.mov"  width="1000" height="300" autoPlay controls loop muted={false} className="rounded-[5px]" />
      </div>
    )
  }