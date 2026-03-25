export default async function handler(req, res) {
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
		await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				chat_id: process.env.CHAT_ID,
				text
			})
		});

		return res.status(200).json({ success: true });
	} catch (err) {
		return res.status(500).json({ success: false });
	}
}