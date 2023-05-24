/**
 * Allow crypto to work in browser and Node.
 * @see https://stackoverflow.com/a/70981544/1736454
 */
export default globalThis.crypto || (await import("node:crypto")).default.webcrypto;
