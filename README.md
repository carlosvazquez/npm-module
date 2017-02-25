Json to Config file
==================

A small library for creating a schema file from json file data.

## Installation

  npm install json-to-config --save-dev

## Usage

  var json_to_config = require('json-to-config')
      escape = json_to_config.escape,
      unescape = json_to_config.unescape;

  var html = '<h1>Hello World</h1>',
      escaped = escape(html),
      unescaped = unescape(escaped);

  console.log('html', html, 'escaped', escaped, 'unescaped', unescaped);

## Tests

  npm test // shortcut to npm run test

## Contributing

Pending docs.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
* 0.1.2 Initial release
* 0.1.3 Initial release