# webpack-develop-env

探索 webpack 相关开发配置：HMR 热更新、devtool(source-map)、devServer 等

# 相关命令

```
* `npm run build` 命令，用于单种devtool配置的打包；
* `npm run build-source` 命令，用于多种devtool配置的打包，快速对比不同配置的效果；
* `npm run dev` 命令，用于启动本地服务，验证模块热替换；
```

### 其他

![blockchain](https://github.com/Lucky-LYZ/webpack-develop-env/blob/master/src/img/source-map%E5%90%84%E7%A7%8D%E5%80%BC%E7%9A%84%E5%AF%B9%E6%AF%94.png "source-map各种值的对比.png")
![blockchain](https://github.com/Lucky-LYZ/webpack-develop-env/blob/master/src/img/%E6%89%93%E5%8C%85%E7%94%9F%E6%88%90%E5%90%84%E7%B1%BBdevtool%E9%85%8D%E7%BD%AE%E7%9A%84%E6%96%87%E4%BB%B6.png "打包生成各类devtool配置的文件.png")
![blockchain](https://github.com/Lucky-LYZ/webpack-develop-env/blob/master/src/img/%E7%9B%91%E5%90%AC%E7%89%B9%E5%AE%9A%E6%96%87%E4%BB%B6%E7%9A%84%E6%94%B9%E5%8A%A8%EF%BC%8C%E5%AE%9E%E7%8E%B0%E7%83%AD%E6%9B%BF%E6%8D%A2.png "监听特定文件的改动，实现热替换.png")
