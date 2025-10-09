export interface ProjectType {
    projectId: string,

    title: string,
    description: string,
    thumbnailUrl: string,
    gitRepoUrl: string | null,
    liveLink: string | null,
    blogLink: string | null,
    techStack: string[],

    storyFragments: {
        index: number,
        title: string,
        textContent: string,
        cardColor: string
    }[],
}

export interface BlogType {
    // _id?: ObjectId;
    blogId: string;
    createdAt: number;
    updatedAt: number;
    ownerId: string;
    ownerName: string;
    lastEditTime: number | null,
    parentNodeIdArray?: string[] | null,

    viewStatus: string;
    blogTitle: string;
    blogTextContent: string;
    thumbnailUrl?: string | null;

    tags: string[];
    likes: string[];
    views: number;
    bookmarks: number;
    commentsNumber: number;
}