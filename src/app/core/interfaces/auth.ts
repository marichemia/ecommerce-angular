import { User } from "./user";

export interface Register {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface LoginResponseBody {
    user: User;
    accessToken: string;
}
