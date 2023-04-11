## LORG SDK Architectural decisions

This document describes the architectural decisions made in the LORG SDK.

### 1. The Entrypoint

The SDK has an entrypoint in `src/app.js`, which is a class `LORG` that has a series of dependency classes (`Movie`).
The constructor of the `LORG` class takes an optional `accessToken` argument, which is used to authenticate for some API operations.
In the constructor of the `LORG`, the HTTP client (in this case, axios) is initialized with the `accessToken`, and the dependency classes are instantiated with the HTTP client.

### 2. The dependency classe

The dependency class is exported from its own file in the `src/services` folder. These services make calls to [The One API](https://the-one-api.dev/) using the optionally-authorized HTTP client with which they were instantiated.
The dependency class have a series of methods that make HTTP requests to the LORG API for operations like listing and getting entities.
These dependency class also support operations like pagination, sorting, and filtering.

### 3. Other decision regarding code structure

The repository contains a `types` folder which contains all the types used across the SDK. It also contains a `utils` folder which contains reusable methods for pagination, filtering
and sorting, again, used across the dependency classes. Unit tests are written using Jest, and are located in the `__tests__` folder and maintain the same file structure as the `src` folder for consistency.
I have added scripts for linting and prettifying the code, and for running the tests in the `package.json` file.
