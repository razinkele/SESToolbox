import { Card, CardContent } from '@components/common';
import { Globe, Users, Target, Award } from 'lucide-react';

function About() {
  return (
    <div className="container-custom py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          About SESToolbox
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          A comprehensive platform for analyzing socio-ecological systems and
          marine biodiversity data, developed as part of the Marine SABRES
          initiative.
        </p>
      </div>

      {/* Marine SABRES Info */}
      <Card className="mb-12">
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Marine SABRES
              </h2>
              <p className="mb-4 text-gray-700">
                Marine SABRES (Marine Systems Approaches for Biodiversity
                Resilience and Ecosystem Sustainability) is an EU-funded
                research initiative involving 21 partners across Europe.
              </p>
              <p className="mb-4 text-gray-700">
                The project focuses on developing a user-friendly Simple
                Socio-Ecological System (SES) framework to empower
                decision-makers and communities in supporting sustainable
                marine practices.
              </p>
              <a
                href="https://www.marinesabres.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 transition-colors hover:text-primary-700"
              >
                Visit Marine SABRES Website →
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">21 Partners</h3>
                  <p className="text-sm text-gray-600">
                    Collaborative research across European institutions
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary-100 text-secondary-600">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    EU-Wide Impact
                  </h3>
                  <p className="text-sm text-gray-600">
                    Supporting sustainable marine practices across Europe
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    SES Framework
                  </h3>
                  <p className="text-sm text-gray-600">
                    User-friendly tools for analyzing socio-ecological systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Platform Features
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent>
              <h3 className="mb-2 font-semibold text-gray-900">
                SES Modeling
              </h3>
              <p className="text-sm text-gray-600">
                Build and analyze complex socio-ecological system models with
                an intuitive interface.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="mb-2 font-semibold text-gray-900">
                Data Visualization
              </h3>
              <p className="text-sm text-gray-600">
                Interactive maps and charts for exploring marine biodiversity
                data and trends.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="mb-2 font-semibold text-gray-900">
                Resilience Analysis
              </h3>
              <p className="text-sm text-gray-600">
                Assess ecosystem resilience and identify vulnerabilities and
                strengths.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Technology */}
      <Card className="mb-12">
        <CardContent>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Technology Stack
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Frontend</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>React 18</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Vite</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">
                State & Data
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Zustand</li>
                <li>TanStack Query</li>
                <li>React Router</li>
                <li>Axios</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">
                Visualization
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>D3.js</li>
                <li>Recharts</li>
                <li>Leaflet</li>
                <li>React Leaflet</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Quality</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>ESLint</li>
                <li>Prettier</li>
                <li>Vitest</li>
                <li>Testing Library</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Funding */}
      <Card>
        <CardContent>
          <div className="flex items-start gap-4">
            <Award className="h-12 w-12 text-primary-600" />
            <div>
              <h2 className="mb-2 text-xl font-bold text-gray-900">
                EU Funding
              </h2>
              <p className="text-gray-700">
                This project has received funding from the European Union's
                Horizon 2020 research and innovation programme. Project ID:
                101058956
              </p>
              <a
                href="https://cordis.europa.eu/project/id/101058956"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center text-sm text-primary-600 transition-colors hover:text-primary-700"
              >
                View on CORDIS →
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default About;
