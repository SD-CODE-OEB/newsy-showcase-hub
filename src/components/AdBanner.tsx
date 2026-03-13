import adImage from "@/assets/ad-banner.jpg";

const AdBanner = () => (
  <div className="container py-5">
    <img
      src={adImage}
      alt="Advertisement"
      className="w-full h-[200px] rounded-xl object-cover"
      loading="lazy"
    />
  </div>
);

export default AdBanner;
