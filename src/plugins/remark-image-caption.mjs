import { visit } from "unist-util-visit";

export function remarkImageCaption() {
  return function (tree) {
    visit(tree, "image", (node, index, parent) => {
      const altText = node.alt || ""; // 获取图片的 alt 文本
      const url = node.url || ""; // 获取图片的 URL

      // 替换图片节点为 figure 包裹的结构
      parent.children.splice(index, 1, {
        type: "html",
        value: `
          <figure>
            <img src="${url}" alt="${altText}" />
            ${altText ? `<figcaption>${altText}</figcaption>` : ""}
          </figure>
        `,
      });
    });
  };
}