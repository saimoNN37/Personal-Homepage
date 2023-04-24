const color = {
white: "#FFFFFF",
mercury: "#E5E5E5",
slateGray: "#6E7E91",
mineShaft: "#252525",
whiteLilac: "#FBFBFE",
anakiwa: "8CC2FF",
scienceBlue: "#0366D6",
iron: "D1D5DA",
violet: "#090A3308",
dodgerBlue: "#2188FF",
semiDark: "rgba(54, 54, 54, 0.72)",
semiGray: "rgba(209, 213, 218, 0.1)",

};

export const lightTheme = {
    elementColor: {
        site: {
            background: color.whiteLilac,
            text: color.slateGray,
        },
        header: {
            thisIs: color.slateGray,
            name: color.mineShaft,
        },
        buttonLink: {
            text: color.white,
            shadowHover: color.anakiwa,
            background: color.scienceBlue
        },
        section: {
            background: color.white,
            header: color.mineShaft,
            titleUnderLine: color.iron,
        },
        list: {
            text: color.slateGray,
            eclipse: color.scienceBlue,
        },
        footer: {
            letsTalk: color.slateGray,
            email: color.mineShaft,
            icons: color.mineShaft,
            aboutMe: color.mineShaft,
            iconsHover: color.scienceBlue,
        },
        portfolio: {
            subHeader: color.mineShaft,
            title: color.mineShaft,
            border: color.iron,
            shadow: color.violet,
            secondText: color.slateGray,
            tileTitle: color.scienceBlue,
            background: color.white,
            tileLink: color.scienceBlue,
            paragraph: color.mineShaft,
            spinner: color.iron,
            spinnerColor: color.scienceBlue, 
        },
        themeSwitch: {
            text: color.slateGray,
            background: color.mercury,
            switcherBackground: color.slateGray,
        }
    
    }
};

export const darkTheme = {
    elementColor: {
        site: {
            background: color.mineShaft,
            text: color.white,
        },
        header: {
            thisIs: color.white,
            name: color.white,
        },
        buttonLink: {
            text: color.white,
            shadowHover: color.anakiwa,
            background: color.dodgerBlue
        },
        section: {
            background: color.semiDark,
            header: color.white,
            titleUnderLine: color.semiGray,
        },
        list: {
            text: color.white,
            eclipse: color.dodgerBlue,
        },
        footer: {
            letsTalk: color.white,
            email: color.white,
            icons: color.white,
            aboutMe: color.white,
            iconsHover: color.dodgerBlue,
        },
        portfolio: {
            subHeader: color.white,
            title: color.white,
            border: color.semiGray,
            shadow: color.violet,
            secondText: color.white,
            tileTitle: color.scienceBlue,
            background: color.semiDark,
            tileLink: color.dodgerBlue,
            paragraph: color.white,
            spinner: color.semiDark,
            spinnerColor: color.scienceBlue, 
        },
        themeSwitch: {
            text: color.white,
            background: color.semiDark,
            switcherBackgroung: color.white,
        }
    
    }
};