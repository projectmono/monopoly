import styled from 'styled-components'
import pawn from '../img/pawn.svg'


const CardTitle = styled.div`

    font-size: 1.3vh;
    text-align: center;
    ${(props) => ( (props.position >= 11 && props.position <= 19) || (props.position >= 31 && props.position <= 39) ? "margin-top : 0px" : "margin-top : 10px" )}

`


const Pawn = styled.div`

    mask-image: url(${pawn});
    background-color : ${props => props.pawnColor};
    mask-size : 60%;
    mask-repeat: no-repeat;
    mask-position: center;
    min-height : 30%;
    min-width : 30%;
    flex-grow : 1;
    flex-shrink : 2;

`
const ActionButton = styled.button`

    width : 90%;
    height : 5rem;
    background-color : #A994C3;
    margin-top : 1rem;
    border : 0;
    border-radius : 3%;
    font-family : "Trocchi";
    font-size : 1.5rem;
    transition-duration: 0.4s;
    margin : 10px;
    &:hover{

        background-color : #8e5ccc;
    
    }


`

export {CardTitle, Pawn, ActionButton};