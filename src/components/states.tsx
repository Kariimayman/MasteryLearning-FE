const { atom, selector } = require("recoil")
export const currentPage = atom({
    key:"currentPagekey",
    default:"الرئيسية"
})  