import promptSync from 'prompt-sync';
const getInput = promptSync();

// Define a type for the Tumblr API response.
type TumblrData = {
    tumblelog: {
        title: string;
        name: string;
        description: string;
    };
    "posts-total": number;
    posts: Array<{ photos?: Array<{ "photo-url-1280": string }> }>;
};

/**
 * Fetches Tumblr posts from the API for a given blog and post range.
 * @param blogIdentifier - The Tumblr blog name (e.g., "good" for good.tumblr.com)
 * @param rangeStart - Starting post number (1-based)
 * @param rangeEnd - Ending post number
 * @returns A Promise resolving to the Tumblr data or null on error.
 */
async function getTumblrPosts(blogIdentifier: string, rangeStart: number, rangeEnd: number): Promise<TumblrData | null> {
    const apiEndpoint = `https://${blogIdentifier}.tumblr.com/api/read/json?type=photo&num=${rangeEnd - rangeStart + 1}&start=${rangeStart - 1}`;
    try {
        const response = await fetch(apiEndpoint, { method: "GET" });
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const rawText = await response.text();

        // The API returns JSONP in the format: var tumblr_api_read = { ... };
        // Extract the JSON portion.
        const jsonStart = rawText.indexOf("{");
        const jsonEnd = rawText.lastIndexOf("}");
        if (jsonStart === -1 || jsonEnd === -1) {
            throw new Error("Invalid JSON format received");
        }
        const jsonString = rawText.substring(jsonStart, jsonEnd + 1);
        return JSON.parse(jsonString);
    } catch (err) {
        console.error("Error fetching Tumblr posts:", err);
        return null;
    }
}

/**
 * Outputs the Tumblr data to the console.
 * @param data - The TumblrData object
 */
function displayTumblrData(data: TumblrData): void {
    const blogDetails = {
        title: data.tumblelog.title,
        name: data.tumblelog.name,
        description: data.tumblelog.description,
        totalPosts: data["posts-total"]
    };

    console.log(`\nTitle: ${blogDetails.title}`);
    console.log(`Name: ${blogDetails.name}`);
    console.log(`Description: ${blogDetails.description}`);
    console.log(`Total Posts: ${blogDetails.totalPosts}\n`);

    data.posts.forEach((post, idx) => {
        console.log(`${idx + 1}.`);
        // For single-image posts
        if (post["photo-url-1280"]) {
            console.log(post["photo-url-1280"]);
        }
        // For multi-image posts
        if (post.photos) {
            post.photos.forEach(photo => {
                console.log(`   ${photo["photo-url-1280"]}`);
            });
        }
        console.log();
    });
}

/**
 * Main function for the console application.
 * Prompts the user for input, fetches Tumblr data, and displays it.
 */
async function runTumblrConsoleApp(): Promise<void> {
    const blogId = getInput("Enter the Tumblr blog name: ").trim();
    const rangeStr = getInput("Enter the range (start-end): ").trim();
    const [startStr, endStr] = rangeStr.split("-").map(s => s.trim());
    const startNum = Number(startStr);
    const endNum = Number(endStr);

    if (isNaN(startNum) || isNaN(endNum) || startNum < 1 || endNum < startNum) {
        console.log("Invalid range input. Format: start-end (e.g., 1-5)");
        return;
    }

    const tumblrData = await getTumblrPosts(blogId, startNum, endNum);
    if (tumblrData) {
        displayTumblrData(tumblrData);
    }
}

runTumblrConsoleApp();
