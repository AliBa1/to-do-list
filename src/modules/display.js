import { setupSidebar } from "./sidebar";
import { setupMain } from "./mainContent";
import { setData } from "./storage";

const setupSite = () => {
    setData();
    setupSidebar();
    setupMain();
}

export { setupSite };