'use strict'


/**
 * @param {string} [alias] The attribute's name on in the request object (Default: dnt)
 * @return {Function}
 * @public
 */

function expressDnt(alias = 'dnt') {
   return function expressDntMiddleware(req, res, next) {
      req[alias] = !!(req.headers.dnt && req.headers.dnt.charAt(0) === '1')
      next()
   }
}


module.exports = expressDnt
