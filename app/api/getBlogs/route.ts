export async function GET() {
    const res = await fetch(`https://bugspot.vercel.app/api/getBlogs?userId=101766837132725568508`);
  
    if (res.ok) {
      const data = await res.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ error: "Failed to fetch user blogs" }), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    }
  }