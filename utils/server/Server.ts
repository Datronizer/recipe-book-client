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