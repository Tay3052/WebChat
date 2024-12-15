import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { users } from "@/models/model"; // Adjust the import path according to your project structure
import { compare } from "bcrypt";
import { eq } from "drizzle-orm/sql";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // ユーザーの検索
    const user = await db
      .select({
        id: users.id,
        email: users.email,
        password: users.password,
      })
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (!user) {
      return NextResponse.json(
        { error: "ユーザーが見つかりません" },
        { status: 404 }
      );
    }

    // パスワードの照合
    const isValid = await compare(password, user[0].password);
    if (!isValid) {
      return NextResponse.json(
        { error: "パスワードが正しくありません" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: "ログインに成功しました",
        user: { id: user[0].id, email: user[0].email },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "予期せぬエラーが発生しました。" + error },
      { status: 500 }
    );
  }
}
