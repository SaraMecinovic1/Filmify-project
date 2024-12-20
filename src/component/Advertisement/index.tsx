import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import video1 from "../../assets/video-advertisement/video1.mp4";
import video2 from "../../assets/video-advertisement/video2.mp4";
import video3 from "../../assets/video-advertisement/video3.mp4";
import video4 from "../../assets/video-advertisement/video4.mp4";
import video5 from "../../assets/video-advertisement/video5.mp4";
import video6 from "../../assets/video-advertisement/video6.mp4";

const videoFiles = [video1, video2, video3, video4, video5, video6];

const Advertisement = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      navigation={true}
      pagination={{
        clickable: true,
      }}
    >
      {videoFiles.map((videoSrc, index) => (
        <SwiperSlide key={index}>
          <video className="w-full md:h-auto object-cover" autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
            Vaš pregledač ne podržava video tag.
          </video>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Advertisement;
