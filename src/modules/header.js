const Header = (() => {
    const setHeader = () => {
        const container = document.getElementById('content');
        
        const header = document.createElement('header');

        const name = document.createElement('h1');
        name.setAttribute('id', 'name')
        name.innerText = 'Aviachi';

        const nav = document.createElement('ul');
        const liHome = document.createElement('li');
        const liMenu = document.createElement('li');
        const liContact = document.createElement('li');
        liHome.setAttribute('id', 'home');
        liMenu.setAttribute('id', 'menu');
        liContact.setAttribute('id', 'contact');
        liHome.innerText = 'Home';
        liMenu.innerText = 'Menu';
        liContact.innerText = 'Contact';

        nav.appendChild(liHome);
        nav.appendChild(liMenu);
        nav.appendChild(liContact);

        header.appendChild(name);
        header.appendChild(nav);

        container.appendChild(header);
    };
    return {
        setHeader
    }
})();

export default Header;