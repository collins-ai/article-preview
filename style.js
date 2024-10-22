const toolTip = document.getElementById(`tooltip`)
const shareBtn = document.getElementById(`share`)
const share1Btn = document.getElementById(`share1`)


shareBtn.addEventListener(`click`, function() {
    toolTip.classList.toggle(`hide`)
})

share1Btn.addEventListener(`click`, function() {
    toolTip.classList.toggle(`hide`)
})
