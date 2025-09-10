
'use server';

export async function getBookContent(url: string) {
    try {
        const response = await fetch(url, { cache: 'force-cache' }); // Cache aggressively
        if (!response.ok) {
            throw new Error(`Failed to fetch book content: ${response.statusText}`);
        }
        const text = await response.text();
        return text;
    } catch (error) {
        console.error("Error fetching book:", error);
        // Return a user-friendly error message or rethrow
        if (error instanceof Error) {
            throw new Error(`Could not load book content. Please try again later. (Reason: ${error.message})`);
        }
        throw new Error("Could not load book content due to an unknown error.");
    }
}

    