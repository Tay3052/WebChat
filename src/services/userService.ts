import { db } from "../db/index";
import { users } from "../models/model";
import { v4 as uuidv4 } from "uuid";
import { User } from "../models/interfaces/modelInterfaces";
import { format } from "date-fns";

export const createUser = async (User: User) => {
  const id = uuidv4(); // UUIDを生成
  const createdAt = format(new Date(), "yy/MM/dd HH:mm:ss");
  const updatedAt = createdAt;
  const { username, password } = User;
  let { email, pgpkey } = User;

  if (pgpkey.length < 1) {
    pgpkey = "";
  } else if (email.length < 1) {
    email = "";
  }

  await db
    .insert(users)
    .values({ id, username, email, password, pgpkey, createdAt, updatedAt })
    .execute();
};
