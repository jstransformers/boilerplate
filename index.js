const transformer = {
  name: 'foo',
  inputFormats: ['foo', 'foobar'],
  outputFormat: 'html',
  render(contents) {
    return contents
  },
}

module.exports = transformer
