module.exports = {
  plugins: {
    autoprefixer: {},
    // "postcss-px2rem": {
    //   remUnit: 37.5  //转换为rem的基准px
    //   //其他配置选项自行查文档
    // },
    "postcss-px2rem-exclude": {  // 添加的代码
      remUnit: 37.5,
      exclude: /node_modules|folder_name/i // 忽略node_modules目录下的文件，注意这里值不要写成字符串，否则引入的外部UI也会转rem
    }
  }
}

// 注意：https://www.cnblogs.com/JerryDZ/p/11596818.html
// 1.此方法只能将.vue文件style标签中的px转成rem，不能将script标签和元素style里面定义的px转成rem
// 2.如果在.vue文件style中的某一行代码不希望被转成rem，只要在后面写上注释 /* no*/就可以了