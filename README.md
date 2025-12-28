# SESToolbox

Frontend application for the Simple Socio-Ecological System (SES) framework and other tools for Marine SABRES.

## About Marine SABRES

Marine SABRES is an EU-funded research initiative involving 21 partners focused on developing a user-friendly Simple Socio-Ecological System (SES) framework to empower decision-makers and communities in supporting sustainable marine practices.

## Features

- **SES Modeling**: Build and analyze socio-ecological systems
- **Data Visualization**: Interactive maps and charts for marine biodiversity data
- **Marine Data Access**: Comprehensive marine biodiversity datasets
- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Type Safety**: Full TypeScript support with strict mode
- **Testing**: Comprehensive test suite with Vitest
- **Code Quality**: ESLint, Prettier, and pre-commit hooks

## Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/razinkele/SESToolbox.git
cd SESToolbox
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

Edit `.env` and set your configuration values:

```env
VITE_API_BASE_URL=https://api.marinesabres.eu
VITE_ENVIRONMENT=development
VITE_MAP_API_KEY=your_map_api_key_here
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Generate test coverage report
- `npm run type-check` - Check TypeScript types

## Project Structure

```
SESToolbox/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/        # Common components (buttons, inputs, etc.)
│   │   ├── layout/        # Layout components (header, footer)
│   │   └── ses/           # SES-specific components
│   ├── features/          # Feature-based modules
│   │   ├── auth/          # Authentication
│   │   ├── home/          # Home page
│   │   ├── modeling/      # SES modeling
│   │   └── visualization/ # Data visualization
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API clients and services
│   ├── store/             # State management
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── styles/            # Global styles
│   ├── tests/             # Test utilities and setup
│   ├── App.tsx            # Main App component
│   └── main.tsx           # Application entry point
├── tests/                 # Test files
├── .env.example           # Environment variables example
├── .eslintrc.cjs         # ESLint configuration
├── .prettierrc           # Prettier configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Project dependencies

```

## Development Guidelines

### Code Style

- Follow the ESLint and Prettier configurations
- Use TypeScript strict mode
- Write meaningful commit messages
- Add tests for new features

### TypeScript

- Enable strict mode
- Avoid `any` type - use `unknown` or proper types
- Define interfaces for all data structures
- Use path aliases (@components, @utils, etc.)

### Testing

- Write unit tests for utilities and hooks
- Write component tests for UI components
- Aim for 80%+ code coverage
- Use Testing Library best practices

### Git Workflow

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Commit with a descriptive message
5. Push and create a pull request

## Technology Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Routing**: React Router
- **Visualization**: D3.js, Recharts
- **Maps**: Leaflet
- **Testing**: Vitest, React Testing Library
- **Code Quality**: ESLint, Prettier

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project has received funding from the European Union's Horizon 2020 research and innovation programme.

## Links

- [Marine SABRES Website](https://www.marinesabres.eu)
- [Marine SABRES About](https://www.marinesabres.eu/about)
- [CORDIS Project Page](https://cordis.europa.eu/project/id/101058956)

## Support

For questions and support, please visit the [Marine SABRES contact page](https://www.marinesabres.eu/contact).
