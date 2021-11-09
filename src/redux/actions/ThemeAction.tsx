

const setMode = ( mode: any ) => {
    return {
        type: 'SET_MODE',
        payload: mode
    }
} 

const setColor = ( color: any ) => {
    return {
        type: 'SET_COLOR',
        payload: color
    }
}

const getTheme = () => {
    return {
        type: 'GET_THEME'
    }
}

const ThemeActions = {
    setMode,
    setColor,
    getTheme
}

export default ThemeActions