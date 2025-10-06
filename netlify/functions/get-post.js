const { neon } = require("@netlify/neon");

// Create a Neon client. This will automatically use process.env.NETLIFY_DATABASE_URL
const sql = neon();

exports.handler = async function (event) {
  try {
    const id = event.queryStringParameters && event.queryStringParameters.id;
    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing id query parameter" }),
      };
    }

    // Use tagged template to safely pass parameters
    const [post] = await sql`SELECT * FROM posts WHERE id = ${id}`;

    return {
      statusCode: 200,
      body: JSON.stringify(post || null),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || String(err) }),
    };
  }
};
