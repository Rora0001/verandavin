document.addEventListener('DOMContentLoaded', function () {
  const accessToken =
    'IGQWROaXRLTFp2RkRhdmFGNl80U1FkanlNMnRibjZADS19ld3hVQk1adlpsS0E0WUFib1NkcXB3eDd5V3pIUkg0RlBOU1A3OW5QckU5dDhQOHU0NWRwSTZAQdFNNSW5fUVVQMjBNWHJXU0hGQXp1Y0Q5SnVMS2drUncZD'
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
