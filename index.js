var nextTick = require('process-nextick-args')

var authBody = require('./lib/authBody')
var authHeader = require('./lib/authHeader')

function bearer (req, cb) {
  var headerToken = authHeader(req)
  if (headerToken) return nextTick(cb, null, headerToken)
  else authBody(req, cb)
}

module.exports = bearer
