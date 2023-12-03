'use strict';
async function searchSeries() {
    const query = document.getElementById('query').value;
    try {
        // Fetch data from TVMaze API
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        if (!response.ok) throw new Error('Invalid input!');

        const data = await response.json();

        // Clear old results
        document.getElementById('results').innerHTML = '';

        // Display JSON data in the console
        console.log(data);

        // Display search result in the HTML
        data.forEach(tvShow => {
          const article = document.createElement('article');

          // Display name in <h2> element
          const nameHeading = document.createElement('h2');
          nameHeading.textContent = tvShow.show.name;
          article.appendChild(nameHeading);

          // Display medium image with <img src="" alt="">
          const imgElement = document.createElement('img');
          imgElement.src = tvShow.show.image?.medium ?? 'no-image-available.jpg';
          imgElement.alt = tvShow.show.name;
          article.appendChild(imgElement);

          const gapElement = document.createElement('p');
          article.appendChild(gapElement);

          // Display url in <a> element with target="_blank"
          const detailsLink = document.createElement('a');
          detailsLink.href = tvShow.show.url;
          detailsLink.textContent = 'Details';
          detailsLink.target = '_blank';
          article.appendChild(detailsLink);

          // Display summary in <div> element
          const summaryDiv = document.createElement('div');
          summaryDiv.innerHTML = tvShow.show.summary;
          article.appendChild(summaryDiv);

          // Append <article> element to the results
          document.getElementById('results').appendChild(article);
        });

      } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}