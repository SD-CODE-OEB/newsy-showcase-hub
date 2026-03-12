const blogPosts = [
  { title: "Vision for a Better Tomorrow", date: "March 10, 2026", author: "Editorial Desk" },
  { title: "Grassroots Movement Gains Momentum", date: "March 8, 2026", author: "Priya Sharma" },
  { title: "Infrastructure Push: Roads, Bridges & Beyond", date: "March 5, 2026", author: "Rahul Verma" },
  { title: "Youth Empowerment Through Skill Development", date: "March 2, 2026", author: "Anjali Mehta" },
  { title: "Healthcare Access: Promises & Progress", date: "February 28, 2026", author: "Suresh Patil" },
];

const BlogSection = () => (
  <section className="container py-6">
    <div className="section-divider mb-2" />
    <h2 className="section-title">Latest Updates</h2>
    <div className="mt-4 space-y-4">
      {blogPosts.map((post, i) => (
        <article key={i} className="bg-card border border-border rounded p-4 hover:shadow-sm transition-shadow cursor-pointer">
          <h3 className="font-heading font-bold text-foreground text-base">{post.title}</h3>
          <div className="flex gap-4 mt-1 text-xs text-muted-foreground">
            <span>{post.date}</span>
            <span>By {post.author}</span>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default BlogSection;
