const storage = require('node-persist');

/*
    @function: createUser
    @param: userName <string>
    @param: userData <JSONObject>
    @returns: Promise

    @desc - takes in a unique username, such as
            taqqui.karim and a JSON object representing
            user info, such as: {
                "firstName": "Taq",
                "lastName": "Karim",
                "phoneNumber": "1234567890"
            }
            and persists to memory
*/
const createUser = (userName, userData) => {
    return storage.init().then(() => {
        return storage.setItem(userName, userData);
    })
    
}

/*
    @function: readUser
    @param: userName <string>
    @returns: Promise

    @desc - takes in a username, such as
            taqqui.karim and returns a promise 
            wrapping a JSON object representing
            user info, such as: {
                "firstName": "Taq",
                "lastName": "Karim",
                "phoneNumber": "1234567890"
            }
*/
const readUser = userName => {
    // return promise!
    return storage.init().then(() => {
        return storage.getItem(userName);
    });
}

/*
    @function: updateUser
    @param: userName <string>
    @param: userData <JSONObject>
    @returns: Promise

    @desc - takes in a username, such as
            taqqui.karim and returns a promise 
            wrapping a JSON object representing
            user info, such as: {
                "firstName": "Taq",
                "lastName": "Karim",
                "phoneNumber": "1234567890"
            }
*/

const updateUser = (userName, userData) => {
    return createUser(userName, userData)
}

/*
    @function: removeUser
    @param: userName <string>
    @returns: Promise

    @desc - takes in a username, such as
            taqqui.karim and removes item
*/
const deleteUser = userName => {
    return storage.init()
        .then(() => {
            return storage.removeItem(userName);
        })
}

const allUsers = () => {
  return storage.init().then(() => {
    return storage.values()
  });
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
    allUsers
}

