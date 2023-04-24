import sha256 from 'crypto-js/sha256';

export const hashPassword = (str: string) => {
    return sha256(str).toString()
}