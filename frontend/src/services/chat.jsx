import { makeRequest } from "./makeRequest";

export async function getConversation() 
{
    return makeRequest('/login');
}