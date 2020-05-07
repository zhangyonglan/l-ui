const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  publicPath: './',
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples'))
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use("vue-markdown-loader")
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        use: [
          [require('markdown-it-container'), 'demo', {
            validate: function (params) {
              return params.trim().match(/^demo\s*(.*)$/)
            },

            render: function (tokens, idx) {
              if (tokens[idx].nesting === 1) {
                // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                let demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
                let description = (demoInfo && demoInfo.length > 1) ? demoInfo[1] : '';
                let descriptionHTML = description ? markdownRender.render(description) : '';
                // 2.获取代码块内的html和js代码
                let content = tokens[idx + 1].content;
                let token = tokens[idx + 1];
                // type,tag,attrs,map,nesting,level,
                console.log(token)
                for(var key in token){
                  console.log(key)
                }
                // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                let tokenHtml = `<div>descriptionHTML:${token}</div>`;
                return `<demo-block>
                <div class="source" slot="source">${content}</div>
                <div class="highlight" slot="highlight">`
              } else {
                return '</div></demo-block>\n'
              }
            }
          }]
        ]
      })
  }
}
