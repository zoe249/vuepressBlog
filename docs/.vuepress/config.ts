// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    //导航
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'TimeLine',
        link: '/timeline',
        icon: 'reco-date',
      },
      // { text: '博客', link: '/' },
    ],
    // 博客配置
    blogConfig: {
      category: {
        location: 4, // 在导航栏菜单中所占的位置，默认2
        text: '博客', // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag', // 默认文案 “标签”
      },
    },
  },
}
