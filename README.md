<p align="center">
  <h1 align="center">Gridsome Website by Storyblok</h1>
</p>

![Site preview image](./src/image-preview.png)

Check the website [here](https://demo.storyblok.com/).

## Installation

Clone this project with:

```sh
$ git clone https://github.com/storyblok/gridsome-multilanguage-website.git
```

### Install all dependencies

```sh
$ yarn # or npm install
```

### Run project in develop mode

```sh
$ yarn develop # or npm run develop
```

### Build the project

```sh
$ yarn build # or npm run build
```

## Configuration

If you don't already have a <strong>Storyblok</strong> account, create one, it's fast, click [here](https://app.storyblok.com/#!/).

Change the access token by your token, in the file  `gridsome.config.js`, the file is at the root of the project.

```js
  // ... previous code
  options: {
    client: {
      accessToken: 'Your_Access_Token_Here'
    },
    version: 'published',
  // ...
```

### Storyblok Preview Location Configuration

See how to set up your location [here](https://www.storyblok.com/tp/gridsome-multilanguage-website-tutorial#add-the-editor-page).

---

<p align="center">
  <h5 align="center">Powered by <a href="https://www.storyblok.com/" title="link to the Storyblok website">Storyblok</a></h5>
</p>
