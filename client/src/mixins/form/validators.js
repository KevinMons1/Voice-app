export const useValidatorsStep1 = (data) => {
    const { firstName, lastName, email, password, confirmPassword } = data
    
    try {
        // Check the type
        isString(firstName, 'firstName')
        isString(lastName, 'lastName')
        isString(email, 'email')
        isString(password, 'password')
        isString(confirmPassword, 'confirmPassword')

        // Check is not empty
        isEmpty(firstName, 'firstName')
        isEmpty(lastName, 'lastName')
        isEmpty(email, 'email')
        isEmpty(password, 'password')
        isEmpty(confirmPassword, 'confirmPassword')

        // Check valid data
        isEmail(email, 'email')

        isValidName(firstName, 'firstName')
        isValidName(lastName, 'lastName')

        isValidPassword(password, 'password')

        isSamePassword(password, confirmPassword, 'confirmPassword')
    
        return {
            status: true,
            message: "",
            cause: ""
        }

    } catch (err) {
        return {
            status: false,
            message: err.message,
            cause: err.cause
        }
    }
            
}

const isString = (data, cause) => {
    if (typeof data !== 'string') {
        throw new Error('The type of data is incorrect.', { cause: cause })
    }

    return true
}

// const isArray = (data, cause) => {
//     if (Array.isArray(data)) {
//         throw new Error('The type of data is incorrect.', { cause: cause })
//     }

//     return true
// }

export const isEmpty = (data, cause) => {
    if (data.length > 0) {
        return true
    } else {
        throw new Error('Your entry is empty.', { cause: cause })
    } 
}

export const isEmail = (data, cause) => {
    const reg = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/g
    
    if (!reg.test(data)) {
        throw new Error('Your email is invalid.', { cause: cause })
    } 

    return true
}

export const isValidName = (data, cause) => {
    const reg = /^[a-zA-ZÇ-Ü]+$/g

    if (!reg.test(data)) {
        throw new Error('Not use special characters or number.', { cause: cause })
    }

    return true
}

export const isValidPassword = (data, cause) => {
    const regOneCapitalLetter = /[A-Z]+/g
    const regOneLowerLetter = /[a-z]+/g
    const regOneNumber = /[0-9]+/g
    const regOneSpecialCharacter = /[!-&()+-.:-@[-_|-~§]+/g

    if (data.length < 6) {
        throw new Error('Your password must contain at least 6 characters.', { cause: cause })
    }

    if (!regOneCapitalLetter.test(data)) {
        throw new Error('Your password must contain at least one capital letter.', { cause: cause })
    }

    if (!regOneLowerLetter.test(data)) {
        throw new Error('Your password must contain at least one lowercase letter.', { cause: cause })
    }

    if (!regOneNumber.test(data)) {
        throw new Error('Your password must contain at least one number.', { cause: cause })
    }

    if (!regOneSpecialCharacter.test(data)) {
        throw new Error('Your password must contain at least one special character.', { cause: cause })
    }

    return true
}

const isSamePassword = (password, confirmPassword, cause) => {
    if (password !== confirmPassword) {
        throw new Error('Your password and you confirm password is not the same.', { cause: cause })
    }

    return true
}