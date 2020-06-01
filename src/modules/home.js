const Home = (() => {
    const setHome = () => {
        const container = document.getElementById('content');

        const main = document.createElement('main');
    
        const introDiv = document.createElement('div');
        introDiv.setAttribute('id', 'intro-div');
        const introName = document.createElement('h2');
        const introP = document.createElement('p');
        introName.innerText = 'Aviachi';
        introP.innerText = 'Lavish, but distinguished. Refined, yet authentic\n The best Italian food in town, Come and join us! No reservation required!';

        const aboutDiv = document.createElement('div');
        aboutDiv.setAttribute('id', 'about-div');
        const aboutTitle = document.createElement('h3');
        const aboutP = document.createElement('p');
        aboutTitle.innerText = 'About Us';
        aboutP.innerText = 'The freshest seasonal ingredients daily, personally selected by our kitchen. Using traditionally recipes from the old country. We are here to serve.';

        introDiv.appendChild(introName);
        introDiv.appendChild(introP);

        aboutDiv.appendChild(aboutTitle);
        aboutDiv.appendChild(aboutP);

        main.appendChild(introDiv);
        main.appendChild(aboutDiv);

        container.appendChild(main);
    };

    return {
        setHome
    }
})();

export default Home;