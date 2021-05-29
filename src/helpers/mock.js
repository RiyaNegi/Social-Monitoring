export default {
  get: jest.fn().mockImplementation((url) => {
    console.log("hey mock theree")
    return Promise.resolve({
      data: [
        {
          "name": "1st Jan",
          "low": 2,
          "high": 4
        }
      ]
    });
  }),
};