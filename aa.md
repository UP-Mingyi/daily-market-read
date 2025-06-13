设置NoteGen同步

# 同步[](https://notegen.top/zh/settings/sync.html#%E5%90%8C%E6%AD%A5)

数据同步配置指南，帮助您设置跨设备的笔记同步功能。

![image.png](https://s2.loli.net/2025/06/06/e67y91fG2h4gsTO.png)

## 主要同步方式[](https://notegen.top/zh/settings/sync.html#%E4%B8%BB%E8%A6%81%E5%90%8C%E6%AD%A5%E6%96%B9%E5%BC%8F)

主要同步方式目前支持 Github、Gitee，原因是历史回滚功能需要 Git（本地无需安装 Git） 的支持。

### 配置[](https://notegen.top/zh/settings/sync.html#%E9%85%8D%E7%BD%AE)

* Github Access Token，需要去 [Github](https://github.com/settings/tokens/new) 或 [Gitee](https://gitee.com/profile/personal_access_tokens) 获取 令牌，注意需要访问仓库的权限。
* 自动同步，开启后，在写作时，停止输入后的 \* 秒后进行自动快速备份，提交内容为固定模板，可折叠。
* 本地/图床，使用本地作为图床或使用 Github 仓库作为图床，Gitee 无法支持图床功能。
* jsDelivr 加速，开启后，上传图片后，将自动使用 jsDelivr 链接。

TIP

* 注意要选择 Github 或 Gitee 作为主要备份方式才可生效，按钮位于页面最下方。
* Markdown 都会存储于私有仓库。
* Github 会额外创建一个公开仓库用于图床（私有将无法正常访问图片）。
