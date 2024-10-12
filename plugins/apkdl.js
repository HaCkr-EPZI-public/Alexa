const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) =>
      fetch(...args)
    ),
  fileSizeUrl = (...args) =>
    import('file_size_url').then(({ default: fileSizeUrl }) =>
      fileSizeUrl(...args)
    ),
  cheerio = require('cheerio'),
  tools = require('./apkapi.js')

async function searchApp(query) {
  let response = await fetch(
      tools.api(5, '/apps/search', {
        query: query,
        limit: 1000,
      })
    ),
    result = {}
  return (
    (response = await response.json()),
    (result = response.datalist.list.map((app) => {
      return {
        name: app.name,
        id: app.package,
      }
    })),
    result
  )
}

async function downloadApp(appName) {
  let response = await fetch(
    tools.api(5, '/apps/search', {
      query: appName,
      limit: 1,
    })
  )
  response = await response.json()
  let appName = response.datalist.list[0].name,
    appPackage = response.datalist.list[0].package,
    appIcon = response.datalist.list[0].icon,
    appDownloadLink = response.datalist.list[0].file.path,
    appLastUpdated = response.datalist.list[0].updated,
    appSize = await fileSizeUrl(appDownloadLink)

  return {
    name: appName,
    lastUpdated: appLastUpdated,
    package: appPackage,
    size: appSize,
    icon: appIcon,
    dllink: appDownloadLink,
  }
}

module.exports = {
  search: searchApp,
  download: downloadApp,
}
