# OH UI Components Library

The OH UI Components Library is a component library designed primarily to create uniformity across different OH applications and ensure a common and consistent style for components in all future applications. Built following the design team specifications, the library adheres to OH SmartDoc standards and is distributed through NPM for easy installation and usage.

## Features

- **Custom Components**: Built on top of Shadcn components and styled with Tailwind CSS.
- **Storybook Integration**: Visualize and test components in isolation.
- **NPM Distribution**: Easy installation via NPM registry.
- **CI/CD**: Automated publishing process triggered by tagged commits.

---

## Getting Started

### Development

Storybook is used to develop and test components in isolation. To start Storybook locally, run:

```sh
npm start
```

This will launch Storybook at `http://localhost:6006`, where you can interact with and test components.

### Available Scripts

- `npm start` - Start Storybook development server
- `npm run dev` - Start Vite development server
- `npm run build` - Build the library for production
- `npm run preview` - Preview the built library
- `npm run test` - Run unit tests in watch mode
- `npm run test:run` - Run unit tests once (for CI)
- `npm run lint` - Lint code with Biome
- `npm run format` - Format code with Biome
- `npm run check` - Run linting and type checking
- `npm run build-storybook` - Build Storybook for deployment
- `npm run shadcn:add` - Add new Shadcn components

### Adding a New Component

1. **Install the Base Component**:
   Use Shadcn to install the desired base component. The component will be placed under the `@/components/ui` directory.

2. **Move and Rename the Component**:
   Move the component to the `lib/components/ui` directory and rename it to align with OH's design specifications.

3. **Customize**:
   Edit the component as needed to meet the provided design guidelines.

---

## Publishing

The library is published to the NPM registry via GitHub CI pipelines when a new release is published.

### Publishing Process

1. Ensure all changes are merged into the `master` branch.
2. Bump the package version:
   ```bash
   npm version [patch | minor | major]
   ```
3. Create a new GitHub release:
   - Go to the repository on GitHub
   - Click "Releases" > "Create a new release"
   - Use the version tag (e.g., `v1.2.3`) as the tag name
   - Add release notes describing the changes included in this release
4. The GitHub Actions pipeline will automatically publish the package to NPM when the release is published.

---

## Usage

### Installation

Install the library using npm:

```sh
npm install @oh/ui-components
```

### Exported Components

The library exports the following custom OH components:

- `CustomAccordion`
- `CustomButton`
- `DateField`
- `SearchInput`
- `SelectField`

### Import Examples

Import components into your application:

```tsx
import { CustomButton, DateField } from "@oh/ui-components";

function App() {
  return (
    <div>
      <CustomButton title="Click Me" onClick={() => console.log('clicked')} />
      <DateField />
    </div>
  );
}
```

---

## Contributing

We welcome contributions from the community! This section provides guidelines for contributing to the OH UI Components Library.

### Getting Started for Contributors

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/oh-ui-components.git
   cd oh-ui-components
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start Storybook** to see existing components:
   ```bash
   npm start
   ```

### Development Workflow

#### Branching Strategy

- **develop**: Main development branch for ongoing work
- **master**: Release branch for stable, production-ready code
- Work on **feature branches** created from `develop`
- Branch naming convention: `feature/component-name` or `fix/issue-description`
- **Always create a Pull Request** - direct pushes to `develop` or `master` are not allowed
- All PRs must be **reviewed and approved** before merging
- Feature branches are merged into `develop` after review
- Releases are created from `master` branch

#### Pull Request Process

