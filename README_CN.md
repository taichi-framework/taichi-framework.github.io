**[For English users](README.md)**

[**下载**](download/download_cn.md) \| [**模块**](module/module_cn) \| [讨论](https://t.me/vxp_group)   \|   [联系我](mailto:twsxtd@gmail.com)

## 介绍

太极是一个能够运行 Xposed 模块的框架，模块能通过它改变系统和应用的行为。太极既能以传统的 Root/刷机方式运作，也能免 Root/ 免刷机运行；并且它支持 Android 5.0 ~ **9.0**。

简单来说，太极就是一个 **类Xposed**框架，它能够加载 Xposed 模块、修改系统和APP、拦截方法，执行 hook 逻辑等。

## 特性

虽然太极是一个 类Xposed 框架，但是它本身与 Xposed 没有任何关系。唯一有点关系的可能是太极能够兼容 Xposed 模块，除此之外，二者从设计思路、实现机制到运作逻辑完全不同。

以下是太极一些独有的特性：

1. 太极**完全支持 Android 9.0**。
2. 太极能**以免 Root/免刷机模式运行**。
3. 太极**不影响全局**。可以只对特定的应用开启 Xposed 功能，无需使用 Xposed 的 APP 运行起来就跟系统没有 Xposed 一样；这意味着太极能轻松绕过SafetyNet检测，完美契合某些金融/银行/奇葩类APP。
4. 在大部分情况下，太极中的模块**无需重启即刻生效**。
5. 太极更**不易被检测**。太极的弱侵入特性不再修改 ART 运行时，也不在全局环境中留下任何踪影；因此只要想要做到，可以轻松逃过各种代码类型的检测。

## 使用方法

太极有两种工作模式：免Root模式和 magisk 模式。如果你不想解锁和刷机，你可以使用免Root模式，如果你希望对系统做更多的控制，可以尝试 magisk 模式。

### 免Root模式和 magisk 模式有何不同？

唯一的不同支持在于：magisk 模式能够修改系统，因此可以支持更多的模块；比如绿色守护/核心破解等。但是，magisk 模式需要解锁 Bootloader 并且安装 Magisk，而免 Root 模式只需要安装一个简单的 APP （太极）即可。

### 免 Root 模式

通常情况下，太极以免 Root 模式运行，只需要安装一个简单的 APP 就能直接使用了。如果你需要通过太极使用 Xposed 模块，比如 MDWechat，按以下步骤操作即可：

1. 点击太极首页右下角的**浮动按钮**，然后在弹出菜单中点击**创建APP**。
2. 在选择APP的界面中选择你要应用 Xposed 模块的 APP，比如微信。
3. 然后点击**创建**按钮，耐心等待创建完毕。
4. 创建完成之后，太极会提示你**需要卸载原APP**；免Root模式中这是必要步骤（magisk模式无需），卸载即可。
5. 跟随太极APP的指引完成余下操作，如安装-优化 等。
6. 点击太极首页右下角的**浮动按钮**，在菜单中点击**模块管理**。
7. 进入**模块管理**页面，然后勾选你需要使用的 Xposed 模块；如 MDWechat。这里会提示你有版本兼容问题，注意下载和使用对应的版本。
8. 强制停止你需要使用的 APP，如微信；然后重新打开，这时候 Xposed 模块应该已经正常工作了（无需重启系统）。

### Magisk 模式

太极的免 Root 模式虽然无需解锁 Bootloader，使用起来异常方便，但是有一些缺点，比如无法修改系统、必须卸载原有APP。因此我开发了一个 magisk 模块，这个模块可以通过 Magisk 赋予太极更强大的功能；从而突破免 Root 模式的种种限制。

当你刷入太极提供的 [Magisk 模块](https://github.com/taichi-framework/TaiChi-Magisk/releases) 之后，太极 APP 会自动从 免Root 模式切换到 Magisk 模式：太极 APP + 太极 Magisk 模块 = 太极·Magisk。当 太极的 magisk 模块被禁用或者卸载之后，太极会自动回到 免Root模式运行。

如果你需要使用 Magisk 模式，请仔细阅读 [Wiki](https://github.com/taichi-framework/TaiChi/wiki/taichi-magisk-zh)。

## Xposed 模块支持

太极是一个框架，因此开发者可以写出自己的模块在太极中运行。太极的模块是兼容 Xposed 模块的（少部分特性不支持），因此你只需要写出 Xposed 风格的模块就能在太极中运行。

不过太极和 Xposed 并不一样，因此有一些地方需要注意，请移步 [For Xposed Developers](https://github.com/taichi-framework/TaiChi/wiki/For-Xposed-developer)

## 讨论

- [Telegram 群组](https://t.me/vxp_group)
- QQ 群: 729163976

## 联系和支持

[电子邮件](mailto:twsxtd@gmail.com)

