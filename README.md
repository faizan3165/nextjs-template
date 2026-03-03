# Next.js Enterprise Template

This is an enterprise-level Next.js boilerplate designed for scalability and maintainability.

## Features

- **Next.js 16 (App Router)**
- **TypeScript**
- **Tailwind CSS v4**
- **Shadcn UI**
- **Server Actions**
- **Enterprise Folder Structure**

## Project Structure

```
.
├── src/
│   ├── actions/      # Server Actions
│   ├── app/          # App Router (pages, layouts)
│   ├── components/   # React Components
│   │   ├── ui/       # Shadcn UI components
│   │   ├── features/ # Feature-specific components
│   │   └── layouts/  # Layout components
│   ├── config/       # Configuration files
│   ├── constants/    # Global constants
│   ├── hooks/        # Custom React Hooks
│   ├── lib/          # Utility libraries
│   ├── providers/    # Context Providers
│   ├── services/     # API services
│   ├── types/        # TypeScript types
│   └── utils/        # Helper functions
├── public/           # Static assets
└── .github/          # GitHub templates and workflows
```

## Getting Started

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/next-js-template.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```

## Contributing

Please read the [Pull Request Template](.github/pull_request_template.md) before submitting a PR.
