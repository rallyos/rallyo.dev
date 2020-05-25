+++
title       = "Tmuxinator"
date        = 2020-05-24
issue       = "2020-21"
+++

![Tmuxinator example usage](https://user-images.githubusercontent.com/289949/44366875-1a6cee00-a49c-11e8-9322-76e70df0c88b.gif)

Here we go, issue 1.

I will probably sound like one of these cheesy TV shop commercials that want you to call in the next 5 minutes for a great deal, but hear me out. Chance is you've already seen this tool in the newsletters you follow.

If you, like me, are working on multiple projects on your machine that require different environments and [tmux](https://github.com/tmux/tmux/wiki) keybindings are not a stopper for you, then you definitely must give [Tmuxinator](https://github.com/tmuxinator/tmuxinator/) a try.

Their readme starts with the simple sentence:

> ‌Create and manage tmux sessions easily.

But there's more power to this than it seems.

With [Tmuxinator](https://github.com/tmuxinator/tmuxinator/) you can set up config files for every project you work on, you basically configure how to split your tmux panes and what to be run in each one when you start a session. In the above above example you can see how it works for Rails environments.

Here's my simple config for this site. My first pane always fires up the editor, while the other ones provide me a quick way of doing things like running a server, console or git.

```
name: home
root: ~/code/dimitarralev/

startup_window: editor

windows:
    - editor:
        panes:
            - vim

    - general:
        layout: 34d8,204x51,0,0[204x34,0,0{102x34,0,0,1,101x34,103,0,2},204x16,0,35{102x16,0,35,3,101x16,103,35,4}]
        panes:
            - hugo server --theme=gravity-assist --buildDrafts
            - ctop
            - git pull && tig
            - buku
```

Sprinkle on it some of your useful terminal magic like aliases and you can effectively switch between projects in a matter of seconds.