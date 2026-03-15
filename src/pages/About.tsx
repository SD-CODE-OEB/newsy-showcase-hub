import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import psrImg from "@/assets/PSR.png";

const About = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navbar />
    <main className="container py-10 flex-1">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-6">About Ponguleti Srinivas Reddy</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Profile Image */}
        <div className="md:col-span-1">
          <div className="rounded-2xl overflow-hidden bg-muted border border-border shadow-md">
            <img src={psrImg} alt="Ponguleti Srinivas Reddy" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Bio Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 space-y-4 text-sm text-foreground leading-relaxed">
            <p>
              <strong>Ponguleti Srinivasa Reddy</strong> is the Hon'ble Minister for Revenue, Housing & Information, Government of Telangana. A seasoned leader and dedicated public servant, he has been at the forefront of transformative governance in the state.
            </p>
            <p>
              With decades of political experience and a deep connection to grassroots communities, Minister Ponguleti has championed initiatives in housing, rural development, and social welfare. His leadership has been instrumental in driving key programs like the Indiramma Housing Scheme, aiming to provide dignified housing to lakhs of families across Telangana.
            </p>
            <p>
              Representing the Khammam district, he has consistently worked towards the betterment of infrastructure, education, healthcare, and economic opportunities for the people of the region.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <h2 className="font-heading text-xl font-bold text-foreground">Key Initiatives</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Indiramma Housing Scheme — targeting 1 lakh houses by March 2026</li>
              <li>Distribution of Eid-ka-Tohfa and community welfare programs</li>
              <li>Inauguration of major development works in Khammam district</li>
              <li>Training sessions for local public representatives</li>
              <li>Infrastructure development including roads, bridges, and public facilities</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <h2 className="font-heading text-xl font-bold text-foreground">Vision</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Minister Ponguleti Srinivasa Reddy envisions a Telangana where every citizen has access to quality housing, healthcare, and education. His commitment to transparent governance and inclusive development continues to inspire communities across the state.
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
