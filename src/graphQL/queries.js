import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query GetCharacters($page: Int!, $name: String, $status: String) {
        characters(page: $page, filter: { name: $name, status: $status }) {
            results {
                id
                name
                status
                species
                image
                gender
            }
            info {
                pages
            }
        }
    }
`;


export const GET_CHARACTERS_BY_ID = gql`
    query GetCharacterById($id: Int!) {
        characters(id: $id) {
            
            name
            image
            status
            species
            gender
            url
            
        }
    }

`;