module.exports = function check(str, bracketsConfig) {
    if ((str.length % 2) !== 0) return false;

    let brConfig = bracketsConfig.join("").replace(/,/g, '');
    brConfig = Array.from(brConfig);
    let leftBrackets = []
        , rightBrackets = []
        , sameBrackets = []
        , tempArr = []
        , index = 0;

    for (let i = 0; i <= brConfig.length - 1; i += 2) {
        if (brConfig[i] === brConfig[i + 1]) {
            sameBrackets.push(brConfig[i]);
        }
        else {
            leftBrackets.push(brConfig[i]);
            rightBrackets.push(brConfig[i + 1]);
        }
    }

    for (let i = 0; i <= str.length; ++i) {
//if same brackets
        for (let j = 0; j <= sameBrackets.length; ++j) {
            if (str[i] === sameBrackets[j]) {

            }
        }
//else
        for (let j = 0; j <= leftBrackets.length; ++j) {
            if (str[i] === leftBrackets[j]) {
                tempArr.push(str[i]);
                index = j;
            } else {
                for (let j = 0; j <= rightBrackets.length; ++j) {
                    if (str[i] === rightBrackets[j]
                        && tempArr.length > 0) {
                        if (index === j) {
                            tempArr.pop(str[i]);
                        } else {
                            return false;
                        }
                    }
                }
            }
        }
    }

return tempArr.length !== 0;
};
