import Header from './modules/header';
import Home from './modules/home';
import Menu from './modules/menu';
import Contact from './modules/contact';

const clearPage = () => {
    const container = document.getElementById('content');
    container.removeChild(content.lastChild);
};

const displayHome = () => {
    clearPage();
    Home.setHome();
};

const displayMenu = () => {
    clearPage();
    Menu.setMenu();
};

const displayContact = () => {
    clearPage();
    Contact.setContact();
};

document.addEventListener('DOMContentLoaded', () => {
    Header.setHeader();
    Home.setHome();

    const name = document.getElementById('name');
    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const contactUs = document.getElementById('contact');
    const menuButton = document.getElementById('menuButton');

    name.addEventListener('click', displayHome);
    home.addEventListener('click', displayHome);
    menu.addEventListener('click', displayMenu);
    contactUs.addEventListener('click', displayContact);
    menuButton.addEventListener('click', displayMenu);
});