document.addEventListener('DOMContentLoaded', function() {
  // 获取所有blockquote元素
  var blockquotes = document.querySelectorAll ('blockquote');
  
  // 遍历每个blockquote元素
  blockquotes.forEach (function(blockquote) {
      // 创建一个新的blockquote元素，并将旧的blockquote的内容复制进去
      var bq = document.createElement ('blockquote');    
      bq.innerHTML  = blockquote.innerHTML;
      // 创建一个新的p元素，将新的blockquote元素添加为其子元素
      var p = document.createElement ('p');
      p.appendChild(bq);
    
      // 替换原来的blockquote元素为p元素
      blockquote.parentNode.replaceChild (p, blockquote);
  }); 

  // 添加 复制按钮
  // 注意, 相应的需要添加CSS
  // 来源: https://yihui.org/en/2023/09/copy-button/
  // https://cdn.jsdelivr.net/npm/@xiee/utils/js/copy-button.min.js
  // 2025-9-9 修改复制结果带有NBSP的问题
  // https://zelikk.blogspot.com/2025/09/copy-code-button-nbsp.html
  (e=>{const t=e.currentScript?.dataset;e.querySelectorAll(t?.selector||"p>blockquote").forEach((t=>{const c=e.createElement("span"),o=c.classList,n=t.parentNode,a="BLOCKQUOTE"===t.tagName&&"P"===n?.tagName;function s(e){o.add(e),setTimeout((()=>o.remove(e)),1e3)}c.className="copy-button",c.onclick=()=>navigator.clipboard.writeText((a&&t.classList.contains("code-fence")&&n.parentNode?.classList.contains("fenced-chunk")?[...n.parentNode.querySelectorAll("code[class]")].map((e=>e.innerText.replace(/\n$/,""))).join("\n"):t.innerText).replace(/\u00A0/g,' ')).then((()=>s("copy-success")),(()=>s("copy-fail")));const r=a?n:t;r.querySelector(".copy-button")||r.append(c),"static"===getComputedStyle(r).position&&(r.style.position="relative")}))})(document);
});
