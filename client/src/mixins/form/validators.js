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
    
        return {
            status: true
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

const isEmail = (data, cause) => {
    const reg = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/g
    
    if (reg.test(data)) {
        throw new Error('Your email is invalid.', { cause: cause })
    } 

    return true
}

export const isValidName = (data, cause) => {
    const reg = /^[a-zA-ZÇ-Ü]+$/

    if (!reg.test(data)) {
        throw new Error('Not use special characters or number.', { cause: cause })
    }

    return true
}