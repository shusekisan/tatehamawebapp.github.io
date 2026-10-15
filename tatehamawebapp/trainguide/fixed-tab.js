function updateTime() {
    const now = new Date();
    now.setHours(now.getHours() + Location_data.TimeOffset ?? -10); // サーバーから取得した時間またはTST-10hに補正
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const timeElem = document.getElementById('fixed-time');
    if (timeElem) {
        timeElem.textContent = `最終更新 ${hh}:${mm}(TST) 現在`;
    }
}