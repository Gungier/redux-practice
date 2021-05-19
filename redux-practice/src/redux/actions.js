

export function increment(payload) {
    return { type: "increment", payload };
}

export function decrement(payload) {
    return { type: "decrement", payload };
}