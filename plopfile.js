const reactCRUDHookGenerator = require("./page/react-crud-hook/prompt");
const reactCRUDMobxGenerator = require("./page/react-crud-mobx/prompt");
const reactCRUDMiDesignGenerator = require("./page/react-crud-mi-design/prompt");

module.exports = function (plop) {
  plop.setGenerator("react-curd-hook", reactCRUDHookGenerator);
  plop.setGenerator("react-curd-mobx", reactCRUDMobxGenerator);
  plop.setGenerator("react-curd-mi-design", reactCRUDMiDesignGenerator);
};
