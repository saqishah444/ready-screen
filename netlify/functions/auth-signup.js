const { neon } = require("@netlify/neon");
const bcrypt = require("bcryptjs");

const sql = neon();

exports.handler = async function (event) {
  try {
    const body = JSON.parse(event.body || "{}");
    const { name, email, password } = body;
    if (!email || !password) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing email or password" }) };
    }

    const hashed = await bcrypt.hash(password, 10);

    // Insert user and return created user (without password)
    const [user] = await sql`
      INSERT INTO users (name, email, password_hash)
      VALUES (${name || null}, ${email}, ${hashed})
      RETURNING id, name, email
    `;

    return { statusCode: 201, body: JSON.stringify(user) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message || String(err) }) };
  }
};
