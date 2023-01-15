export function createHeader(container) {
    // Create header logo
    const logo = document.createElement('h1');
    logo.innerHTML = "Heaven's Kitchen";
    logo.id = "logo";

    container.append(logo);
}
// Tabs
export function createTabs(container) {
    const tabsDiv = document.createElement('div');
    tabsDiv.id = "tabs";

    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.innerHTML = "Home";
    menuBtn.innerHTML = "Menu";
    contactBtn.innerHTML = "Contact";

    homeBtn.classList.add("tab");
    menuBtn.classList.add("tab");
    contactBtn.classList.add("tab");
    homeBtn.id = "home-tab";
    menuBtn.id = "menu-tab";
    contactBtn.id = "contact-tab";

    homeBtn.addEventListener('click', () => {
        createHome(container);
    })
    menuBtn.addEventListener('click', () => {
        createMenu(container);
    })
    contactBtn.addEventListener('click', () => {
        createContact(container);
    })

    tabsDiv.appendChild(homeBtn);
    tabsDiv.appendChild(menuBtn);
    tabsDiv.appendChild(contactBtn);

    container.append(tabsDiv);
}

export function createHome(container) {
    deleteContent();
    const homeDiv = document.createElement('div');
    homeDiv.id = "home";
    homeDiv.classList.add('tab-div');

    toggleActive(document.getElementById('home-tab'));

    const image = document.createElement('img');
    image.src = "../src/image.jpeg";

    const desc = document.createElement('p');
    desc.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


    homeDiv.append(image);
    homeDiv.append(desc);

    container.append(homeDiv);
}

export function createMenu(container) {
    deleteContent();
    const menuDiv = document.createElement('div');
    menuDiv.id = "menu";
    menuDiv.classList.add('tab-div');

    toggleActive(document.getElementById('menu-tab'));

    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < menuItems.length; i++) {
            const item = createMenuItem(menuDiv, menuItems[i]);
        }
    }

    container.append(menuDiv);
}

export function createContact(container) {
    deleteContent();
    const contactDiv = document.createElement('div');
    contactDiv.id = "contact";
    contactDiv.classList.add('tab-div');

    toggleActive(document.getElementById('contact-tab'));

    const form = document.createElement('form');
    const name = document.createElement('input');
    const phone = document.createElement('input');
    const email = document.createElement('input');
    const submitBtn = document.createElement('button');
    name.placeholder = "Name";
    phone.placeholder = "Phone number";
    email.placeholder = "E-mail";
    submitBtn.innerHTML = "Submit";
    name.type = "text";
    phone.type = "number";
    email.type = "email";
    submitBtn.type = "submit";


    form.appendChild(name);
    form.appendChild(phone);
    form.appendChild(email);
    form.appendChild(submitBtn);

    contactDiv.appendChild(form);

    container.append(contactDiv);
}

function deleteContent() {
    const tabs = document.getElementsByClassName('tab-div');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].remove();
      }
}

function toggleActive(button) {
    const btns = document.getElementsByClassName('tab');
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
    }
    button.classList.toggle('active');
}


function createMenuItem(menu, item) {
    const container = document.createElement('div');
    container.classList.add('menu-item');

    const img = document.createElement('img');
    img.classList.add('menu-img');
    img.src = item.src;

    const title = document.createElement('h1');
    title.classList.add('menu-title');
    title.innerHTML = item.title;

    const desc = document.createElement('p');
    desc.classList.add('menu-desc');
    desc.innerHTML = item.desc;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(desc);
    menu.appendChild(container);
}
const menuItems = [
    {
        src: "https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg",
        title: "Pancake",
        desc: "Pancakes are a great food to eat, make gluten free if you a bitch bitch"
    },
    {
        src: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg",
        title: "Burgers",
        desc: "Burgers are a great food to eat, make gluten free if you a bitch bitch"
    }
]
// // HOME
// // MENU
// // CONTACT