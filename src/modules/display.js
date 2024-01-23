import { setupSidebar } from "./sidebar";
import { setupMain } from "./mainContent";
import { loadData } from "./storage";

const setupSite = () => {
    loadData();
    setupSidebar();
    setupMain();
}

export { setupSite };