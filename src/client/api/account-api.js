

const accountApi = {
    getAccounts(types) {
        // console.log(types);
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

    getAccountDetail(acc_no) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    type: "D",
                    balance: 124412,
                    usable_balance: 113124,
                    can_spend: 123124,
                    on_hold: 12312,
                    profit: 1231,
                })
            }, 600);
        });
    },

    queryTransactions(accNo, timeRange) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve([1,2,3]);
            }, 600);
        });
    }
};

exports.accountApi = accountApi;