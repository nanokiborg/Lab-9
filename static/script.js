function updateProd(el) {
    product_id = el.value
    fetch('/in_stock/' + product_id, {
        method: 'patch',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'in_stock': el.checked})
    })
    console.log(product_id)
}

function addProject() {
    let projName = document.getElementById('proj_name').value
    let link = document.getElementById('link').value
    fetch('/add', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'proj_name': projName,
                             'link': link})
    })
//    console.log("Add")
}