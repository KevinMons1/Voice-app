export const useValidatorsStep1 = (data) => {
    const { firstName, lastName, email, password, confirmPassword } = data
    
    try {
        // Empty
        isEmpty(firstName, 'firstName')
        isEmpty(lastName, 'lastName')
        isEmpty(email, 'email')
        isEmpty(password, 'password')
        isEmpty(confirmPassword, 'confirmPassword')

        //

    } catch (err) {
        console.log(err.message);
        console.log(err.cause);
    }
            
}

export const isString = (data, cause) => {
 // Change les validate de type de isEmpty et donc ses tests aussi
}

export const isArray = (data, cause) => {

}

export const isEmpty = (data, cause) => {
    if (typeof data === 'string' || Array.isArray(data)) {
        if (data.length > 0) {
            return true
        } else {
            throw new Error('Your entry is empty.', { cause: cause })
        } 
    } else {
        throw new Error('The type of data is incorrect.', { cause: cause })
    }
}

export const isEmail = (data) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!re.test(data)) {
        return true
    } else {
        throw new Error('error')
    }
}