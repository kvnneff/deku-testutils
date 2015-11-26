var Mock = require('component-mock')
var mount = require('deku-component-mount')
var assert = require('assert-element')
var isNode = require('deku-component-is-node')
var findAll = require('deku-component-find-all')
var findWithClass = require('deku-component-find-class').findWithClass
var findAllWithClass = require('deku-component-find-class').findAllWithClass

module.exports = {
  Mock: Mock,
  mount: mount,
  assert: assert,
  isNode: isNode,
  findAll: findAll,
  findWithClass: findWithClass,
  findAllWithClass: findAllWithClass
}
