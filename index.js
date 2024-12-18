let countEl = document.getElementById("count")
let count = parseInt(document.getElementById("count").innerText)

let saveEl = document.getElementById("saved")
let entries = []

let totalEl = document.getElementById("total")
function increment() {
    count += 1
    countEl.textContent = count
}
function decrement() {
    if (count == 0) {
        return
    }
    count -= 1
    countEl.textContent = count
}
function save() {
    if (count > 0) {
        entries.push(count)
    }
    count = 0
    countEl.textContent = count
    saveEl.textContent = "Previous entries: " + entries.join(" + ")

    total = entries.reduce((total, number)=> total + number, 0)
    totalEl.textContent = "Total: " + total
}
