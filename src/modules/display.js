import { setupSidebar } from "./sidebar";
import { setupMain } from "./mainContent";

const setupSite = () => {
    setupSidebar();
    setupMain();
}

export { setupSite };