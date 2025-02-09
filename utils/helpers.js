// A helper function to format dates
export async function googleAuthClick(_inG, _outG) {
    "use server"
    !session?.user ? await _inG('google') : await _outG()
}

// A helper function to capitalize words
export function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
