export interface Login {
    email: string;
    password: string;
}

export interface LoginResponseData {
    // userId?: string;
    // userName?: string;
    email?: string;
    userType?: string;
    loggedOn?: Date;
}

// export interface LoginResponse {
//     data: LoginResponseData;
// }