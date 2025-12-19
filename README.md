# OH UI Components Library

The OH UI Components Library is a component library designed primarily to create uniformity across different OH applications and ensure a common and consistent style for components in all future applications. Built following the design team specifications, the library adheres to OH SmartDoc standards and is distributed through a private Nexus registry to ensure security and control.

## Features

- **Custom Components**: Built on top of Shadcn components and styled with Tailwind CSS.
- **Storybook Integration**: Visualize and test components in isolation.
- **Private Registry**: Secure publishing and installation via Nexus.
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

The library is published to the private Nexus registry via GitHub CI pipelines.

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

5. Navigate to the GitHub pipeline for the tagged commit.
6. Manually trigger the publishing job.

---

## Usage in Consumer Applications

To use the library, consumer applications must:

1. Be connected to the internal VPN.
2. Include the `.npmrc` configuration for the Nexus registry:
   ```
   registry=https://maven.intesys.it/repository/npm
   ```

Then install the library using npm:

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

### Guidelines

- Follow the design specifications provided by the design team.
- Use Shadcn components as the base and modify them as needed.
- Test components in Storybook before merging changes.

### Branching

- Work on feature branches and submit pull requests to `develop`.
