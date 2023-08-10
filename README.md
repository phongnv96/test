# React + TypeScript + Vite + Tailwind

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses
  [SWC](https://swc.rs/) for Fast Refresh

## Available Scripts

In the project directory, you can run:

### `yarn start` 

to run client and mock server


# Project libraries
- TailwindCSS and SCSS for styling
- Use Context State global management
- Json-server for mock server (only for chart filter, bc No time to do for all)
- Axios for service call api, make axios instances,..
- useRequest Hook form ahooks handle hook call api

# Special features
- Global loading
- Make authentication for route (you can test it by add access in routes, if user haven't permission auto redirect to not allow page)
- Dynamic layout for routes -> it is possible for multiple layout in application
- Simple follow call api (check in record pages at data chart filter part)
- Can make dynamic theme (not complete yet)

## Project Structure

```code
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- configs            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- context/stores    # global state context/stores
|
+-- test              # test utilities and mock server
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```

A feature could have the following structure:

```code
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- containers  # container handle state full, call services, get state pass to component (Container/Presentation) component
|
+-- hooks       # hooks scoped to a specific feature
|
+-- routes      # route components for a specific feature pages
|
+-- context/stores      # global state context/stores for a specific feature pages
|
+-- types       # typescript types for TS specific feature domain
|
+-- utils       # utility functions for a specific feature
|
+-- index.ts    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
```

Everything from a feature should be exported from the index.ts file which behaves as the public API
of the feature.

You should import stuff from other features only by using:

import {AwesomeComponent} from "@/features/awesome-feature"

and not

import {AwesomeComponent} from "@/features/awesome-feature/components/AwesomeComponent

This was inspired by how NX handles libraries that are isolated but available to be used by the
other modules. Think of a feature as a library or a module that is self-contained but can expose
different parts to other features via its entry point.
