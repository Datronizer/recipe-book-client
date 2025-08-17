import { instanceToPlain } from 'class-transformer';


export async function get(url: URL): Promise<any>
{
    try
    {
        const res = await fetch(url, {
            method: "GET",
            // headers: {},
        });
        return res.json();
    }
    catch (error)
    {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export async function post(url: URL, body: Record<string, any>): Promise<any>
{
    try
    {
        const bodyStr = JSON.stringify(instanceToPlain(body));
        const res = await fetch(url, {
            method: "POST",
            body: bodyStr,
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(errorText)
        }

        return res.json();
    }
    catch (error)
    {
        console.error("Error fetching data:", error);
        throw error;
    }
}