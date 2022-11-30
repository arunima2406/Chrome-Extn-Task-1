const btn = document.getElementById('popup')
btn.addEventListener('click',function(){
    getCurrentTab();
    console.log(getCurrentTab());
});
async function getCurrentTab() {
        let queryOptions = { active: true, lastFocusedWindow: true };
        let [tab]  = await chrome.tabs.query(queryOptions);
        document.getElementById('display').innerHTML = tab.title;
        return tab;
}