"use client";

import { signIn } from "next-auth/react";
import {
  Button,
  Center,
  Input,
  Link,
  Text,
  FormControl,
  ErrorMessage as FormErrorMessage,
} from "@yamada-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
    };

    // メールアドレスのバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
      isValid = false;
    }

    // パスワードのバリデーション
    if (formData.password.length < 6) {
      newErrors.password = "パスワードは6文字以上で入力してください";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setErrors({
          ...errors,
          password: "メールアドレスまたはパスワードが正しくありません",
        });
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("サインインエラー:", error);
    }
  };

  return (
    <>
      <Center alignItems={"center"}>
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={!!errors.email}>
            <Input
              margin={"20px 0"}
              type="email"
              id="email"
              placeholder="YOUR E-MAIL"
              value={formData.email}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <Input
              type="password"
              id="password"
              placeholder="YOUR PASSWORD"
              value={formData.password}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>

          <Button type="submit" color={"primary"} margin={"20px 0"}>
            Login
          </Button>
        </form>
      </Center>

      <Center>
        <Text margin={"20px 0"}>
          If you don&apos;t have an account, please{" "}
          <Link href="/pages/auth/signup">
            <span style={{ color: "#f08080" }}>Sign Up</span>
          </Link>
        </Text>
      </Center>
    </>
  );
}
