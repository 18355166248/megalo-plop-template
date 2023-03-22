const reactCRUDHookGenerator = require('./page/react-crud-hook/prompt');

module.exports = function (plop) {
  plop.setGenerator('react-curd-hook', reactCRUDHookGenerator);
};
