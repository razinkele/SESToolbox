import { Link } from 'react-router-dom';
import { BarChart3, Globe, Database } from 'lucide-react';

function Home() {
  return (
    <div className="container-custom py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Welcome to SESToolbox
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          A comprehensive frontend application for the Simple Socio-Ecological
          System (SES) framework and other tools for Marine SABRES.
        </p>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Key Features
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* SES Modeling */}
          <div className="card group transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              SES Modeling
            </h3>
            <p className="mb-4 text-gray-600">
              Build and analyze socio-ecological systems with our intuitive
              modeling interface.
            </p>
            <Link
              to="/modeling"
              className="text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              Learn more →
            </Link>
          </div>

          {/* Data Visualization */}
          <div className="card group transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100 text-secondary-600 transition-colors group-hover:bg-secondary-500 group-hover:text-white">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Data Visualization
            </h3>
            <p className="mb-4 text-gray-600">
              Visualize marine biodiversity data with interactive maps and
              charts.
            </p>
            <Link
              to="/visualization"
              className="text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              Learn more →
            </Link>
          </div>

          {/* Marine Data */}
          <div className="card group transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Marine Data
            </h3>
            <p className="mb-4 text-gray-600">
              Access and analyze comprehensive marine biodiversity datasets.
            </p>
            <Link
              to="/data"
              className="text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* About Marine SABRES */}
      <section className="rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 p-8 text-white md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">About Marine SABRES</h2>
          <p className="mb-6 text-lg opacity-90">
            Marine SABRES is an EU-funded research initiative involving 21
            partners focused on developing a user-friendly Simple
            Socio-Ecological System (SES) framework to empower decision-makers
            and communities in supporting sustainable marine practices.
          </p>
          <a
            href="https://www.marinesabres.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-primary-600 transition-transform hover:scale-105"
          >
            Visit Marine SABRES
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
