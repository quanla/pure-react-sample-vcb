

const accountApi = {
    getAccounts(types) {
        console.log(types);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(types[0] == "D" ? [
                    {
                        acc_no: "000000000000",
                        balance: 122000,
                    },
                    {
                        acc_no: "111111111111",
                        balance: 2222000,
                    },
                ] : [
                ])
            }, 600);
        });
    },
};

exports.accountApi = accountApi;