import { createHeader, createHome, createTabs, createMenu, createContact } from "./createDOM";

const content = document.getElementById('content');

createHeader(content);
createTabs(content);
createHome(content);