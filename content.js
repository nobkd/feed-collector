

browser.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.from == "popup" && msg.subject == "feeds") {
    const links = [...document.querySelectorAll("link[rel=alternate]")]
      .map(el => el.href)
      .filter(l => l.includes("rss") || l.includes("atom") || l.includes("feed") || l.includes("xml"))

    // console.debug(links)
    response(links)
  }
})
