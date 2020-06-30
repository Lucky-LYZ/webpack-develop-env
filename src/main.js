import createHeading from './heading.js';
import './main.css';
import icon from './img/icon.png';

const render = el => {
  el.innerHTML = '';
  const heading = createHeading();
  el.append(heading);

  const img = new Image();
  img.src = icon;
  el.append(img);

  //el.append(img·····);// 可以通过该语句，查看各类source-map配置时，报错信息的不同
}

render(document.querySelector('#root'));


/**
 * @desc 更多信息参见：https://www.webpackjs.com/api/hot-module-replacement/
 * 如果已经通过 HotModuleReplacementPlugin 启用了模块热替换(Hot Module Replacement)，
 * 则它的接口将被暴露在 module.hot 属性下面。通常，用户先要检查这个接口是否可访问，然后再开始使用它。
 * 
 * **注意**：需要配合devServer使用(两种方式：命令方式、配置方式)
 *  "scripts": {
 *    "dev": "NODE_ENV=development  webpack-dev-server --config  webpack.develop.config.js --hot",
 *  },
 * devServer: {
 *    hot: true, // 启动热更新
 * }
 */
if (module.hot) {
  Object.keys(module.hot).map(item => console.log('module.hot.', item)); // 输出所有接口

  /**
   * @function accept:给定依赖模块('./heading.js')的更新，并触发一个回调函数来对这些更新做出响应。
   */
  module.hot.accept('./heading.js', () => {
    render(document.querySelector('#root'));
  })
}
