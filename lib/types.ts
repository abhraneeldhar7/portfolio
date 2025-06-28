export interface ProjectType {
    name: string,
    description: String,
    imageUrl: string,
    githubRepo?: string | null,
    liveLink: string,
    techStack: string[],
    blogLink?: string | null,
    work: string,
    status: string
}