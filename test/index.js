/*global describe, it*/
var assert = require('assert')
var lib = require('../')

var utils = [
  'Mock',
  'assert',
  'findAll',
  'findWithClass',
  'findAllWithClass',
  'isNode'
]

describe('deku-testutils', function () {
  utils.forEach(function (name) {
    it('exposes the utility ' + name, function () {
      assert(lib[name])
    })
  })
})