1. Create a feature branch from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-component-name
   ```
2. Make your changes following the guidelines below
3. Test your changes in Storybook
4. Commit with clear, descriptive messages
5. Push your branch and create a Pull Request targeting `develop`
6. Wait for code review and address any feedback
7. Once approved, your PR will be merged into `develop`

### Component Development Guidelines

#### Component Types

This library uses two types of components:

- **Base Components**: Standard Shadcn UI components (button, input, etc.) used as building blocks
- **Custom OH Components**: OH-branded components that wrap base components with specific styling and behavior

Only custom OH components are exported from the library and should have stories and documentation.

#### Adding a New Component

1. **Install Base Component** (if using Shadcn):
   ```bash
   npx shadcn@latest add [component-name]
   ```
   The component will be placed under `@/components/ui` directory.

2. **Create Custom OH Component**:
   - Create a new file in `lib/components/ui` following OH naming conventions
   - Wrap the base component with OH-specific props and styling
   - Export the custom component from `lib/components/ui/index.ts`

3. **Create Stories and Documentation** (Required for custom components):
   Every custom component must have:
   - **`.stories.ts` file**: Interactive examples and variants in `src/stories/`
   - **`.mdx` file**: Complete documentation in `src/stories/`

#### Documentation Requirements

Each custom component must include both files in `src/stories/` following these patterns:

**Component.stories.ts Structure:**

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "@/components/ui/component-name";

const meta = {
  title: "Components/ComponentName",
  component: ComponentName,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props
  },
};
```

**Component.mdx Documentation Structure:**
All `.mdx` files must follow this exact pattern:

````markdown
import { Canvas, Meta } from '@storybook/blocks';

import * as ComponentStories from './Component.stories';

<Meta title="Components/ComponentName" />

# ComponentName

#### Displays a styled ComponentName component.

<Canvas of={ComponentStories.Default} />

## Usage

```typescript
import { ComponentName } from "@oh/ui-components";
```

```typescript
<ComponentName prop1="value1" prop2="value2" />
```

## Props

```typescript
type ComponentNameProps = {
  prop1: string;
  prop2?: string;
  // Add all component props with types
};
```

## Examples

### Default

<Canvas of={ComponentStories.Default} />

### Variant Name

<Canvas of={ComponentStories.VariantName} />
````

```typescript
<ComponentName prop1="value1" prop2="value2" />
```

## Props

```typescript
type ComponentNameProps = {
  prop1: string;
  prop2?: string;
  // Add all component props with types
};
```

## Examples

### Default

<Canvas of={ComponentStories.Default} />

### Variant Name

<Canvas of={ComponentStories.VariantName} />
```

#### Code Quality Standards

- Follow existing code style and formatting
- Use TypeScript for type safety
- Include proper JSDoc comments for components
- Ensure accessibility (ARIA attributes, keyboard navigation)
- Test components thoroughly in Storybook
- Follow React best practices and hooks guidelines

#### Story Development

- **Stories must match components**: Every custom component in `lib/components/ui` must have corresponding stories in `src/stories/`
- Include all component variants and use cases
- Provide interactive controls for all props
- Add meaningful story names and descriptions
- Test edge cases and error states

### Testing

The project uses multiple testing frameworks:

#### Unit Testing
- **Framework**: Vitest
- **Command**: `npm run test` (watch mode) or `npm run test:run` (CI mode)
- **Coverage**: Run with `npm run test:run -- --coverage`

#### End-to-End Testing
- **Framework**: Cypress
- **Command**: Runs automatically in CI, or manually with Cypress GUI
- **Tests location**: `cypress/` directory

#### Component Testing
- **Framework**: Storybook + Vitest integration
- **Command**: `npm run start` to view components in Storybook
- Test all component variants and interactions in the Storybook interface

### Linting and Code Quality

- **Tool**: Biome (unified linter and formatter)
- **Lint code**: `npm run lint`
- **Format code**: `npm run format`
- **Check all**: `npm run check` (includes linting and type checking)
- Biome replaces ESLint and Prettier for faster performance

### Design Consistency

- Follow the design specifications provided by the design team
- Use Shadcn components as the base and modify them as needed
- Maintain consistency with existing components
- Ensure proper Tailwind CSS usage

### Code Review Guidelines

When reviewing PRs, check for:

- [ ] Component follows OH design specifications
- [ ] Both `.stories.ts` and `.mdx` files are included in `src/stories/`
- [ ] Documentation follows the standard pattern
- [ ] All component variants are covered in stories
- [ ] Code is properly typed with TypeScript
- [ ] Accessibility requirements are met
- [ ] Storybook renders without errors
- [ ] Tests pass (unit tests and linting)

Thank you for contributing to OH UI Components!
