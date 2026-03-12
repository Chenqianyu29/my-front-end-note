// 1. 创建实例
const observer = new MutationObserver((mutationList, observer) => {
  mutationList.forEach((item) => {
    if (item.type === "childList") {
      console.log("子节点变动了");
    }
  });
});

// 2. 监听配置
const config = {
  childList: true,
  attributes: true,
  attributeFilter: ["class"],
  subTree: true,
  characterData: true,
};

// 3. 启动监听
const target = document.getElementById("target");
observer.observe(target, config);

// 4. 停止监听
observer.disconnect();
