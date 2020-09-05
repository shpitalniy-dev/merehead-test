import constants from '../../../constants/constants';

export async function getUsers() {
    const url = `${constants.server}/users`;
    return await fetch(url)
        .then(response => response)
        .catch(error => error);
};

export async function addUser(user) {
    const url = `${constants.server}/users`;
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then(response => response)
        .catch(error => error);
};

export async function deleteUser(id) {
    const url = `${constants.server}/user/${id}`;
    return await fetch(url, { method: 'DELETE' })
        .then(response => response)
        .catch(error => error);
};

export async function updateUser(id, user) {
    const url = `${constants.server}/user/${id}`;
    return await fetch(url, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then(response => response)
        .catch(error => error);
};