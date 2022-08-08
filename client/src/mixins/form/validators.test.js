import { useValidatorsStep1, isEmpty, isValidName, isEmail, isValidPassword } from "./validators"

/*global describe, it, expect*/

const dataFormStep1 = {
    firstName: "John",
    lastName: "Doe",
    email: "test@gmail.com",
    password: "HelloWorld1#",
    confirmPassword: "HelloWorld1#",
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

describe('isEmail()', () => {
    it('Should throw a error if I give invalid email', () => {
        const input1 = "testgmail.com"
        const input2 = "tes&t@gmail.com"
        const input3 = "@gmail.com"
        const input4 = "test@gmailcom"
        const input5 = "test@.com"
        const input6 = "test@gmai#l.com"
        const input7 = "test@gmail."
        const input8 = "test@gmail.c&om"

        const isEmailFunc1 = () => isEmail(input1)
        const isEmailFunc2 = () => isEmail(input2)
        const isEmailFunc3 = () => isEmail(input3)
        const isEmailFunc4 = () => isEmail(input4)
        const isEmailFunc5 = () => isEmail(input5)
        const isEmailFunc6 = () => isEmail(input6)
        const isEmailFunc7 = () => isEmail(input7)
        const isEmailFunc8 = () => isEmail(input8)

        expect(isEmailFunc1).toThrow()
        expect(isEmailFunc2).toThrow()
        expect(isEmailFunc3).toThrow()
        expect(isEmailFunc4).toThrow()
        expect(isEmailFunc5).toThrow()
        expect(isEmailFunc6).toThrow()
        expect(isEmailFunc7).toThrow()
        expect(isEmailFunc8).toThrow()
    })

    it('Should not throw a error if I give valid email', () => {
        const input = "test@gmail.com"

        const isEmailFunc = () => isEmail(input)

        expect(isEmailFunc).not.toThrow()
    })
})

describe('isValidPassword()', () => {
    it('Should throw a error if I give invalid password', () => {
        const input1 = ''
        const input2 = 'helloworld'
        const input3 = 'HELLOWORLD'
        const input4 = 'Helloworld'
        const input5 = 'Helloworld1'

        const isValidPasswordFunc1 = () => isValidPassword(input1)
        const isValidPasswordFunc2 = () => isValidPassword(input2)
        const isValidPasswordFunc3 = () => isValidPassword(input3)
        const isValidPasswordFunc4 = () => isValidPassword(input4)
        const isValidPasswordFunc5 = () => isValidPassword(input5)

        expect(isValidPasswordFunc1).toThrow()
        expect(isValidPasswordFunc2).toThrow()
        expect(isValidPasswordFunc3).toThrow()
        expect(isValidPasswordFunc4).toThrow()
        expect(isValidPasswordFunc5).toThrow()
    })

    it('Should throw a error if I give valid password', () => {
        const input = 'Helloworld1#'

        const isValidPasswordFunc = () => isValidPassword(input)

        expect(isValidPasswordFunc).not.toThrow()
    })
})