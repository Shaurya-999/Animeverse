import Slider from "react-slick";

const MySlider = ({img1,img2,img3,img4,img5}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    arrows: false,
    autoplay: true,         // Enable automatic sliding
    autoplaySpeed: 4000,    // Slide changes every 3 seconds
    pauseOnHover: true,
  };

  return (
    <Slider {...settings} className="w-[200px] h-[50px] m-[6%] mb-[80%]">
      <div><img src={img1} alt="Slide 1" className="h-[300px] w-[200px]" /></div>
      <div><img src={img2} alt="Slide 2" className="h-[300px] w-[200px]"  /></div>
      <div><img src={img3} alt="Slide 3" className="h-[300px] w-[200px]" /></div>
      <div><img src={img4} alt="Slide 3" className="h-[300px] w-[200px]" /></div>
      <div><img src={img5} alt="Slide 3" className="h-[300px] w-[200px]" /></div>
    </Slider>
  );
};

export default MySlider;