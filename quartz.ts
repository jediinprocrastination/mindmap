import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExplorerPlugin from "@quartz-community/explorer"

ExplorerPlugin.Explorer({
  mapFn: (node) => {
    if (!node.isFolder && node.data?.title) {
      node.displayName = node.data.title as string;
    }

    const icon = node.isFolder ? "📁" : "📄";
    node.displayName = `${icon} ${node.displayName}`;

    return node;
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
