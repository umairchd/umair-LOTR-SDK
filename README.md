A simple and lightweight Javascript SDK for the [One API](https://the-one-api.dev/).

![Tests](https://github.com/ajejoseph22/joseph-aje-sdk/workflows/CI/badge.svg)
[![npm version](https://badge.fury.io/js/@ajejoseph22%2FLORG-sdk.svg)](https://badge.fury.io/js/@ajejoseph22%2FLORG-sdk)

## Installation

```sh
npm i @umairchd/LORG-sdk
```

### Authentication

To use ALL the features of the LORG SDK, you need to provide an `accessToken`. That token is available for free on the [One API](https://the-one-api.dev/sign-up) website once you sign up.
For `Movie`, `Quote` interfaces, you will need to provide an `accessToken`.

### Quick Start

```js
import LORG from '@umairchd/LORG-sdk';

const client = new LORG('<YOUR_ACCESS_TOKEN>');

client.character
  .list({
    limit: 10, // limit the number of responses to 10
  })
  .then((characters) => {
    // handle data
  })
  .catch((err) => {
    // handle error
  });
```

That's it!

## Usage

The SDK models the [One API](https://the-one-api.dev/documentation) and each property from the SDK matches a section in the API documentation.

### Examples

To list all movies:

```js
import LORG from '@umairchd/LORG-sdk';

const client = new LORG(); // accessToken not needed

client.movie
  .list({
    limit: 10, // limit the number of responses to 10
  })
  .then((movies) => {
    // handle data
  })
  .catch((err) => {
    // handle error
  });
```
