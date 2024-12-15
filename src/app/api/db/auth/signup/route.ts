import { db } from "@/db";
import * as schema from "@/models/model";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const { username, email, password, pgpkey } = await req.json();

    // パスワードのハッシュ化
    const hashedPassword = await hash(password, 10);

    // ユーザーの作成
    const [user] = await db
      .insert(schema.users)
      .values({
        username,
        email,
        password: hashedPassword,
        pgpkey: pgpkey || null,
      })
      .returning({
        id: schema.users.id,
        username: schema.users.username,
        email: schema.users.email,
        createdAt: schema.users.createdAt,
      });

    return NextResponse.json(
      {
        message: "ユーザーが正常に作成されました",
        user,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    if ((error as { code: string }).code === "23505") {
      // 一意性制約違反
      return NextResponse.json(
        { error: "ユーザー名またはメールアドレスは既に使用されています" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "予期せぬエラーが発生しました" },
      { status: 500 }
    );
  }
}
