const utils = require('../utils');

module.exports = {
  description: 'generate a controller', // 描述这个generate的作用
  prompts: [
    {
      type: 'input', // 问题的类型
      name: 'pathName', // 问题对应得到答案的变量名，可以在acitons中使用该变量
      message: '文件名称( 要带文件后缀!!! )', // 在命令行中的问题
      validate: name => !!name.trim(),
    },
    {
      type: 'input', // 问题的类型
      name: 'ZHName', // 问题对应得到答案的变量名，可以在acitons中使用该变量
      message: '中文名', // 在命令行中的问题
      validate: name => !!name.trim(),
    },
  ],
  actions: data => {
    // 这里可以通过data获取输入的pathname
    const name = data.pathName.split('/');
    const LastName = name[name.length - 1];
    LastName[0] = LastName[0].toLocaleUpperCase();
    const excuteLastName = name.slice(0, -1).join('/');

    const firstUpperCase = utils.setFirstUpperCase(LastName); // 文件名
    const path = excuteLastName ? `/${excuteLastName}` : excuteLastName; // 路径

    const ZHName = data.ZHName;

    const actions = [
      {
        type: 'add', // 操作类型 添加文件
        path: `src/pages${path}${`/${LastName}`}/index${firstUpperCase}.tsx`, // 添加的文件的路径
        templateFile: 'src/plop-template/page/template/index.hbs',
        data: {
          name: LastName,
          firstUpperName: firstUpperCase,
          ZHName,
        },
      },
      {
        type: 'add', // 操作类型 添加文件
        path: `src/pages${path}${`/${LastName}`}/Table${firstUpperCase}.tsx`, // 添加的文件的路径
        templateFile: 'src/plop-template/page/template/Table.hbs',
        data: {
          name: LastName,
          firstUpperName: firstUpperCase,
          ZHName,
        },
      },
      {
        type: 'add', // 操作类型 添加文件
        path: `src/pages${path}${`/${LastName}`}/${LastName}.context.ts`, // 添加的文件的路径
        templateFile: 'src/plop-template/page/template/index.context.hbs',
        data: {
          name: LastName,
          firstUpperName: firstUpperCase,
          ZHName,
        },
      },
      {
        type: 'add', // 操作类型 添加文件
        path: `src/pages${path}${`/${LastName}`}/${LastName}.models.ts`, // 添加的文件的路径
        templateFile: 'src/plop-template/page/template/index.models.hbs',
        data: {
          name: LastName,
          firstUpperName: firstUpperCase,
          ZHName,
        },
      },
      {
        type: 'add', // 操作类型 添加文件
        path: `src/pages${path}${`/${LastName}`}/FilterForm${firstUpperCase}.tsx`, // 添加的文件的路径
        templateFile: 'src/plop-template/page/template/FilterForm.hbs',
        data: {
          name: LastName,
          firstUpperName: firstUpperCase,
          ZHName,
        },
      },
      {
        type: 'add', // 操作类型 添加文件
        path: `src/pages${path}${`/${LastName}`}/ModalDialog${firstUpperCase}.tsx`, // 添加的文件的路径
        templateFile: 'src/plop-template/page/template/ModalDialog.hbs',
        data: {
          name: LastName,
          firstUpperName: firstUpperCase,
          ZHName,
        },
      },
    ];

    return actions;
  },
};
