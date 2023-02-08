import styled,{createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --darkColor1: #2C3333;
        --darkColor2: #395B64;
        --darkColor3: #A5C9CA;
        --darkColor4: #E7F6F2;

        --lightColor1: #EEEEEE;
        --lightColor2: #00ADB5;
        --lightColor3: #393E46;
        --lightColor4: #222831;

        --decorationColor1: #041562;
        --decorationColor2: #11468F;
        --decorationColor3: #DA1212;
        --decorationColor4: var(--lightColor1)


        --primaryFont: 'Cuprum', sans-serif;
        --secondaryFont:'Amatic SC', cursive;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
    }

    body{
        height: 100vh;
    }
`

export const BackgroundAnimate = styled.main`
    background-color: var(--darkColor4);
    color: var(--lightColor4);
    font-family: var(--secondaryFont);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
    width: 100%;
    height: 100%;
    grid-area: main;
`

export const BackgroundAuth = styled.main`
    background-color: var(--darkColor4);
    color: var(--lightColor4);
    font-family: var(--secondaryFont);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
    width: 100%;
    height: 100vh;
`

export const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr 1fr;
  grid-template-rows: 0.2fr 1.8fr 1fr;
  gap: 0px 0px; 
  width: 100vw;
  min-height: 100vh;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "sidebar main main";
`