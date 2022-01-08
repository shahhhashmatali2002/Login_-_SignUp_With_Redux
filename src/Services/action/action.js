export const signUP = (data) => {
    return {
        type: 'Create_Account',
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
        // payload: {
        //     id: new Date().getTime().toString(),
        //     firstName: data.firstName,
        //     lastName: data.lastName,
        //     Email: data.Email,
        //     Password: data.Password,
        //     ConfrimPassword: data.ConfrimPassword
        // }
    }
}