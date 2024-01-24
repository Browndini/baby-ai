import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  organization: "org-KLsq8QVyYFQMb6VV5L5Bc9Il",
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured kb.", {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse("messages are required", { status: 400 });
    }

    const freetrial = await checkApiLimit();
    const subscribed = await checkSubscription();

    if (!freetrial && !subscribed) {
      return new NextResponse("You have exceeded the free trial limit.", {
        status: 403,
      });
    }

    const stream = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages,
    });

    if (!subscribed) {
      await increaseApiLimit("conversation");
    }

    return NextResponse.json(stream.choices[0].message);
  } catch (e) {
    console.log("eeee: ", e);
  }
}
