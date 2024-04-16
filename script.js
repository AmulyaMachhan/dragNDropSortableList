const items = document.querySelectorAll(".sortable-list .item");
const sortableList = document.querySelector('.sortable-list');

items.forEach(item => {
    item.addEventListener('dragstart' , ()=>{
        setTimeout(()=>{
            item.classList.add("dragging")
        }, 0)
    })
    item.addEventListener('dragend' , ()=>{
        item.classList.remove("dragging")
    })
    item.addEventListener('dragover' , initSortableList);
    item.addEventListener('dragenter' , e => e.preventDefault());
});

function initSortableList(e) {
    e.preventDefault();
    const draggingItem = document.querySelector('.dragging');

    const siblings = Array.from(document.querySelectorAll('.item:not(.dragging)'));

    const nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    sortableList.insertBefore(draggingItem, nextSibling);
}
