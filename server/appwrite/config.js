import conf from "../config/config";

import { Client, Account } from "appwrite";

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

export { ID } from "appwrite";
