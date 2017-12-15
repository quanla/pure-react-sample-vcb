const bankList = {
    "state-owned": [
        {
            name: "NH Nông nghiệp&PT Nông thôn VN-AGribank",
            code: "agri",
            provinces: [
                {code: "hn", name: "Hà Nội", branches: [
                    {code: "hn01", name: "NHNo&PTNT Bà Triệu HN"},
                    {code: "hn02", name: "NHNo&PTNT Ba Vì"},
                ]},
                {code: "hcm", name: "TP. Hồ Chí Minh"}
            ]
        },
        {
            name: "NH Phát triển VN (VDB)",
            code: "vdb",
        }
    ],
    "jsc": []
};

exports.bankList = bankList;