---
title: "Ubuntu Environment"
tags:
- sofware-engineering
---

- Last carried out with `Ubuntu 20.0.4`


## General

### Install `htop`

```bash
sudo apt-get install htop 
```

### Install `git`

```bash
sudo apt-get install git 
```

### Install build tools

```bash
sudo apt-get install build-essential
```

### Connect to your Android or Apple devices

1. Install the "KDE Connect" app on your mobile device from its respective app store, whether it's
[Apple iOS](https://apps.apple.com/us/app/kde-connect/id1580245991) or [Android](https://play.google.com/store/apps/details?id=org.kde.kdeconnect_tp&hl=en_ZA&gl=US)

2. If you're using gnome, install `GSConnect` via the [gnome extensions](https://extensions.gnome.org/extension/1319/gsconnect/), otherwise `KDE Connect` via `apt` (you will probably be using the commandline interface for the latter.

```bash
sudo apt install kdeconnect
```

3. Configure GSConnect (Under mobile devices) on the taskbar of Ubuntu, ensure both devices are on the same network, select the device, and `Request pair`. I haven't used `KDE Connect`, so I don't provide any info here on that.

4. Accpet the pair request on your mobile device.

You can now access the following functions/features on your Ubuntu task bar, relating to your mobile device:
- `Battery <Status>`
- `Browse device`
- `Ring device`
- `Send file`
- `SMS Messages...`


## Setting up with an NVIDIA GPU

### Select appropriate drivers

If immediately after installation, you have some display issues, it's likely
that a display driver hasn't been selected as was the case with me on my desktop.
Ensure latest `(proprietary, tested)` drivers used for NVIDIA GPU in `Software & Updates > Additional Drivers`

### Configure high refresh rates

Can be set (if defaults aren't correct) through:

```bash
nvidia-settings
```
If you're using multiple monitors, one at 60 Hz and another at 144 Hz (for example),
you might notice that dragging a window around on the 144 Hz monitor will render
in 60 Hz, however your cursor will render at 144 Hz. This has to do with the 
"display server" used. `X.org` is used by default with nvidia, however Wayland needs to be 
used to properly support mixed refresh rate monitors, however there is limited support of Wayland by nvidia.
*If* your nvidia driver supports it:

1. Edit `/etc/gdm3/custom.conf` and set `WaylandEnable=true`
2. [Comment out the lines mentioned here](https://askubuntu.com/questions/1403854/cant-use-wayland-with-nvidia-510-drivers-on-ubuntu-22-04-lts)

*Note*: This worked for my NVIDIA 1080 TI with the NVIDIA 510 drivers, using
a 60 Hz 4k monitor with a G-SYNC 144 Hz. I have yet to encounter any 
undesirable consequences, but will add it here if I do.

### Problem: Login screen is not on primary monitor

```bash
sudo cp ~/.config/monitors.xml ~gdm/.config/monitors.xml
```

### How to: Check Card Model

```bash
lspci | grap VGA
```


## Installing LaTeX

- texlive-base – 160 MB
- texlive-latex-recommended – 203 MB
- texlive – 269 MB
- texlive-latex-extra – 464 MB
- texlive-full – 5903 MB


### Install everything
```bash
 sudo apt install texlive-full -y  # 5903 MB
```


### Install M.Sc. thesis dependencies
```bash
sudo apt install texlive-latex-extra  # 464 MB
```
#### Xelatex

- missing `xelatex` ?

```bash
sudo apt-get install texlive-xetex  # 18.4 MB 
```
#### Science packages

- missing `physics.sty` ?

```bash
sudo apt-get install texlive-science  # 115 MB 
```

#### Math fonts

- missing `mathabx.sty` ?

```bash
sudo apt-get install texlive-fonts-extra  # 1,383 MB
```

#### BibLaTeX

- ([src](https://tex.stackexchange.com/questions/102817/setting-up-texmaker-on-ubuntu-biblatex-sty-not-found)) missing `bibtex.sty` ?


```bash
sudo apt-get install texlive-bibtex-extra biber  # 118 MB
```

## Customizing Terminal

## I want `Fn` keys as non-default

As mentioned [here](https://www.hashbangcode.com/article/turning-or-fn-mode-ubuntu-linux),
I fixed this for my Keychron keyboard with:

**Temporary**
```bash
echo 2 | sudo tee /sys/module/hid_apple/parameters/fnmode
```

**Permanent**

```bash
echo options hid_apple fnmode=2 | sudo tee -a /etc/modprobe.d/hid_apple.conf
```
```bash
sudo update-initramfs -u -k all 
```


## Installing PyCharm

Visit Jetbrains [download link](https://www.jetbrains.com/pycharm/download/) or
use `Ubuntu Software`.

