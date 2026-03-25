module.exports = async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	const { name, email, message } = req.body;

	const text = `
📩 New Contact Form

👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}
  `;

	try {
		const response = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				chat_id: process.env.CHAT_ID,
				text
			})
		});

		const result = await response.json()
		if (result?.ok) {
			return res.status(200).json({ success: true });
		}
		return res.status(500).json({ success: false });

	} catch (err) {
		return res.status(500).json({ success: false });
	}
}