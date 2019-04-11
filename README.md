[中文用户看这里](README_CN.md)

[Download](download/download.md) \| [Modules](module/module.md) \| [Discussion](https://t.me/vxp_group) \| [Contact](mailto:twsxtd@gmail.com)

## Introduction 

TaiChi is a framework to use Xposed module with or **without** Root/Unlock bootloader, it support Android 5.0 ~ **9.0**.

In simple words, TaiChi is a **Xposed-Styled** Framework, it can load Xposed modules, do hooks and so on.

## Feature

TaiChi is Xposed-Styled, but it has no relation with Xposed. The only relevance is that TaiChi can load Xposed modules, the implementation of TaiChi and Xposed Framework is very different.

Here are some features of Taichi:

1. TaiChi has **fully supports for Android Pie**.
2. TaiChi can run in **non-root mode**.
3. TaiChi does not effect the android system and it does not hook all apps in system. Only the apps you want to apply Xposed modules are hooked. Other apps in system run in a completely clean environment, which means TaiChi can **pass SafetyNet easily**.
4. TaiChi **doesn't need to reboot** sysytem in most cases.
5. TaiChi is **hard to detect**. TaiChi doesn't modify the libart and app_process, it has nearly no noticeable characteristics.

## Usage

TaiChi has two work mode: magisk mode and non-root mode. If you don't want to unlock the bootloader/flash system images, you can use the non-root mode, if you prefer more powerful functions, just try magisk mode.

### What is the different with magisk mode and non-root mode?

The only difference is that magisk mode can hook system process, so more modules are supported, such as Xposed Edge/Greenify.But magisk mode need to unlock the bootloader and install Magisk, while non-root mode just needs to install a simple app.

### Non-Root mode

TaiChi run in non-root mode in genernal, just install a simple app, all the installation is over. If you want to use Xposed modules, for example, you'd like to use SnapFreedom on SnapChat, follow these steps:

1. Click the float button in Home page of TaiChi, and then click the button : **Create App**.
2. Select the app you'd like to apply Xposed modules, such as SnapChat.
3. Click the "Create" button at the bottom and then wait the creation to finish pariently.
4. When creation finished, TaiChi tells you that you need to unstall the original SnapChat, please uninstall it, this is necessary. Because TaiChi in non-root mode needs to modify the APK file which means we have to re-sign the APK.
5. Follow the steps in TaiChi app until you installed the new app.
6. Enter the **Module Manage** activity by click the button "Module Manager" of the float button in Home page.
7. Check the SnapFreedom module.
8. Kill the process of SnapChat and the Xposed modules should work properly.(You don't need to reboot system)

### Magisk mode

Non-root mode of TaiChi has some shortcomming even though it do not need to unlock bootloader, so i develop a magisk module, this module can give TaiChi extra power to overcome these shortcommings:

1. magisk mode can hook into system process.
2. magisk mode don't need to modify the apk, and the signature keeps same.

When you flashed the [Magisk Module](https://github.com/taichi-framework/TaiChi-Magisk/releases) provided by TaiChi, TaiChi app switch to magisk mode automaticly: TaiChi App + magisk module = TaiChi·Magisk. When the magisk module is disabled or removed, TaiChi app turn to non-root mode.

If you want to use magisk mode, please read the [Wiki](https://github.com/taichi-framework/TaiChi/wiki/taichi-magisk-beta) carefully.

## For Developers 

TaiChi is a Framework, developers can wrote modules to do hooks. The TaiChi modules is fully compatible to Xposed modules, so just wrote the Xposed-Styled modules and it can run well in TaiChi, too.

But there are still some difference from TaiChi Framework and Xposed Framework, please refer [For Xposed Developers](https://github.com/taichi-framework/TaiChi/wiki/For-Xposed-developer)

## Discuss

- [Telegram Group](https://t.me/vxp_group)
- QQ Group: 729163976

## Contact me

[E-mail](mailto:twsxtd@gmail.com)
