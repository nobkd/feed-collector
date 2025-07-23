
function buildEntry(url) {
  let row = document.createElement("tr")
  let linkCell = document.createElement("td")
  let btnCell = document.createElement("td")

  row.appendChild(linkCell)
  row.appendChild(btnCell)

  let link = document.createElement("a")
  let btn = document.createElement("button")

  linkCell.appendChild(link)
  btnCell.appendChild(btn)

  link.href = url
  link.innerText = url

  btn.innerText = "Copy"
  btn.onclick = () => navigator.clipboard.writeText(url)

  return row
}

function showData(links) {
  const el = document.getElementById('links')

  if (links == undefined || links.length == 0) {
    const row = document.createElement("tr")
    const cell = document.createElement("td")

    cell.innerText = "Nothing found."

    row.appendChild(cell)
    el.appendChild(row)

    return
  }

  for (let lnk of links) {
    el.appendChild(buildEntry(lnk))
  }
}

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
  browser.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    browser.tabs.sendMessage(
      tabs[0].id,
      { from: 'popup', subject: 'feeds' },
      showData)
  })
})
