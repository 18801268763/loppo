# loppo中文详细文档

## loppo命令行详解

### --dir, -d

默认值：`docs`

说明：设置存放.md源文件的目录名

```bash
$ loppo --dir my_docs  # 将存放.md源文件的目录名更改为my_doc
```

### --output, -o

默认值：`dist` 

说明：设置静态网页的输出目录名

```bash
$ loppo --output my_site
```

###  --site, -s

默认值：`Documents`

说明：设置站点名称，此设置会同时修改head标签和h1标签中的内容

```bash
$ loppo --site "My Documents"
```

### --theme, -t

默认值：`loppo-theme-oceandeep` 

说明：设置站点的样式名称

```bash
$ loppo --theme oceandeep
```

###  --id

默认值：项目文件夹的名称

说明：设置站点的id

```bash
$ loppo --theme oceandeep
```

### --direction

默认值：ltr(表示left to right，从左到右对齐)

说明：设置站点整体的对齐方式，还可设置rtl，表示从右到左对齐

这个命令需要站点样式支持

```bash
$ loppo --direction rtl # 设置从右到左的对齐方式
```

### --debug

说明：开启loppo的debug模式

```bash
$ loppo --debug
```

###  --version, -v

说明：显示loppo版本信息

```bash
$ loppo -v
```

### --help

说明：显示loppo的帮助信息

```bash
$ loppo --help
```

### server

说明：在本地开启一个Web服务器，监听8080端口，用于调试和预览页面

```bash
$ loppo server
```

打开浏览器，通过http://127.0.0.1:8080访问



### count

说明：统计.md源文件的数量信息
```bash
$ loppo count
```

需要注意的是，在执行`loppo count`命令之前，需要在根目录存在`chapters.yml`配置文件，否则会报错，在第一次执行`loppo`命令时将自动生成一份`chapters.yml`配置文件

`loppo count` 命令有两个选项

==这两个选项经测试还存在问题==

```bash
$ loppo count --detail

$ loppo count -f some.md
```

### chapter

说明：用于根据.md源文件创建新的`chapters.yml`配置文件，旧的`chapters.yml`配置文件将被删除

```bash
$ loppo chapter
```

