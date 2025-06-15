import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>BSNK Law Associates</title>
        <meta name="description" content="Legal expertise you can trust." />
      </Head>

      <header className="bg-red-800 text-white py-4 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">BSNK Law Associates</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/blog" className="hover:underline">Blog</a>
            <a href="/login" className="hover:underline">Login</a>
            <a href="/dashboard" className="hover:underline">Dashboard</a>
          </nav>
        </div>
      </header>

      <main className="scroll-smooth">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gray-100">
          <h2 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-red-700">BSNK Law Associates</span>
          </h2>
          <p className="text-lg text-gray-700">A Law Firm You Can Trust</p>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">About Our Firm</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Established over 100 years ago by our forefathers, BSNK Law Associates stands as a legacy of trust,
              expertise, and service in the legal community.
              We provide comprehensive legal solutions across civil, banking, and criminal matters.
              Our team offers tailored strategies rooted in timeless legal tradition with a modern approach.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                ["Cooperative Matters", "Advising Cooperative Societies in legal procedures, disputes, and governance."],
                ["Bank Matters", "Handling SARFAESI, DRT, DRAT cases, legal opinions, and dues recovery."],
                ["Civil Law", "Covering property disputes, contracts, probate, succession, and torts."],
                ["Criminal Law", "Defense, trials, appeals, investigations, bail, and protection of legal rights."],
                ["Municipal Law", "Dealing with land use, zoning, and disputes with civic authorities."],
                ["Urban Land Ceiling Law", "Managing cases under Urban Land Ceiling and Regulation Act."],
                ["Urban Development Law", "Legal support for town planning and redevelopment projects."],
                ["High Court Matters", "Writs, appeals, revisions, and other High Court litigation."],
                ["Legal Consulting Services", "Providing legal counsel to individuals, businesses, and organizations."]
              ].map(([title, desc], i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-700 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Our Office Location</h2>
           <iframe
  title="BSNK Law Office Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.117274858188!2d80.62595181489113!3d16.50572518862059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff4b47c43e3%3A0xe8c7c27fc924f6c2!2sClassic%20Towers%2C%20Moghalrajpuram%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520010!5e0!3m2!1sen!2sin!4v1718449941043!5m2!1sen!2sin"
  width="100%"
  height="350"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-6 mt-16">
        <p>&copy; {new Date().getFullYear()} BSNK Law Associates. All rights reserved.</p>
      </footer>
    </>
  );
}

