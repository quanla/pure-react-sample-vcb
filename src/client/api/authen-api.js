

const authenApi = {
    checkLogin({acc_no, password, captcha}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    captcha.toLowerCase() != "4e180" ? {
                        result: "wrong_captcha"
                    } : (acc_no != "123" || password != "123") ? {
                        result: "wrong_login"
                    } : {
                        result: "success",
                        token: "fewgwegweg"
                    }
                )
            }, 600);
        });
    },
};

exports.authenApi = authenApi;