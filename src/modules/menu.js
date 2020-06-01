const Menu = (() => {
    let menuItems = [
        {
            name: 'Traditional Meatballs',
            description: 'Veal and Pork, topped with our sauce and Parmesan.'
        },
        {
            name: 'Scallop Tartare',
            description: 'A medley of scallops, capers, and red onion.'
        },
        {
            name: 'Caesar Salad',
            description: 'Fresh lettuce, croutons, the works.'
        },
        {
            name: 'Lobster linguine',
            description: 'Butter poached lobster, tomato sauce, and Parmesan.'
        },
        {
            name: 'Chicken Parmigiana',
            description: 'fried chicken smothered with tomato sauce and melted cheese.'
        },
        {
            name: 'Ratatouille',
            description: 'Traditional medley of stewed vegetable in our signature sauce.'
        },
        {
            name: 'Tiramisu',
            description: "Lot's of ladyfingers dipped in coffee, Mascarpone and cocoa."
        }
    ];
    const setMenu = () => {
        const container = document.getElementById('content');

        const main = document.createElement('main');

        const mainDiv = document.createElement('div');
        mainDiv.setAttribute('id', 'mainMenuDiv');

        for(let i = 0; i < menuItems.length; i++) {
            const menuDiv = document.createElement('div');
            const menuDivName = document.createElement('h4');
            const menuDivDesc = document.createElement('p');
            menuDivName.innerText = menuItems[i].name;
            menuDivDesc.innerText = menuItems[i].description;

            menuDiv.appendChild(menuDivName);
            menuDiv.appendChild(menuDivDesc);
            mainDiv.appendChild(menuDiv);
        };
        main.appendChild(mainDiv)
        container.appendChild(main);
    };
    return {
        menuItems,
        setMenu
    }
})();

export default Menu;