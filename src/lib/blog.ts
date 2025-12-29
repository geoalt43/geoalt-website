import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
    slug: string
    title: string
    date: string
    description: string
    author: string
    authorImage: string
    image?: string
    tags?: string[]
    content: string
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export function getAllPosts(): BlogPost[] {
    // Create directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents)

        return {
            slug,
            content,
            ...(data as { title: string; date: string; description: string; author: string; image?: string; tags?: string[] }),
        } as BlogPost
    })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents)

        return {
            slug,
            content,
            ...(data as { title: string; date: string; description: string; author: string; image?: string; tags?: string[] }),
        } as BlogPost
    } catch {
        return null
    }
}
