export function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
}

export function capitalizeWithRegex(str: string) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}