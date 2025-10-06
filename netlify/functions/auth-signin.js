const { neon } = require("@netlify/neon");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const sql = neon();

exports.handler = async function (event) {
  try {
    const body = JSON.parse(event.body || "{}");
    const { email, password } = body;
    if (!email || !password) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing email or password" }) };
    }

    const [user] = await sql`SELECT id, name, email, password_hash FROM users WHERE email = ${email}`;
    if (!user) {
      return { statusCode: 401, body: JSON.stringify({ error: "Invalid credentials" }) };
    }

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return { statusCode: 401, body: JSON.stringify({ error: "Invalid credentials" }) };

    // Create a simple session token (for demo only). In production use secure cookies or JWTs.
    const token = crypto.randomBytes(24).toString("hex");

    // Optionally store session in DB. For now return token with user info
    return { statusCode: 200, body: JSON.stringify({ user: { id: user.id, name: user.name, email: user.email }, token }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message || String(err) }) };
  }
};
