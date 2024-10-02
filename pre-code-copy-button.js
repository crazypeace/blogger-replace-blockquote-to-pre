document.addEventListener('DOMContentLoaded', function() {
  // 将 defer 用法的脚本转换为 DOMContentLoaded 用法
  // 功能: 为 pre>code 添加 复制按钮
  // 注意, 相应的需要添加CSS
  // 来源: https://yihui.org/en/2023/09/copy-button/
  // https://cdn.jsdelivr.net/npm/@xiee/utils/js/copy-button.min.js
  (e=>{const t=e.currentScript?.dataset;e.querySelectorAll(t?.selector||"pre>code").forEach((t=>{const c=e.createElement("span"),o=c.classList,n=t.parentNode,a="BLOCKQUOTE"===t.tagName&&"P"===n?.tagName;function s(e){o.add(e),setTimeout((()=>o.remove(e)),1e3)}c.className="copy-button",c.onclick=()=>navigator.clipboard.writeText(a&&t.classList.contains("code-fence")&&n.parentNode?.classList.contains("fenced-chunk")?[...n.parentNode.querySelectorAll("code[class]")].map((e=>e.innerText.replace(/\n$/,""))).join("\n"):t.innerText).then((()=>s("copy-success")),(()=>s("copy-fail")));const r=a?n:t;r.querySelector(".copy-button")||r.append(c),"static"===getComputedStyle(r).position&&(r.style.position="relative")}))})(document);
});
