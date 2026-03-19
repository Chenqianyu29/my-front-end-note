// 1. 创建实例
const observer = new MutationObserver((mutationList, observer) => {
  mutationList.forEach((item) => {
    if (item.type === "childList") {
      console.log("子节点被新增或删除了");
    } else if (item.type === "attributes") {
      console.log(`${item.attributeName}被修改了`);
    }
  });
});

// 2. 监听配置
const config = {
  childList: true,
  attributes: true,
  attributeFilter: ["class"],
  subTree: true,
};

// 3. 开启监听
const target = document.getElementById("target");
observer.observe(target, config);

// 4. 关闭监听
observer.disconnect();
