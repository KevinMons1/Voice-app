import { isEmpty } from "./validators"

/*global describe, it, expect*/

describe('useValidatorsStep1()', () => {
    describe('isEmpty()', () => {
        it('Should not throw a error if I give a number or an array', () => {
            const inputString = 'hello world'
            const inputArray = [1, 2, 3]
    
            const isEmptyFuncString = () => isEmpty(inputString)
            const isEmptyFuncArray = () => isEmpty(inputArray)
    
            expect(isEmptyFuncString).not.toThrow()
            expect(isEmptyFuncArray).not.toThrow()
        })

        it('Should throw a error if I give a empty string ou array', () => {
            const inputString = ''
            const inputArray = []
    
            const isEmptyFuncString = () => isEmpty(inputString)
            const isEmptyFuncArray = () => isEmpty(inputArray)
    
            expect(isEmptyFuncString).toThrow()
            expect(isEmptyFuncArray).toThrow()
        })

        it('Should throw a error if I not give a string or an array type', () => {
            const inputNumber = 1
            const inputObject = {}
            const inputBoolean = true

            const isEmptyFuncNumber = () => isEmpty(inputNumber)
            const isEmptyFuncObject = () => isEmpty(inputObject)
            const isEmptyFuncBoolean = () => isEmpty(inputBoolean)

            expect(isEmptyFuncNumber).toThrow()
            expect(isEmptyFuncObject).toThrow()
            expect(isEmptyFuncBoolean).toThrow()
        })
    })
})