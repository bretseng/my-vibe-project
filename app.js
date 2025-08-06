// 取得我們的場景和熱點按鈕
const sceneDashboard = document.getElementById('scene-dashboard');
const sceneProjectDetails = document.getElementById('scene-project-details');
const hotspotButton = document.getElementById('hotspot-view-project');

// 監聽熱點按鈕的點擊事件
hotspotButton.addEventListener('click', () => {
  console.log('專案按鈕被點擊！切換到專案細節...');

  // 隱藏儀表板，顯示專案細節
  sceneDashboard.classList.add('hidden');
  sceneProjectDetails.classList.remove('hidden');
});
