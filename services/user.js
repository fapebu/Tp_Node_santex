const { userProvider } = require("../providers");
const login = async (User) => {
    return await userProvider.login(User);
  };

  module.exports = {login};