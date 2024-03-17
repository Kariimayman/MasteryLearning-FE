const { atom, selector } = require("recoil")
export const isMobile = atom({
    key: "isMobile",
    default: () => {
        try {
            return window.innerWidth < 950;
        } catch (error) {
            console.error('Error determining initial device width:', error);
            return false; // Default to false if an error occurs
        }
    }
})  
