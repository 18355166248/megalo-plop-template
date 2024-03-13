const utils = require("../utils");

function getPath(pathStr) {
  const rootPath = process.cwd();
  return `${rootPath}/src/pages${pathStr}`;
}

const templatePath = "page/react-crud-mi-zustand/template";

module.exports = {
  description:
    "生成一个带 增删改查功能的 react 状态管理为 zustand 组件库为 mi-design 的代码文件夹", // 描述这个generate的作用
  prompts: [
    {
      type: "input", // 问题的类型
      name: "pathName", // 问题对应得到答案的变量名，可以在acitons中使用该变量
      message:
        "默认在 src/pages 下创建, 请输入需要创建的路径或者文件夹名 输入例: One/Two 或 Two即可", // 在命令行中的问题
      validate: (name) => !!name.trim(),
    },
    {
      type: "input", // 问题的类型
      name: "ZHName", // 问题对应得到答案的变量名，可以在acitons中使用该变量
      message: "中文名", // 在命令行中的问题
      validate: (name) => !!name.trim(),
    },
  ],
  actions: (data) => {
    // 这里可以通过data获取输入的pathname
    const name = data.pathName.split("/");
    const LastName = name[name.length - 1];
    const excuteLastName = name.slice(0, -1).join("/");

    const firstUpperCase = utils.setFirstUpperCase(LastName); // 文件名
    const path = excuteLastName ? `/${excuteLastName}` : excuteLastName; // 路径

    const ZHName = data.ZHName;

    const actions = [
      {
        type: "add", // 操作类型 添加文件
        path: getPath(
          `${path}${`/${firstUpperCase}`}/index${firstUpperCase}.tsx`
        ), // 添加的文件的路径
        templateFile: `${templatePath}/index.hbs`,
        data: {
          name: LastName,
          firstUpperName: firstUpperCase,
          ZHName,
        },
      },
      {
        type: "add", // 操作类型 添加文件
        path: getPath(`${path}${`/${LastName}`}/Table${firstUpperCase}.tsx`), // 添加的文件的路径
        templateFile: `${templatePath}/Table.hbs`,
        data: {
          name: LastName,
          firstUpperName: firstUpperCase,
          ZHName,
        },
      },
      {
        type: "add", // 操作类型 添加文件
        path: getPath(`${path}${`/${LastName}`}/${LastName}.store.ts`), // 添加的文件的路径
        templateFile: `${templatePath}/index.store.hbs`,
        data: {
          name: LastName,
          firstUpperName: firstUpperCase,
          ZHName,
        },
      },
      {
        type: "add", // 操作类型 添加文件
        path: getPath(
          `${path}${`/${LastName}`}/FilterForm${firstUpperCase}.tsx`
        ), // 添加的文件的路径
        templateFile: `${templatePath}/FilterForm.hbs`,
        data: {
          name: LastName,
          firstUpperName: firstUpperCase,
          ZHName,
        },
      },
      {
        type: "add", // 操作类型 添加文件
        path: getPath(
          `${path}${`/${LastName}`}/DetailModal${firstUpperCase}.tsx`
        ), // 添加的文件的路径
        templateFile: `${templatePath}/DetailModal.hbs`,
        data: {
          name: LastName,
          firstUpperName: firstUpperCase,
          ZHName,
        },
      },
      {
        type: "add", // 操作类型 添加文件
        path: getPath(`${path}${`/${LastName}`}/constant${firstUpperCase}.tsx`), // 添加的文件的路径
        templateFile: `${templatePath}/constant.hbs`,
        data: {},
      },
    ];

    return actions;
  },
};
