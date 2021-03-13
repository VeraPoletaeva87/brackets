module.exports = function check(str, bracketsConfig) {
    // your solution
    if (!str || str.length === 0 || str.length % 2 !== 0) {
        return false;
    }
    
    const pairs = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        const open = bracketsConfig[i][0];
        const close = bracketsConfig[i][1];
        pairs.push(`${open}${close}`);
    }
    
    let hasPairs = true;
    let strToCut = str;
    
    while (hasPairs) {
        let wasRemoved = false;
        for (let i = 0; i < pairs.length; i++) {
            const pair = pairs[i];
            if (strToCut.indexOf(pair) !== -1) {
                strToCut = strToCut.replace(pair, '');
                wasRemoved = true;
            }
        }
        hasPairs = wasRemoved;
    }
    
    return strToCut.length === 0;
};
