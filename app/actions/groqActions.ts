"use server"

const API_KEY = process.env.GROQ_API;
const API_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "meta-llama/llama-4-scout-17b-16e-instruct";

export async function askGroq(prompt: string): Promise<any | null> {
    await new Promise((r) => setTimeout(r, 2000));
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
    };

    const body = {
        model: MODEL,
        messages: [
            {
                role: "system",
                content:
                    "You are a helpfull assistant helping people to write a reach out message to Abhraneel Dhar",
            },
            {
                role: "user",
                content: prompt,
            },
        ],
        temperature: 1,
    };

    let attempts = 0;
    const maxAttempts = 5;


    while (attempts < maxAttempts) {
        try {
            // console.log(`🔁 [Groq] Sending request (attempt ${attempts + 1}/${maxAttempts})...`);

            const res = await fetch(API_URL, {
                method: "POST",
                headers,
                body: JSON.stringify(body),
            });

            // Handle rate limiting
            if (res.status === 429) {
                const retryAfter = res.headers.get("retry-after") || "60";
                // console.log(res)
                const waitTime = (parseFloat(retryAfter) * 1000);
                console.warn(`⏳ Rate limited. Retrying in ${retryAfter} seconds...`);
                await new Promise((r) => setTimeout(r, waitTime));
                attempts++;
                continue;
            }

            const json = await res.json();
            // console.log("grok response: ", json)
            const content = json.choices?.[0]?.message?.content;
            // console.log(content)
            if (!content) {
                console.warn("⚠️ No content in Groq response.");
                return null;
            }

            // console.log("✅ [Groq] Response received.");
            // return parseGroqResponse(content);
            return content
        } catch (error) {
            console.error("❌ [Groq] Unexpected error:", error);
            attempts++;
            await new Promise((r) => setTimeout(r, 1000));
        }
    }

    console.error(`❌ [Groq] Exceeded ${maxAttempts} retry attempts. Aborting.`);
    return null;
}


export async function writeMessage(userText: string) {
    const prompt = `Here is a message user typed and use it to generate a short creative message to Abhraneel. Do not add extra charecters in the begining or end or any extra text, you are being used in an api. 
    This message is meant to be a reach out message to Abhraneel, write it based on the user text and intent.
    
    For the subject, give a brief title based on the user message, their intent.
    For the body, write a creative message for reaching out based on the given user message. Max words for body is 50.
    output format:
    {
    "subject": "subject text",
    "body": "body text"
    }


    <UserMessage>
    ${userText}
    </UserMessage>
    `

    const res = await askGroq(prompt)
    return res

}