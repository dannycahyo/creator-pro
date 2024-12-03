# Building Innovative Apps: Integrating Gemini AI into Web Development

Welcome to the workshop repository for "Building Innovative Apps: Integrating Gemini AI into Web Development". In this workshop, we'll build Creator PRO, a powerful application that demonstrates the integration of Google's Gemini AI with modern web development practices.

## Workshop Overview

Learn how to build a content creation assistant that leverages Gemini AI for script creation, audio transcription, and content performance analytics. This hands-on workshop will guide you through building a real-world application while learning essential concepts in AI integration.

## What You'll Build

Creator PRO is an application that helps content creators with:

- Script creation using Gemini AI
- Audio transcription in Bahasa Indonesia
- Content performance analytics with AI-powered insights

### Branches

- `main`: This branch contains the final and complete code for the Creator PRO application.
- `development`: This branch contains the starter code for the workshop. Participants will use this branch to follow along with the workshop exercises.

## Getting Started

### Prerequisites

- Node.js (version 18.x or later)
- A code editor (VS Code, NVIM, etc.)
- Basic knowledge of React
- Google account for Gemini API access

**Required Environment Variables:**

- `GEMINI_API_KEY`: Your Google Gemini API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dannycahyo/creator-pro
   cd creator-pro
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Setting Up

1. Create a `.env` file in the root directory:

   ```bash
   touch .env
   ```

2. Add your API key to the `.env` file:

   ```
    GEMINI_API_KEY=your_gemini_api_key
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

This will start the application on `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
