import { NextResponse } from "next/server";
// Using require as per Elastic Email's standard JS docs
const ElasticEmail = require("@elasticemail/elasticemail-client");

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Setup Elastic Email Client
    const defaultClient = ElasticEmail.ApiClient.instance;
    const apikey = defaultClient.authentications["apikey"];
    apikey.apiKey = process.env.ELASTIC_EMAIL_API_KEY;

    const api = new ElasticEmail.EmailsApi();

    // Construct the email payload
    const emailMessage = ElasticEmail.EmailMessageData.constructFromObject({
      Recipients: [
        new ElasticEmail.EmailRecipient("hackathon.d211@gmail.com"), // The inbox you want to receive messages in
      ],
      Content: {
        Body: [
          ElasticEmail.BodyPart.constructFromObject({
            ContentType: "HTML",
            Content: `
              <h2>New Message from Website</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          }),
        ],
        Subject: `Message from Website: ${name}`,
        From: "hackathon.d211@gmail.com", // This must be a verified sender domain in Elastic Email
        ReplyTo: email, // Allows you to hit "Reply" and email the user back directly
      },
    });

    // Wrap the callback-based API in a Promise for modern async/await handling
    await new Promise((resolve, reject) => {
      api.emailsPost(emailMessage, (error: any, data: any, response: any) => {
        if (error) {
          console.error("Elastic Email Error:", error);
          reject(error);
        } else {
          resolve(data);
        }
      });
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 },
    );
  }
}
