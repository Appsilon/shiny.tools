const getStarsTotal = (repos) => {
  
  const libs = [
    'shiny.semantic',
    'semantic.dashboard',
    'shiny.info',
    'shiny.router',
    'shiny.i18n'
  ];

  // get an array of repositories specified above
  const opensourceRepos = libs.map(lib => repos.find(repo => repo.name === lib) || lib);

  // create nodes with fetched values in info sections
  opensourceRepos.forEach(repo => {
    if (repo.name) {
      const repoId = repo.name.replace('.', '-');
      const starsOutput = document.querySelector(`.stars--${repoId} .stars__output`);
      starsOutput.innerHTML = repo.stargazers_count;
    } else {
      const repoId = repo.replace('.', '-');
      const stars = document.querySelector(`.stars--${repoId}`);
      stars.classList.add('stars--hidden');
    }
  });
}

// fetch github api
const test = fetch('https://api.github.com/orgs/Appsilon/repos')
  .then(resp => resp.json())
  .then(resp => getStarsTotal(resp));