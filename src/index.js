module.exports = function check(str, bracketsConfig) {
    let tempArr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j][1] === str[i] &&
                bracketsConfig[j][0] === tempArr[tempArr.length - 1]) {
                tempArr.pop();
            } else if (bracketsConfig[j][0] === str[i]) {
                tempArr.push(str[i]);
            } else if (bracketsConfig[j][1] === str[i]) {
                return false;
            }
        }
    }
    return tempArr.length === 0;
};
