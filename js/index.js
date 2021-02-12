window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.program__button').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event){
            const week = event.currentTarget.dataset.week
            document.querySelectorAll('.program__button').forEach(function(tabCon) {
                tabCon.classList.remove('program__button-active')
            })
            document.querySelector(`[data-target="${week}"]`).classList.add('program__button-active')
        })
    })
    document.querySelectorAll('.program__button').forEach(function(tabsBtn2) {
        tabsBtn2.addEventListener('click', function(event2){
            const content = event2.currentTarget.dataset.content
            document.querySelectorAll('.program-content').forEach(function(tabCon2) {
                tabCon2.classList.remove('display-block')
            })
            document.querySelector(`[data-target="${content}"]`).classList.add('display-block')
        })
    })
})
