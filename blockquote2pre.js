document.addEventListener('DOMContentLoaded', function() {
  // 获取所有blockquote元素
  var blockquotes = document.querySelectorAll ('blockquote');
  
  // 遍历每个blockquote元素
  blockquotes.forEach (function(blockquote) {
      // 创建一个新的code元素，并将blockquote的内容复制进去
      var code = document.createElement ('code');    
      code.innerHTML  = blockquote.innerHTML ;
    
      // 创建一个新的pre元素，并将code元素添加为其子元素
      var pre = document.createElement ('pre');
      pre.appendChild(code);
    
      // 添加 class 属性
      pre.setAttribute ('class', 'prettyprint');
    
      // 替换原来的blockquote元素为pre元素
      blockquote.parentNode.replaceChild (pre, blockquote);
  }); 
});
