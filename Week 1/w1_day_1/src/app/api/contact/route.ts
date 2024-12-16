import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    // Validate the incoming data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // You can process the data here, e.g., save it to a database or send an email
    // Example: Log the data (replace this with your actual logic)
    console.log("Form data received:", { name, email, message });

    // Respond with success
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
