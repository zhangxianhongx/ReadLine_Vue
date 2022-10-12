module.exports = {
  plugins: {
    'postcss-pxtorem': {
      //postcss计算规则，设置的px/rootValue = rem
      // px = rem * 设置的根节点字号（默认16px）。 显示的px
      rootValue: 15,
      propList:['*'],
    }
  }
}
