---
publish: false
---
``` dataview
TABLE WITHOUT ID
	join(list("https://jediinprocrastination.github.io/mindmap/", replace(replace(file.path, "Shared/", ""), ".md", "")), "") as "Link",
	file.frontmatter.publish as "Published"
FROM "Shared"
SORT file.name ASC
```
