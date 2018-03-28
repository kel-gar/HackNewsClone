let url = 'https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=8e1b3f61c5fa41aeac3ea4638086a011';

fetch(url)
  .then(r => {
  return r.json();
  })
  .then(data => {
  let results = data.articles;
  let newsList = document.createElement("ol");
  let body = document.querySelector("body");
  body.appendChild(newsList);
  results.map(news => {
    let newsItem = document.createElement("li");
    newsItem.innerHTML = '<a href="' + news.url + '">' + news.title + "</a>";
    newsList.appendChild(newsItem);
  });
})
  .catch(e => {
  console.log(`An error occured: ${e}`);
})
