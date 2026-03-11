// 1. 创建实例
const observer = new MutationObserver((mutationsList, observer) => {
  mutationsList.forEach((mutation) => {
    if (mutation.type === "childList") {
      console.log("子节点被新增或删除");
    } else if (mutation.type === "attributes") {
      console.log(mutation.attributeName + "属性被修改了");
    }
  });
});

// 2. 监听配置
const config = {
  childList: true,
  attributes: true,
  attributesFilter: ["class", "id"],
  subTree: true,
  characterData: true,
};

// 3. 启动监听
const node = document.getElementById("target");
observer.observe(node, config);

// 4. 关闭监听
observer.disconnect();
