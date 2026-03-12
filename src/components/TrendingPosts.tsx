const posts = [
  { title: "Campaign Trail: Key Moments from Yesterday", img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=300&h=200&fit=crop" },
  { title: "Exclusive Interview with Party Leaders", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop" },
  { title: "Policy Roundup: What Changes Ahead", img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=300&h=200&fit=crop" },
  { title: "Community Outreach Program Launched", img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop" },
];

const TrendingPosts = () => (
  <section className="container py-6">
    <div className="section-divider mb-2" />
    <h2 className="section-title">Trending Posts</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {posts.map((post, i) => (
        <div key={i} className="group cursor-pointer">
          <div className="overflow-hidden rounded bg-muted aspect-[3/2]">
            <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <p className="text-xs md:text-sm mt-2 font-medium text-foreground leading-tight">{post.title}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TrendingPosts;
