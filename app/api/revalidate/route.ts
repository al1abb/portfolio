import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get("secret");
    const SECRET_TOKEN = process.env.SECRET_TOKEN;

    if (secret !== SECRET_TOKEN) {
        return new NextResponse(
            JSON.stringify({
                message: "Invalid Token",
            }),
            {
                status: 401,
                statusText: "Unauthorized",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }

    const path = request.nextUrl.searchParams.get("path");

    if (path) {
        revalidatePath(path);
        return NextResponse.json({ revalidated: true, now: Date.now() });
    }

    return NextResponse.json({
        revalidated: false,
        now: Date.now(),
        message: "Missing path to revalidate",
    });
}
