import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/guide-Toki',
  title: "Guide",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '使用', link: '/how to use/Koilin-commands' },
      { text: '关于', link: '/how to use/about'}
    ],
    sidebar: [
      {
        text: '目标',
        items:[
          {text:'现有目标',link: '/how to use/index' }
        ]
      },
      { 
        text: '使用',
        items: [
          { text: 'Koilin本体带有的命令',  link: '/how to use/Koilin-commands' },
          { text: '第三方插件', 
            items:[
                    {text: '碧蓝档案',link: '/how to use/third-party-plugins/ba-plugin'},
                    {text: 'Bangumi(番组计划)',link: '/how to use/third-party-plugins/bangumi-plugin'},
                    {text: 'twdne(随机WiFe)',link: '/how to use/third-party-plugins/twdne-plugin'},
                    {text: '5k(生成5k图)',link: '/how to use/third-party-plugins/5k-plugin'},
                    {text: '随机capoo图',link: '/how to use/third-party-plugins/capoo-plugin'},
                    {text: '猜数字小游戏',link: '/how to use/third-party-plugins/guess-number-plugin'},
                    {text: '一言',link: '/how to use/third-party-plugins/hitokoto-plugin'},
                    {text: '手办Wiki',link: '/how to use/third-party-plugins/hpoi-plugin'},
                    {text: '沙沙一言',link: '/how to use/third-party-plugins/marisa-reply-plugin'},
                    {text: '人间',link: '/how to use/third-party-plugins/renjian-plugin'},
                    {text: '骚话文案',link: '/how to use/third-party-plugins/saohua-word-plugin'},
                    {text: '喜报/悲报',link: '/how to use/third-party-plugins/xibao-plugin'}
            ]
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jdbewl' }
    ],
    logo: '/logo.png',
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.</p>不想看见暧昧的未来 却又对明天的未知抱有期待',
      copyright: 'Copyright © 2023-present <a href="https://github.com/jdbewl"></a>< Bon Voyage >'
    }
  }
})
