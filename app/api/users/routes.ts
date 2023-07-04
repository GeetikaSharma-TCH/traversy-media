import { NextResponse } from "next/server";
import users from './usersData.json'
export async function POST(request: Request) {
    return NextResponse.json(users)
}