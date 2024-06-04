export interface Participant {
    id?: number;
    email: string,
    name: string,
    password: string,
    contact: string,
    roles: string[],
    enabled: boolean// New property to track approval status
}
