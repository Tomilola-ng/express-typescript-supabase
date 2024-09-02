import supabase from "../config/supabase";
import { UserModelType } from "../types/models";

export class UserModel {
  static async create(
    email: string,
    name: string
  ): Promise<UserModelType | null> {
    const { data, error } = await supabase
      .from("users")
      .insert({ email, name })
      .select()
      .single();

    if (error) {
      console.error("Error creating user:", error);
      return null;
    }

    return data;
  }

  static async getById(id: string): Promise<UserModelType | null> {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching user:", error);
      return null;
    }

    return data;
  }

  static async getByEmail(email: string): Promise<UserModelType | null> {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      console.error("Error fetching user:", error);
      return null;
    }

    return data;
  }

  // Add more methods as needed
}
