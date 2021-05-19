

export function increment(payload) {
    return { type: "increment", payload };
}

export function decrement(payload) {
    return { type: "decrement", payload };
}

export function login() {
    return { type: "login" };
}

export function logout() {
    return { type: "logout" };
}
