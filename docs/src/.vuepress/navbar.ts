import { navbar } from "vuepress-theme-hope";
// 导航栏
export default navbar([
  {
    text: "导航",
    icon: "daohang",
    link: "/tools/online-website/"
  },
  {
    text: "面试",
    icon: "star",
    link: "/interview/"
  },
  {
    text: "导读",
    link: "/home.md"
  },
  {
    text: "前端",
    icon: "lujing",
    children: [
      {
        text: "前端学习路线",
        link: "/web/readme.md"
      },
      {
        text: "html+css+js",
        link: "/web/html&css/html01.md"
      },
      {
        text: "Vue",
        link: "/web/vue/vue01.md"
      },
      {
        text: "React",
        link: "/web/react/react01.md"
      }
    ],
  },
  {
    text: "后端",
    children: [
      {
        text: "Java",
        link: "/java/readme.md"
      },
      {
        text: "C++",
        icon: "zhunbei",
        link: "/cpp/"
      },
      {
        text: "Python",
        icon: "zhongyaotishi",
        link: "/python/"
      },
      {
        text: "Go",
        icon: "zhongyaotishi",
        link: "/go/"
      },
    ],
  },
  {
    text: "算法",
    link: "/algorithm/"
  },
  {
    text: "数据库",
    icon: "database",
    children: [
      {
        text: "数据库基础及原理",
        link: "/sql/readme.md"
      },
      {
        text: "SQL基本应用",
        link: "/sql/sql-base.md"
      },
      {
        text: "SQL数据库",
        icon: "database",
        children: [
          {
            text: "MySQL基础和进阶",
            link: "/sql/mysql/"
          }
        ],
      },
      {
        text: "NoSQL数据库",
        icon: "database",
        children: [
          {
            text: "MongoDB基础和进阶",
            link: "/sql/mongodb/"
          }
        ],
      }
    ],
  },
  {
    text: "中间件",
    children: [
      "/middleware/readme.md",
      {
        text: "Redis详解",
        link: "/middleware/redis.md"
      },
      {
        text: "RabbitMQ详解",
        link: "/middleware/rabbitmq.md"
      },
      {
        text: "ElasticSearch",
        link: "/middleware/elastic.md"
      },
      {
        text: "Kafka详解",
        link: "/middleware/kafka.md"
      },
      {
        text: "MyCat详解",
        link: "/middleware/mycat.md"
      },
      {
        text: "ShardingJDBC",
        link: "/middleware/sdjdbc.md"
      }
    ],
  },
  {
    text: "工具|运维",
    children: [
      {
        text: "开发工具",
        link: "/tools/dev/"
      },
      {
        text: "Linux运维",
        children: [
          {
            text: "Linux详解",
            link: "/linux/"
          },
          {
            text: "Nginx详解",
            link: "/nginx/"
          },
          {
            text: "Docker详解",
            link: "/docker/"
          },
          {
            text: "Jenkins详解",
            link: "/jenkins/"
          },
          {
            text: "Kubernetes详解",
            link: "/k8s/"
          }
        ]
      },
    ],
  },
  {
    text: "项目",
    link: "/project/"
  },
  {
    text: "二次元",
    link: "/photo/"
  },
  {
    text: "关于",
    link: "/about/"
  }
]);
