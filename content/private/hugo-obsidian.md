---
title: "Hugo, Obsidian, and Quartz"
tags:
- meta
---

You can change the [urls of specific
posts](https://gohugo.io/content-management/urls/#set-url-in-front-matter)
yourself, or assign them aliases for names which used to point to the notes, for
example if you reorganized. You can also change the general publish url
structure for any category of note under your `contentDir` (an argument you)
can define in your Hugo config file. I added the following snipped to my 
`config.toml` to publish under `notes.geoffreygarrett.com/public`:

```toml
[permalinks]
  notes = '/public/:filename/'

publishDir = "/"
contentDir = "/content/"
```

## Resources
- [Change URL link structure](https://gohugo.io/content-management/urls/)