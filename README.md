
# Armada UI Kit

Armada UI Kit is a custom React component library designed to provide a simple and efficient way to build user interfaces. This library is built with modern web development practices in mind, leveraging popular libraries like React, MUI, Styled Components, and Rollup to ensure a seamless development experience.


## Features

- Customizable Components: Easily customizable React components.
- TypeScript Support: Built with TypeScript for better type safety and developer experience.
- Storybook Integration: Comes with Storybook for component documentation and development.
- Jest Testing: Comprehensive test coverage with Jest and React Testing Library.


## Installation

To install Armada UI Kit, run the following command:

```bash
  npm install @armadasystems/armada-ui-kit
```
or if you are using Yarn:
```bash
  yarn add @armadasystems/armada-ui-kit
```

    
## Usage/Examples

To use the components in your React project, simply import them as follows:

```javascript
import { Button } from '@armadasystems/armada-ui-kit';

function App() {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
}

export default App;
```


## Development
### Prerequisites
- Node.js (>= 16.x)
- npm 
### Setting Up the Development Environment
-  Clone the repository:
```bash
    git clone git@github.com:armadasystems/armada-ui-kit.git
    cd armada-ui-kit    
```
-  Install dependencies:
```bash
    npm Install    
```


## Scripts
- **Build the library:** This will build the library using Rollup.
```bash
    npm run build
```
- **Run tests:** This will run all the tests using Jest.
```bash
   npm test
```
- **Start Storybook:** This will start the Storybook server on port 6006.
```bash
   npm run storybook
```
- **Build Storybook:** This will build the Storybook for deployment.
```bash
   npm run build-storybook
```


## Contributing

To contribute to this project, follow these steps:

    1. Branch name should be in the form of `feature/<feature_name>` or `fix/<specific_issue_name>`.
    2. Make your changes and commit them. Do format comments like sentences.
    3. Create the pull request to `main` branch.

### PR Naming Convention

When creating a pull request, ensure the title includes the appropriate version bump keyword:

- **major** → For breaking changes
- **minor** → For new features that are backward compatible
- **patch (default)** → For bug fixes and small improvements


## Tools and Frameworks

- [React-Redux](https://react-redux.js.org/)
- [Material-UI](https://mui.com/)
- [Styled Components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)
