const selectionButtons = document.querySelectorAll('[data-selection]') 


selectionButtons.forEach(selectionButtons => {
    selectionButton.addEventListener('click', e => {
        const SelectionName = selectionButton.dataset.selection
        makeSelection(SelectionName)
    })
});

function makeSelection(selection) {
    console.log(selection);
}