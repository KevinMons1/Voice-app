import { useValidatorsStep1, isEmpty, isValidName } from "./validators"

/*global describe, it, expect*/

const dataFormStep1 = {
    firstName: "John",
    lastName: "Doe",
    email: "test@gmail.com",
    password: "123456",
    confirmPassword: "123456",
}

describe('useValidatorsStep1()', () => {
    it('Should return status false if I give invalid data', () => {
        const _dataFormStep1InvalidType = {
            ...dataFormStep1,
            firstName: true
        }

        const _dataFormStep1EmptyData = {
            ...dataFormStep1,
            firstName: ""
        }

        const _dataFormStep1InvalidData = {
            ...dataFormStep1,
            firstName: "John&"
        }

        const resultInvalidType = useValidatorsStep1(_dataFormStep1InvalidType)
        const resultEmptyData = useValidatorsStep1(_dataFormStep1EmptyData)
        const resultInvalidData = useValidatorsStep1(_dataFormStep1InvalidData)
        
        expect(resultInvalidType).toMatchObject({ status: false })
        expect(resultEmptyData).toMatchObject({ status: false })
        expect(resultInvalidData).toMatchObject({ status: false })
    })

    it('Should return status true if I give valid data', () => {
        const result = useValidatorsStep1(dataFormStep1)
        
        expect(result).toMatchObject({ status: true })
    })
})

describe('isEmpty()', () => {
    it('Should not throw a error if I give not empty data', () => {
        const inputString = 'hello world'
        const inputArray = [1, 2, 3]

        const isEmptyFuncString = () => isEmpty(inputString)
        const isEmptyFuncArray = () => isEmpty(inputArray)

        expect(isEmptyFuncString).not.toThrow()
        expect(isEmptyFuncArray).not.toThrow()
    })

    it('Should throw a error if I give empty data', () => {
        const inputString = ''
        const inputArray = []

        const isEmptyFuncString = () => isEmpty(inputString)
        const isEmptyFuncArray = () => isEmpty(inputArray)

        expect(isEmptyFuncString).toThrow()
        expect(isEmptyFuncArray).toThrow()
    })
})

describe('isValidName()', () => {
    it('Should throw a error if I give invalid data', () => {
        const inputString = "John&"

        const isValidNameFunc = () => isValidName(inputString)

        expect(isValidNameFunc).toThrow()
    })
})