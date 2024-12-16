"use client";

import {
  Box,
  Text,
  Center,
  Input,
  Button,
  FormControl,
  ErrorMessage as FormErrorMessage,
} from "@yamada-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    // ユーザー名のバリデーション
    if (formData.username.length < 3) {
      newErrors.username = "ユーザー名は3文字以上で入力してください";
      isValid = false;
    }

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

    // パスワード確認のバリデーション
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "パスワードが一致しません";
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

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const signup = await fetch("/api/db/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const response = await signup.json();

      if (response.error) {
        alert("Sign Up Failed!");
      } else {
        alert("Sign Up Success!");
        router.push("/");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("エラーが発生しました");
    }
  };

  return (
    <>
      <Center marginBottom={"40px"}>
        <Box>
          <Text fontSize={"2xl"} color={"CaptionText"}>
            Sign Up Form
          </Text>
        </Box>
      </Center>

      <Center>
        <form onSubmit={handleSignup}>
          <FormControl isInvalid={!!errors.username}>
            <Input
              margin={"20px 0"}
              type="text"
              id="username"
              placeholder="YOUR USERNAME"
              value={formData.username}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.username}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <Input
              margin={"20px 0"}
              type="email"
              id="email"
              placeholder="YOUR EMAIL"
              value={formData.email}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <Input
              margin={"20px 0"}
              type="password"
              id="password"
              placeholder="YOUR PASSWORD"
              value={formData.password}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.confirmPassword}>
            <Input
              margin={"20px 0"}
              type="password"
              id="confirmPassword"
              placeholder="CONFIRM YOUR PASSWORD"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
          </FormControl>

          <Button color={"primary"} type="submit" margin={"20px 0"}>
            Sign Up
          </Button>
        </form>
      </Center>
    </>
  );
}
