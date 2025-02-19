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
    query GetCharacterById ($characterID: ID!) {
        character(id: $characterID){
        id
        name
        status
        species
        type
        gender
        location{
            name
        }
        image
        origin{
            name
        }
        episode{
            name
        }
        created
        }
    }

`;

