import { AccountsClient, ClientsClient } from "./api";

export let accountsClient: AccountsClient;
export let clientsClient: ClientsClient;

export const intAPIs = (url: string) => {
  console.log(url);
  accountsClient = new AccountsClient(url);
  clientsClient = new ClientsClient(url);
};
