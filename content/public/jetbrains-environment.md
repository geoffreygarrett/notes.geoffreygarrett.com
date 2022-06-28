---
title: "JetBrains Environment"
tags:
- developer
- environment
- seed
---

This note is a general collection of plugins for JetBrain's products which I use
on a daily basis. I will almost exclusively stick to free plugins with the
exception of the [Material Theme
UI](https://plugins.jetbrains.com/plugin/8006-material-theme-ui/) which I have
yet to find a satisfactory alternative to. For the record, I used this plugin
for years prior to it becoming exclusive to those willing to add another **paid
subscription** to their financial commitments. I'm not happy about it, but I
became dependent on it.

## Wrap to column

- [Plugin Page](https://plugins.jetbrains.com/plugin/7234-wrap-to-column)

I cannot live without this plugin anymore. This plugin is Similar to the Emacs
command 'Fill Paragraph' and Vim's `gq` (format lines) command. It's a great
tool for formatting raw markdown and LaTeX to a consistent column width for
readability. After installing, the following keymappings are default.

**Note**: This is the default for Linux & Windows, I don't personally know it
for macOS. See `File > Settings` and search for "Wrap to" for your keybinding.

| Keybinding         | Command                       |
|--------------------|-------------------------------|
| `Ctrl+Alt+Shift+W` | Wrap Line to Column           |
| `Ctrl+Alt+Shift+P` | Wrap Paragraph to Column      |

## Rainbow Brackets

- [Plugin Page](https://plugins.jetbrains.com/plugin/10080-rainbow-brackets)

A simple but highly effective plugin that adds a quality of life feature to
JetBrains IDEs. It helps keep track of the brackets in your code by cycling
through a rainbow of colors, one for each pair of brackets. This makes it
trivial to spot the brackets and their corresponding opening and closing 
brackets, and makes spotting the location of a missing closing bracket a piece
of cake.

{{< figure src="https://i.stack.imgur.com/KuVtF.png" title="Rainbow Brackets Example" class="dark">}}

## Git Commit Template

- [Plugin Page](https://plugins.jetbrains.com/plugin/9861-git-commit-template)

If you want to maintain a consistent style to your commits, according to a
[Conventional Commit
Message](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13) style,
this plugin makes it easy to do so. The commit template used by this plugin is
the following:

```html 
<type>(<optional scope>): <subject>
<empty separator line>
<optional body>
<empty separator line>
<optional footer>
```
e.g.:
```text
feat(jetbrains notes): added git commit template plugin
```