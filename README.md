# Modusin Web with React

> Modusin is a publishing network for learners

The goal of this app is to clone a [Medium](https://medium.com) web app, called [Modusin](https://modusin.com).

![Screenshot](./screenshot.png)

## Tech Stack

- Node.js
- React.js
- React Router
- Redux
- Netlify

--------------------------------------------------------------------------------

## Development

### Application

Install `yarn` with `npm`

```sh
npm install -g yarn
```

### Running

```sh
yarn install
yarn dev
```

--------------------------------------------------------------------------------

## Deployment

### Infrastructure

GitHub => Netlify => CloudFlare => modusin.com

### Application

`node` => `react-scripts`

### Running

```sh
yarn build
yarn deploy
```

--------------------------------------------------------------------------------

## Component Architecture

### Pages

| Route       | Component
|-------------|----------
| `/`         | home
| `/post/:id` | post
| `/register` | register
| `/login`    | login
| `/profile`  | profile
| `/setting`  | setting

### Size

#### Small

- Logo
- Topic
- SearchBox
- ActionButton
- ActionAvatar
- SectionTitle
- PostTitle
- PostImage
- PostSnippet
- Avatar
- MetaText
- MetaTextSmall
- FooterText
- ActionInput

#### Medium

- PageTitle
- PageSubtitle
- PageText
- ActionBar
  - SearchBox
  - ActionButton
  - ActionAvatar
- TopicTags
  - Array of Topic
- FeaturedPost
  - PostTitle
  - PostImage
  - PostSnippet
  - MetaText
- SmallPost
  - PostTitle
  - PostImage
  - PostSnippet
  - MetaText
  - MetaTextSmall
- ProfileBar
  - Avatar
  - MetaText
  - MetaTextSmall
- FooterTexts
  - FooterText

#### Large

- NavigationHeader
  - Logo
  - ActionBar
  - TopicTags
- FeaturedPosts
  - Array of FeaturedPost
- TopPosts
  - Array of SmallPost
- PostContent
  - ProfileBar
  - PostTitle
  - PostImage
  - PostTextContent

#### Template

- Provider
- Router
- PageCommon
- PagePost

--------------------------------------------------------------------------------

## License

[MIT License](./LICENSE)
