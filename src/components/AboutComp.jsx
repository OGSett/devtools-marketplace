import { FiSearch, FiStar, FiLayers, FiZap, FiFilter, FiHeart, FiGithub, FiMail } from "react-icons/fi";


const About = () => {
    const Feature = ({ icon, title, desc }) => (
      <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200 bg-white">
        <div className="text-indigo-600 text-3xl mb-4">{icon}</div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 px-4 py-12">
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">About</h2>
        <h1 className="text-4xl md:text-5xl font-bold my-4">Welcome to DevTools Marketplace</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A curated platform built for developers, by developers. Discover, filter, and save tools that make coding easier, faster, and more enjoyable.
        </p>
      </section>
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Our Mission</h2>
          <p className="text-gray-700 text-base">
            We empower developers by offering easy access to high-quality tools across categories:
          </p>
          <ul className="mt-4 text-gray-600 list-disc list-inside space-y-1">
            <li><strong>API & Data:</strong> Test, validate, and manage APIs.</li>
            <li><strong>Productivity:</strong> Boost efficiency with workflow helpers.</li>
            <li><strong>Design & UI:</strong> Explore design systems and prototyping tools.</li>
            <li><strong>Collaboration:</strong> Share, sync, and work better with your team.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <FiZap className="text-indigo-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Fast Access</h4>
              <p className="text-sm text-gray-600">No fluff — just tools that work.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FiFilter className="text-indigo-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Easy to Filter</h4>
              <p className="text-sm text-gray-600">Find tools by category, use case, or popularity.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FiStar className="text-indigo-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Save Your Favorites</h4>
              <p className="text-sm text-gray-600">Store tools in local storage for quick access.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-8">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature icon={<FiSearch />} title="Smart Search" desc="Find tools by keyword, tag, or purpose quickly." />
          <Feature icon={<FiStar />} title="Favorites" desc="Save your favorite tools for later access." />
          <Feature icon={<FiLayers />} title="Organized Categories" desc="Tools are neatly categorized for clarity." />
          <Feature icon={<FiZap />} title="Speed & Simplicity" desc="Lightweight design built for fast access." />
          <Feature icon={<FiHeart />} title="Built for Devs" desc="No distractions — just the tools you need." />
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Join Us</h2>
        <p className="text-gray-700 mb-6">
          This project is always evolving. We welcome suggestions, contributions, and feedback to make the marketplace better for everyone.
        </p>
        <div className="flex justify-center space-x-6 text-indigo-600 text-2xl">
          <a href="https://github.com/OGSett" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
          <a href="mailto:yussefmekkaoui@gmail.com"><FiMail /></a>
        </div>
      </section>
    </main>
  );
}

export default About