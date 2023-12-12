document.addEventListener('DOMContentLoaded', function () {
  const accessToken =
    'IGQWRPZAlVuX1Njd1h0dUZAFdzBOX1hVUkdfYUgyRzd3cFp4bUtNTmRxMHVraS1IRDRmMWx4ZAWpwc2VoMk5OZA2s0VTlmVlVfV3ZAhcDUyVEFFbXdwcGREdXRRcG1Cd3dYYmZA3RGsyRFR1clFoMmxGdTJLelo0UFZAhbW8ZD'
  const apiUrl = `https://graph.instagram.com/v13.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const latestPosts = data.data.slice(0, 3)
      const instagramFeed = document.getElementById('instagramFeed')

      latestPosts.forEach((post) => {
        const postElement = createInstagramPostElement(post)
        instagramFeed.appendChild(postElement)
      })
    })
    .catch((error) => console.error(error))

  function createInstagramPostElement(post) {
    const postElement = document.createElement('div')
    postElement.className = 'instagram-post'

    const imgElement = document.createElement('img')
    imgElement.src = post.media_url
    imgElement.alt = post.caption || 'Instagram Post'
    postElement.appendChild(imgElement)

    return postElement
  }
})
