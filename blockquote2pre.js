document.addEventListener('DOMContentLoaded', function() {
  // 获取所有blockquote元素
  var blockquotes = document.querySelectorAll ('blockquote');
  
  // 遍历每个blockquote元素
  blockquotes.forEach (function(blockquote) {
      // 创建一个新的code元素，并将blockquote的内容复制进去
      var code = document.createElement ('code');    
      code.innerText  = blockquote.innerText;
    
      // 创建一个新的pre元素，并将code元素添加为其子元素
      var pre = document.createElement ('pre');
      pre.appendChild(code);
    
      // 添加 class 属性
      // 不使用google prettyprint了
      // pre.setAttribute ('class', 'prettyprint');
    
      // 替换原来的blockquote元素为pre元素
      blockquote.parentNode.replaceChild (pre, blockquote);
  }); 

  // 添加 复制按钮
  // 注意, 相应的需要添加CSS
  // 来源: https://yihui.org/en/2023/09/copy-button/
  /*
  (e=>{
    const t = e.currentScript?.dataset;
    e.querySelectorAll(t?.selector || "pre>code").forEach((t=>{
        const c = e.createElement("span")
          , o = c.classList
          , n = t.parentNode
          , a = "CODE" === t.tagName && "PRE" === n?.tagName;
        function s(e) {
            o.add(e),
            setTimeout((()=>o.remove(e)), 1e3)
        }
        c.className = "copy-button",
        c.onclick = ()=>navigator.clipboard.writeText(a && t.classList.contains("code-fence") && n.parentNode?.classList.contains("fenced-chunk") ? [...n.parentNode.querySelectorAll("code[class]")].map((e=>e.innerText.replace(/\n$/, ""))).join("\n") : t.innerText).then((()=>s("copy-success")), (()=>s("copy-fail")));
        const r = a ? n : t;
        r.querySelector(".copy-button") || r.append(c),
        "static" === getComputedStyle(r).position && (r.style.position = "relative")
    }
    ))
  }
  )(document);
  */

  // 使用 https://highlightjs.org/ 代码高亮方案
  hljs.configure({useBR: true});
  hljs.highlightAll();

  // 使用 prism.js 代码高亮方案
  // Prism.highlightAll();
  // 手动调用prism插件
  // Prism.plugins.load(autoloader);
  // Prism.plugins.load(toolbar);
  // Prism.plugins.load(copy-to-clipboard);
});
