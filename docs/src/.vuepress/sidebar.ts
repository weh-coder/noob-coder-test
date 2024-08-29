import { sidebar } from "vuepress-theme-hope";
// 文章侧边导航
export default sidebar({
  "/tools/online-website/": [
    "readme.md"
  ],
  "/project/": [
    {
      text: "开源项目",
      children: [
        "readme.md",
        {
          text: "青铜段位",
          collapsible: true,
          prefix: "primary/",
          children: [
            "readme.md"
          ],
        },
        {
          text: "白银段位",
          collapsible: true,
          prefix: "middle/",
          children: [
            "readme.md"
          ],
        },
        {
          text: "黄金段位",
          collapsible: true,
          prefix: "height/",
          children: [
            "readme.md"
          ],
        },
        {
          text: "铂金段位",
          collapsible: true,
          prefix: "undergraduate/",
          children: [
            "readme.md"
          ],
        },
        {
          text: "钻石段位",
          collapsible: true,
          prefix: "master/",
          children: [
            "readme.md"
          ],
        },
        {
          text: "星耀段位",
          collapsible: true,
          prefix: "dr/",
          children: [
            "readme.md"
          ],
        }
      ],
    },
  ],
  // 必须放在最后面
  "/": [
    {
      text: "👀知识体系导读",
      collapsible: false,
      children: [
        {
          text: "👉前言",
          link: "/home.md",
        },
        {
          text: "❤️前端",
          prefix: "web/",
          collapsible: true,
          children: [
            "readme.md",
            {
              text: "前端三件套",
              collapsible: true,
              children: [
                "init-project.md",
                {
                  text: "HTML&CSS",
                  prefix: "html&css/",
                  collapsible: true,
                  children: [
                    "html01",
                    "html02",
                    "html03",
                    "css01"
                  ],
                },
                {
                  text: "JavaScript",
                  prefix: "js/",
                  collapsible: true,
                  children: [
                    "js01",
                    "js02"
                  ],
                },
              ],
            },
            {
              text: "框架",
              collapsible: true,
              children: [
                {
                  text: "Vue",
                  prefix: "vue/",
                  collapsible: true,
                  children: [
                    "vue01",
                  ],
                },
                {
                  text: "React",
                  prefix: "react/",
                  collapsible: true,
                  children: [
                    "react01"
                  ],
                },
              ],
            },
          ],
        },
        {
          text: "⭐后端",
          collapsible: true,
          children: [
            {
              text: "Java入门与进阶",
              prefix: "java/",
              collapsible: true,
              children: [
                "readme.md",
                {
                  text: "Java基础",
                  prefix: "java-base/",
                  collapsible: true,
                  children: [
                    "java-base01"
                  ],
                },
                {
                  text: "Java进阶",
                  prefix: "java-pluss/",
                  collapsible: true,
                  children: [
                    "java-pluss01"
                  ],
                }
              ]
            },
            {
              text: "C++入门与进阶",
              prefix: "cpp/",
              collapsible: true,
              children: [
                "readme.md",
                {
                  text: "C++基础",
                  prefix: "cpp-base/",
                  collapsible: true,
                  children: [
                    "cpp-base01"
                  ],
                },
                {
                  text: "C++进阶",
                  prefix: "cpp-pluss/",
                  collapsible: true,
                  children: [
                    "cpp-pluss01"
                  ],
                }
              ],
            },
            {
              text: "Python入门与进阶",
              prefix: "python/",
              collapsible: true,
              children: [
                "readme.md",
                {
                  text: "Python基础",
                  prefix: "python-base/",
                  collapsible: true,
                  children: [
                    "python-base01"
                  ],
                },
                {
                  text: "Python进阶",
                  prefix: "python-pluss/",
                  collapsible: true,
                  children: [
                    "python-pluss01"
                  ],
                }
              ],
            },
            {
              text: "Go入门与进阶",
              prefix: "go/",
              collapsible: true,
              children: [
                "readme.md",
                {
                  text: "Go基础",
                  prefix: "go-base/",
                  collapsible: true,
                  children: [
                    "go-base01"
                  ],
                },
                {
                  text: "Go进阶",
                  prefix: "go-pluss/",
                  collapsible: true,
                  children: [
                    "go-pluss01"
                  ],
                }
              ],
            }
          ],
        },
        {
          text: "🏆数据结构与算法",
          collapsible: true,
          prefix: "algorithm/",
          children: [
            "readme.md",
            {
              text: "数据结构基础",
              prefix: "algo-base/",
              collapsible: true,
              children: [
                "algo-base01",
              ]
            },
            {
              text: "常见排序算法",
              prefix: "sort-base/",
              collapsible: true,
              children: [
                "sort01",
              ]
            },
            {
              text: "算法思想（重点）",
              prefix: "algo-important/",
              collapsible: true,
              children: [
                "algo-imp01",
              ]
            },
            {
              text: "LeetCode算法题",
              prefix: "leetcode/",
              collapsible: true,
              children: [
                "leetcode-01",
              ]
            },
          ],
        },
        {
          text: "💻数据库",
          collapsible: true,
          prefix: "sql/",
          children: [
            "readme.md",
            "sql-base.md",
            {
              text: "MySQL基础和进阶",
              collapsible: true,
              prefix: "mysql/",
              children: [
                "readme.md",
              ],
            },
            {
              text: "MongoDB基础和进阶",
              collapsible: true,
              prefix: "mongodb/",
              children: [
                "readme.md",
              ],
            },
          ],
        },
        {
          text: "📠常用中间件",
          collapsible: true,
          prefix: "middleware/",
          children: [
            "readme.md",
            "redis.md",
            "rabbitmq.md",
            "elastic.md",
            "kafka.md",
            "mycat.md",
            "sdjdbc.md"
          ],
        },
        {
          text: "🔧开发工具",
          collapsible: true,
          prefix: "tools/dev/",
          children: [
            "readme.md"
          ],
        },
        {
          text: "🌐Linux运维",
          collapsible: true,
          children: [
            {
              text: "Linux详解",
              collapsible: true,
              prefix: "linux/",
              children: [
                "readme.md"
              ],
            },
            {
              text: "Nginx详解",
              collapsible: true,
              prefix: "nginx/",
              children: [
                "readme.md"
              ],
            },
            {
              text: "Docker详解",
              collapsible: true,
              prefix: "docker/",
              children: [
                "readme.md"
              ],
            },
            {
              text: "Jenkins详解",
              collapsible: true,
              prefix: "jenkins/",
              children: [
                "readme.md"
              ],
            },
            {
              text: "Kubernetes详解",
              collapsible: true,
              prefix: "k8s/",
              children: [
                "readme.md"
              ],
            },
          ],
        },
        {
          text: "📃面试题&八股文",
          collapsible: true,
          prefix: "interview/",
          children: [
            "readme.md",
            {
              text: "Vue",
              collapsible: true,
              children: [
                {
                  text: "Vue开发面试题&八股文",
                  prefix: "/interview/web/vue/",
                  collapsible: true,
                  children: [
                    "vue01",
                  ],
                }
              ]
            },
            {
              text: "React",
              collapsible: true,
              children: [
                {
                  text: "React开发面试题&八股文",
                  prefix: "/interview/web/react/",
                  collapsible: true,
                  children: [
                    "react01",
                  ],
                }
              ]
            },
            {
              text: "Java",
              collapsible: true,
              children: [
                {
                  text: "Java面试题",
                  prefix: "/interview/java/mianshiti/",
                  collapsible: true,
                  children: [
                    "java-01",
                    "java-02",
                  ],
                },
                {
                  text: "Java八股文",
                  prefix: "/interview/java/baguwen/",
                  collapsible: true,
                  children: [
                    "java01",
                  ],
                }
              ]
            },
            {
              text: "C++",
              collapsible: true,
              children: [
                {
                  text: "C++面试题",
                  prefix: "/interview/cpp/mianshiti/",
                  collapsible: true,
                  children: [
                    "cpp-01"
                  ],
                },
                {
                  text: "C++八股文",
                  prefix: "/interview/cpp/baguwen/",
                  collapsible: true,
                  children: [
                    "cpp01",
                  ],
                }
              ]
            },
            {
              text: "Go",
              collapsible: true,
              children: [
                {
                  text: "Go面试题",
                  prefix: "/interview/go/mianshiti/",
                  collapsible: true,
                  children: [
                    "go-01"
                  ],
                },
                {
                  text: "Go八股文",
                  prefix: "/interview/go/baguwen/",
                  collapsible: true,
                  children: [
                    "go01",
                  ],
                }
              ]
            },
            {
              text: "Python",
              collapsible: true,
              children: [
                {
                  text: "Python面试题",
                  prefix: "/interview/python/mianshiti/",
                  collapsible: true,
                  children: [
                    "python-01"
                  ],
                },
                {
                  text: "Python八股文",
                  prefix: "/interview/python/baguwen/",
                  collapsible: true,
                  children: [
                    "python01",
                  ],
                }
              ]
            }
          ],
        },
        {
          text: "🙊联系作者",
          collapsible: true,
          prefix: "about/",
          children: [
            "readme.md",
            "group",
            "csdn",
            "bzhan",
            "github",
            "gitee",
            "zhishi",
          ],
        },
        {
          text: "😍二次元",
          collapsible: true,
          prefix: "photo/",
          children: [
            "readme.md",
          ],
        },
      ]
    }
  ],
});
