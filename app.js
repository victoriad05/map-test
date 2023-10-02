const BuildingBtns = document.querySelectorAll('.building-btn');
const BuildingInfoBtns = document.querySelectorAll('.building-info');

function openBuildingInfo (index) {
    const info = BuildingInfoBtns[index];
    info.classList.toggle('open');

    const buildingName = BuildingBtns[index].getAttribute('data-name');
    info.querySelector('.building-name').textContent = buildingName;
}

document.addEventListener('click', (e) => {
    const target = e.target;

    const ifBuildingBtn = Array.from(BuildingBtns).includes(target);
    BuildingBtns.forEach((btn, index) => {
        if(ifBuildingBtn && target === btn) {
            e.stopPropagation();
            openBuildingInfo(index)
        } else {
            BuildingInfoBtns[index].classList.remove('open')
        }
    })

})
