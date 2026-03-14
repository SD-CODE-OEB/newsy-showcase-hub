import adBanner from "@/assets/ad-banner.jpg";

const AdBanner = () => (
  <div className="container py-5">
    <img src={adBanner} alt="Advertisement" className="w-full rounded-xl object-cover" />
  </div>
);

export default AdBanner;
