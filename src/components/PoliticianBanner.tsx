import bannerImage from "@/assets/politician-banner.jpeg";

const PoliticianBanner = () => {
  return (
    <div className="container py-4">
      <div className="w-full rounded-2xl overflow-hidden shadow-lg">
        <img
          src={bannerImage}
          alt="Panguleti Srinivas Reddy - Revenue, Housing & Information Minister"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default PoliticianBanner;
