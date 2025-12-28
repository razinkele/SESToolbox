function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-custom py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              About SESToolbox
            </h3>
            <p className="text-sm text-gray-600">
              Frontend application for the Simple Socio-Ecological System (SES)
              framework and other tools for Marine SABRES.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="https://www.marinesabres.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary-600"
                >
                  Marine SABRES
                </a>
              </li>
              <li>
                <a
                  href="https://www.marinesabres.eu/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary-600"
                >
                  About the Project
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Contact
            </h3>
            <p className="text-sm text-gray-600">
              For inquiries, please visit the{' '}
              <a
                href="https://www.marinesabres.eu/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 transition-colors hover:text-primary-700"
              >
                Marine SABRES contact page
              </a>
              .
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Marine SABRES. Licensed under GNU GPL v3.0.
          </p>
          <p className="mt-1 text-xs text-gray-400">
            This project has received funding from the European Union&apos;s
            Horizon 2020 research and innovation programme.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
