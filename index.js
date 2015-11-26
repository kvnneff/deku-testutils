var Mock = require('component-mock')
var assert = require('assert-element')
var isNode = require('deku-component-is-node')
var findAll = require('deku-component-find-all')
var findWithClass = require('deku-component-find-class').findWithClass
var findAllWithClass = require('deku-component-find-class').findAllWithClass

module.exports = {
  Mock: Mock,
  assert: assert,
  isNode: isNode,
  findAll: findAll,
  findWithClass: findWithClass,
  findAllWithClass: findAllWithClass
}
