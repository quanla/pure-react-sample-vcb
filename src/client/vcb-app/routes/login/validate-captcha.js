
const StringUtil = require("../../../../utils/string-util").StringUtil;
const {simple} = RlfDemo.RLF.validates;

exports.captcha = simple("captcha", (val) => {
    if (StringUtil.isEmpty(val)) {
        return true;
    }

    return (/^[a-f0-9]+$/i).test(val);
});