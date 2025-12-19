# OH UI Components Library

The OH UI Components Library is a component library designed primarily to create uniformity across different OH applications and ensure a common and consistent style for components in all future applications. Built following the design team specifications, the library adheres to OH SmartDoc standards and is distributed through NPM for easy installation and usage.

## Features

- **Custom Components**: Built on top of Shadcn components and styled with Tailwind CSS.
- **Storybook Integration**: Visualize and test components in isolation.
- **NPM Distribution**: Easy installation via NPM registry.
- **CI/CD**: Automated publishing process triggered by tagged commits.

---

## Getting Started

### Installation

To contribute to the library, follow these steps:

1. Clone the repository and navigate to the project directory.
2. Install dependencies:
   ```sh
   npm install
   ```

### Development

Storybook is used to develop and test components in isolation. To start Storybook locally, run:

```sh
npm start
```

This will launch Storybook at `http://localhost:6006`, where you can interact with and test components.

### Adding a New Component

1. **Install the Base Component**:
   Use Shadcn to install the desired base component. The component will be placed under the `@/components/ui` directory.

2. **Move and Rename the Component**:
   Move the component to the `lib/components/ui` directory and rename it to align with OH's design specifications.

3. **Customize**:
   Edit the component as needed to meet the provided design guidelines.

---

## Publishing

The library is published to the NPM registry via GitHub CI pipelines.

### Publishing Process

1. Ensure all changes are merged into the `main` branch.
2. Bump the package version:

   ```bash
   npm version [patch | minor | major]
   ```

3. Annotate the tag with the tasks included in the release:

   ```bash
   git tag -a vX.X.X -f
   ```

   The annotation could be something like:

   ```bash
   vX.X.X

   JIRATAG-2 | Description of the task
   ```

4. Push the changes to the remote repository:

   ```bash
   git push origin main --follow-tags
   ```

5. The GitHub Actions pipeline will automatically publish the package to NPM when a new tag is pushed.

---

## Installation

Install the library using npm:

```sh
npm install @oh/ui-components
```

Import components into the application as follows:

```jsx
import { Button } from "@oh/ui-components";

function App() {
  return <Button>Click Me</Button>;
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

- Work on **feature branches** created from `develop`
- Branch naming convention: `feature/component-name` or `fix/issue-description`
- **Always create a Pull Request** - direct pushes to `develop` or `main` are not allowed
- All PRs must be **reviewed and approved** before merging

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
5. Push your branch and create a Pull Request
6. Wait for code review and address any feedback
7. Once approved, your PR will be merged

### Component Development Guidelines

#### Adding a New Component

1. **Install Base Component** (if using Shadcn):

   ```bash
   npx shadcn@latest add [component-name]
   ```

   The component will be placed under `@/components/ui` directory.

2. **Move and Customize**:

   - Move the component to `lib/components/ui`
   - Rename according to OH design specifications
   - Customize to meet design guidelines

3. **Create Stories and Documentation** (Required):
   Every component must have:
   - **`.stories.ts` file**: Interactive examples and variants
   - **`.mdx` file**: Complete documentation

#### Documentation Requirements

Each component must include both files following these patterns:

**Component.stories.ts Structure:**

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "./ComponentName";

const meta: Meta<typeof ComponentName> = {
  title: "Components/ComponentName",
  component: ComponentName,
  parameters: {
    docs: {
      page: () => import("./ComponentName.mdx").then((m) => m.default),
    },
  },
  argTypes: {
    // Define component props and controls
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props
  },
};

export const Variant: Story = {
  args: {
    // Variant props
  },
};
```

**Component.mdx Documentation Structure:**
All `.mdx` files must follow this exact pattern:

````markdown
import { Canvas, Meta } from '@storybook/blocks';

import \* as ComponentStories from './Component.stories';

<Meta title="Components/ComponentName" />
 
# ComponentName
 
#### Displays a styled ComponentName component.
 
<Canvas of={ComponentStories.Default} />

## Usage

```typescript
import { ComponentName } from "@oh/ui-components";
```
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

- **Stories must match components**: Every component in `lib/components` must have corresponding stories
- Include all component variants and use cases
- Provide interactive controls for all props
- Add meaningful story names and descriptions
- Test edge cases and error states

### Design Consistency

- Follow the design specifications provided by the design team
- Use Shadcn components as the base and modify them as needed
- Maintain consistency with existing components
- Ensure proper Tailwind CSS usage

### Testing

- Test all component variants in Storybook
- Verify responsive behavior
- Check accessibility compliance
- Ensure proper prop validation

### Code Review Guidelines

When reviewing PRs, check for:

- [ ] Component follows OH design specifications
- [ ] Both `.stories.ts` and `.mdx` files are included
- [ ] Documentation follows the standard pattern
- [ ] All component variants are covered in stories
- [ ] Code is properly typed with TypeScript
- [ ] Accessibility requirements are met
- [ ] Storybook renders without errors

Thank you for contributing to OH UI Components!
