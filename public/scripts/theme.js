const checkboxState = (state) => document.getElementById('theme-checkbox').checked = state;

const localSavedThemePreference = () => {
    return lsGetItem('theme');
};

const checkBrowserThemePreference = () => {
    const themePreference = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'; 
    return themePreference;
};

const changeTheme = (theme) => {
    const bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.className = theme;
};

const toggleTheme= () => {
    const themeCheckBox = document.getElementById('theme-checkbox');
    if (themeCheckBox.checked) {
        lsSetItem('theme', 'dark');
        changeTheme('dark-theme');
    } else {
        lsSetItem('theme', 'light');
        changeTheme('light-theme');
    }
};

const initTheme = () => {
    const localSavedTheme = localSavedThemePreference();
    if(localSavedTheme) {
        if(localSavedTheme === 'dark'){
            changeTheme('dark-theme');
            checkboxState(true);
        } else {
            changeTheme('light-theme');
            checkboxState(false);
        }
        return
    }
    const browserTheme = checkBrowserThemePreference();
    browserTheme === 'dark' ? changeTheme('dark-theme') : changeTheme('light-theme');
};