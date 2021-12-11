import type { Request, Response, NextFunction } from 'express';

('use strict');

/**
 * @param {string} [alias] The attribute's name on in the request object (Default: dnt)
 * @return {Function}
 * @public
 */

function expressDnt(alias = 'dnt') {
  return function expressDntMiddleware(
    req: Request,
    _res: Response,
    next: NextFunction
  ) {
    const dnt = req.get(alias);
    req[alias] = !!(dnt && dnt.charAt(0) === '1');
    next();
  };
}

export default expressDnt;
