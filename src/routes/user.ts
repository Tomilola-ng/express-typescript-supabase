import { Router, Request, Response } from "express";
import { asyncHandler } from "../utils/helpers";
import { UserModel } from "../models/user";

const router = Router();

router.post(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const { email, name } = req.body;

    const existingUser = await UserModel.getByEmail(email);
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }

    const user = await UserModel.create(email, name);

    if (!user) {
      return res.status(500).json({ error: "Failed to create user" });
    }

    res.status(201).json({ user, message: "User created successfully" });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await UserModel.getById(id);

    if (!user) {
      res.status(404).send("User not found");
      return;
    }

    res.json(user);
  })
);

// Add more routes as needed

export default router;
