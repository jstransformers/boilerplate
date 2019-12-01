# JSTransformer Boilerplate

Use JSTransformer Boilerplate to create and update transformers.

1. Visit [the Boilerplate Wiki](https://github.com/jstransformers/boilerplate/wiki) on how to get started
2. Remove this top notice from any transformers

# jstransformer-foo

[Foo](http://example.com) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/circleci/build/github/jstransformers/jstransformer-foo/master)](https://circleci.com/gh/jstransformers/jstransformer-foo/tree/master)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-foo/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-foo)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-foo/master.svg)](http://david-dm.org/jstransformers/jstransformer-foo)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-foo.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-foo.svg)](https://www.npmjs.org/package/jstransformer-foo)

## Installation

    npm install jstransformer-foo

## API

```js
var foo = require('jstransformer')(require('jstransformer-foo'))

foo.render('blah').body
//=> 'blah'
```

## Development

Please feel free to submit pull requests for any feature requests, bug fixes etc.

To test your code locally:

- `npm install` - install dependencies
- `npm test` - runs tests

Your PR title should begin with:

  - `feat: ` - if your change requires a minor release, because it introduces new feature
  - `fix: ` - if your change requires a patch release, because it fixes a bug
  - `perf: ` - if your change requires a patch release, because it improves performance
  - `docs: ` - if you have made no code changes, and no release is required.
  - `chore: ` - if you have changed some config/dependencies/CI, but no release is required.

If your PR includes a breaking change, the body of a commit in your PR should include: `BREAKING CHANGE: a description of what change was made`.

## License

MIT
