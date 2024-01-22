import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
// import Configuration from "openai";
// import OpenAiApi from "openai";
import OpenAI from "openai";

// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
const openai = new OpenAI({
  // organization: 'org-iulQlpZOK0zkFj1xX9mXoAW7',
  organization: "org-KLsq8QVyYFQMb6VV5L5Bc9Il",
  apiKey: process.env.OPENAI_API_KEY,
});
// const openai = new OpenAiApi(config);

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

    if (!freetrial) {
      return new NextResponse("You have exceeded the free trial limit.", {
        status: 403,
      });
    }
    // console.log('the one: ',userId, body)

    const stream = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages,
    });

    await increaseApiLimit("conversation");

    return NextResponse.json(stream.choices[0].message);
  } catch (e) {
    console.log("eeee: ", e);
  }
}
