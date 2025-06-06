# InsiderDepth

**InsiderDepth** is an AI-powered cryptocurrency trading platform that combines advanced education, real-time market analysis, and intelligent trading assistance. The platform features an interactive learning system, comprehensive trading journal, token presale interface, and an advanced AI assistant for trading insights.

## 🚀 Features

### 📚 Education System

- **Interactive Learning Modules**: Step-by-step cryptocurrency education with engaging content
- **Knowledge Testing**: Built-in quiz system to validate learning progress
- **Progressive Learning Path**: Structured curriculum from basics to advanced trading concepts

### 📊 Trading Journal

- **Trade Tracking**: Record and monitor trading performance
- **Profit/Loss Analytics**: Visual representation of trading outcomes
- **Portfolio Management**: Organize and manage trading activities

### 🤖 AI Assistant

- **Real-time Analysis**: Advanced AI model for market sentiment analysis
- **Data Processing**: NLP-powered sentiment analysis from multiple sources (X/Twitter, Reddit, News)
- **Interactive Chat**: Get personalized trading insights and recommendations

### 💰 Token Presale

- **Multi-wallet Support**: Compatible with BEP20, Ethereum, Polygon, Base, Arbitrum networks
- **Real-time Transactions**: Live transaction monitoring and verification
- **Tokenomics Visualization**: Interactive charts showing token distribution

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.2 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives with shadcn/ui
- **State Management**: Zustand
- **Charts**: Recharts for data visualization
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Development**: Turbopack for fast development builds

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/insiderdepth.git
   cd insiderdepth
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Run the development server**

   ```bash
   bun run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
├── app/                          # Next.js App Router
│   ├── education/               # Education module pages
│   ├── journal/                 # Trading journal pages
│   ├── presale/                 # Token presale pages
│   ├── quiz/                    # Quiz system pages
│   └── layout.tsx               # Root layout component
├── components/                   # Reusable UI components
│   ├── ui/                      # shadcn/ui components
│   └── magicui/                 # Custom UI components
├── features/                     # Feature-based modules
│   ├── education/               # Education system
│   │   ├── components/          # Education-specific components
│   │   ├── hooks/               # Custom hooks
│   │   └── data.ts              # Education content data
│   ├── journal/                 # Trading journal
│   │   ├── components/          # Journal components
│   │   ├── constants/           # Mock data and constants
│   │   └── page/                # Journal pages
│   ├── presale/                 # Token presale
│   │   └── components/          # Presale components
│   ├── quiz/                    # Quiz system
│   │   ├── components/          # Quiz components
│   │   ├── hooks/               # Quiz logic hooks
│   │   └── state/               # Zustand state management
│   └── shared/                  # Shared components
│       ├── icons/               # Custom icons
│       └── Navbar/              # Navigation components
├── lib/                         # Utility functions
└── public/                      # Static assets
```

## 🎯 Key Features Breakdown

### Education System

- **Progressive Learning**: 5-step educational content covering trading fundamentals
- **Interactive Quizzes**: 5-question knowledge tests with immediate feedback
- **Smart Navigation**: Seamless progression between lessons and assessments

### Trading Journal

- **Performance Tracking**: Monitor profits/losses with visual indicators
- **CRUD Operations**: Add, edit, rename, and delete journal entries
- **Responsive Design**: Grid layout adapting to different screen sizes

### AI Architecture

- **Multi-source Data**: Aggregates sentiment from social media and news
- **NLP Processing**: Advanced natural language processing for sentiment analysis
- **Real-time Chat**: Interactive AI assistant for trading guidance

### Token Presale

- **Multi-chain Support**: Compatible with major blockchain networks
- **Interactive Charts**: Dynamic tokenomics visualization
- **Secure Transactions**: Real-time transaction verification

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full feature experience with advanced layouts
- **Tablet**: Adapted components for medium screens
- **Mobile**: Touch-optimized interface with collapsible navigation

## 🎨 Design System

- **Color Scheme**: Dark theme with blue accent colors (#287EE9, #47A4F0)
- **Typography**: Geist font family for optimal readability
- **Components**: Consistent design language across all modules
- **Animations**: Smooth transitions and hover effects

## 🔧 Development Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🌟 Key Dependencies

- **@radix-ui/\***: Accessible UI primitives
- **@hookform/resolvers**: Form validation integration
- **recharts**: Chart and data visualization library
- **react-archer**: Component for creating flowcharts
- **zustand**: Lightweight state management
- **zod**: TypeScript-first schema validation

## 🚀 Deployment

The application is optimized for deployment on platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker containers**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 🔗 Links

- **Live Demo**: [Coming Soon]
- **Documentation**: [Coming Soon]
- **API Reference**: [Coming Soon]

## ⚡ Performance Features

- **Turbopack**: Ultra-fast development builds
- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Next.js automatic image optimization
- **Static Generation**: Pre-rendered pages for better performance

## 🛡️ Security Features

- **Type Safety**: Full TypeScript coverage
- **Input Validation**: Zod schema validation
- **Secure Headers**: Next.js security best practices
- **Environment Variables**: Secure configuration management

---
