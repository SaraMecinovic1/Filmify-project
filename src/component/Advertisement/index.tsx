import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videoFiles = [
  "./assets/video-advertisement/video1.mp4",
  "./assets/video-advertisement/video2.mp4",
  "./assets/video-advertisement/video3.mp4",
  "./assets/video-advertisement/video4.mp4",
  "./assets/video-advertisement/video5.mp4",
  "./assets/video-advertisement/video6.mp4",
];

const Advertisement = () => {
  return (
    <div className="w-full h-[400px] bg-red-300">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
      >
        {videoFiles.map((videoSrc, index) => {
          return (
            <SwiperSlide key={index}>
              <video width="100%" height="auto" autoPlay loop muted>
                <source src={require(`${videoSrc}`)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Advertisement;
