const { configPaths } = require('react-app-alias-ex');
const { CracoAliasPlugin } = require('react-app-alias-ex');

const aliasMap = configPaths('./tsconfig.paths.json');

const options = {
  alias: aliasMap,
};

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options,
    },
  ],
};
