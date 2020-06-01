const Contact = (() => {
    const setContact = () => {
        const container = document.getElementById('content');

        const main = document.createElement('main');

        const contactDiv = document.createElement('div');
        const contactInfo = document.createElement('p');
        contactDiv.setAttribute('id', 'contact-div');
        contactInfo.innerText = 'Phone: 000 1234 5678\n Address: 1-1-1 Minato-ku\n Tokyo-to, Japan';

        contactDiv.appendChild(contactInfo);
        main.appendChild(contactDiv);
        container.appendChild(main);
    };
    return {
        setContact
    }
})();

export default Contact;