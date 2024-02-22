export function displayNameFromUserID(userID, onlyFirstName = false) {
    const tokens = userID.split('@')[0].split('.');
    const capTokens = tokens.map((token) => capitalize(token));
    if(onlyFirstName) return capTokens[0];
    return capTokens.join(' ');
}

export function capitalize(s) {
    if(s.length < 2) return s.toUpperCase();
    return s[0].toUpperCase() + s.slice(1);
}