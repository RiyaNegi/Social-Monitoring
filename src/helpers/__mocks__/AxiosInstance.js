module.exports = {
    get: jest.fn().mockImplementation((url) => {
        if (url === '/buzz') {
            return Promise.resolve({
                data: {
                    "highlow": [
                        {
                            "date": "2021-06-06",
                            "high": 6,
                            "low": 4
                        }, {
                            "date": "2021-06-07",
                            "high": 2,
                            "low": 8
                        }
                    ]
                }
            });
        }
    }),
    post: jest.fn().mockImplementation((url) => {
        if (url === '/auth') {
            console.log("mock auth was called")
            return Promise.resolve({
                data: { access_token: "riya" }
            });
        }
        if (url === '/buzz') {
            return Promise.resolve({
                data: {
                    "highlow": [
                        {
                            "date": "2021-06-03",
                            "high": 5,
                            "low": 1
                        },
                        {
                            "date": "2021-06-04",
                            "high": 2,
                            "low": 5
                        },
                        {
                            "date": "2021-06-05",
                            "high": 10,
                            "low": 5
                        },
                        {
                            "date": "2021-06-06",
                            "high": 6,
                            "low": 4
                        }, {
                            "date": "2021-06-07",
                            "high": 2,
                            "low": 8
                        }
                    ]
                }
            });
        }
    }),
    create: jest.fn(function () {
        return this;
    })
};