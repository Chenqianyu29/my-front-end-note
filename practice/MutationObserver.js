// 创建observer实例
const observer = new MutationObserver((mutationsList, observer) => {
  mutationsList.forEach((mutation) => {
    if (mutation.type === "childList") {
      console.log("子节点被新增或删除");
    } else if (mutation.type === "attibutes") {
      console.log(mutation.attributeName + "属性被修改了");
    }
  });
});

// 监听配置
const config = {
  childList: true, // 监听子节点
  attibutes: true, // 监听属性
  attributeFilter: ["class", "id"], // 仅监听 class 和 id 属性，不指定则监听所有属性
  subtree: true, // 监听所有后代
};

// 使用observer：传入监听的目标和配置
const node = document.getElementById("traget");
observer.observe(node, config);

// 停止监听
observer.disconnect();
