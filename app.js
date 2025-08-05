// 1. 取得我們需要操控的演員 (HTML 元素)
const sceneApplication = document.getElementById('scene-application');
const sceneDashboard = document.getElementById('scene-dashboard');
const goToDashboardButton = document.getElementById('btn-goto-dashboard');

// 2. 監聽按鈕的點擊事件
goToDashboardButton.addEventListener('click', () => {
  // 方便我們除錯，確認按鈕有點到
  console.log('按鈕被點擊了！準備切換場景...');

  // 3. 切換場景！
  // 把第一個場景藏起來 (幫它加上 hidden class)
  sceneApplication.classList.add('hidden');

  // 把第二個畫面顯示出來 (把它的 hidden class 移除)
  sceneDashboard.classList.remove('hidden');
});
