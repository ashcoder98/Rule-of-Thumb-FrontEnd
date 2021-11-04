
import styled from 'styled-components';

export const StyledHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 1rem;
height: 5rem;
width: 100vw;
background-color: #b63030;
color: white;
box-shadow: 1px 1px 3px 2px #808080;
nav {
    display: flex;
    align-items: center;
    margin: 1rem;
    padding: .5rem;
    ul {
        display: flex;
        list-style: none;
        
        li {
            margin-right: 1.5rem;
            font-size: 1.5rem;
            font-weight: 600;
            img {
                height: 50px;
                border-radius: 50%;
            }
            a {
                text-decoration: none;
                color: inherit;
            }
        &:last-child:hover {
            cursor: pointer
        }
        }

    }
}
`;
export const StyledMain = styled.main`
 /* flex-grow: 1; */
 display: flex;
 justify-content: center;
 align-items: center;

`;

