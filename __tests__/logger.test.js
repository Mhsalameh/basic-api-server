'use strict';

const logger = require('../src/middleware/logger.js')

describe('testing logger',()=>{

    let consoleSpy;
    let req={method: 'GET', path: '/person'};
    let res={};
    let next=jest.fn();

    beforeEach(()=>{
        consoleSpy = jest.spyOn(console,'log').mockImplementation()
        console.log(consoleSpy);
    })

    afterAll(()=>{
        consoleSpy.mockRestore()
    })

    it('testing log',()=>{
        logger(req,res,next)
        expect(consoleSpy).toHaveBeenCalledWith(`method: ${req.method}`)
        expect(consoleSpy).toHaveBeenCalledWith(`path: ${req.path}`)

    })

    it('testing next',()=>{
        logger(req,res,next);
        expect(next).toHaveBeenCalled()
    })

})