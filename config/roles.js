const allRoles = {
    user: ['user'],
    admin: ['getUsers', 'manageUsers', 'getGroceries','manageGroceries'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
    roles,
    roleRights,
};
