const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person20 = {
    role: ADMIN,
    role2: Role.ADMIN,
};

if (person20.role === Role.AUTHOR) {
    console.log("is admin");
}
