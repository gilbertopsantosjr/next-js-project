export interface Job {
    id: string;
    title: string;
    description: string;
    createAt: Date;
    updateAt: Date;
    company: Company;
}

export interface Company {
    logo: string;
    name: string;
}