interface Settings {
    dots: boolean;
    arrows: boolean;
    infinite: boolean;
    speed: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
    cssEase: string;
    pauseOnHover: boolean;
    pauseOnFocus: boolean;
    responsive: Responsive[];
  }
  
  interface Responsive {
    breakpoint: number;
    settings: ResponsiveSettings;
  }
  
  interface ResponsiveSettings {
    slidesToShow: number;
    slidesToScroll: number;
    infinite?: boolean;
    initialSlide?: number;
  }
  
  const settings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  export default settings;
  