document.addEventListener('DOMContentLoaded', function() {
  // 获取所有块引用元素
  var blockquotes = document.querySelectorAll ('blockquote');
  
  // 遍历每个块引用元素
  blockquotes.forEach (function(blockquote) {
      // 创建一个新的预备元素，并将内容复制进去
      var pre = document.createElement ('pre');
      pre.innerHTML  = blockquote.innerHTML ;
      // 添加 class 属性
      pre.setAttribute ('class', 'prettyprint');
      // 替换原来的块引用元素为预备的pre元素
      blockquote.parentNode.replaceChild (pre, blockquote);
  }); 
});
