const linkSocialMedia = {
  github: 'PaulistexX',
  youtube: 'variasparadasmuitosroles',
  instagram: 'diegopaulistex',
  twitter: 'paulistex'
}
/*
Three different forms to write in Jscript as 'good pratices'

camelCas
PascalCase
snake_case

usar "id" ao inves de class para identificar elementos no html
*/

// Para criar uma function temos que
// function nameOfTheFunction(argument) {code}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linkSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
    })
}

getGitHubProfileInfos()
