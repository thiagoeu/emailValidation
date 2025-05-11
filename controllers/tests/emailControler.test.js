import { describe, it, expect, vi, beforeEach } from "vitest";

// Mocka o nodeMailerConfig
vi.mock("../../config/nodeMailerConfig.js", () => ({
  default: vi.fn(() => Promise.resolve()),
}));

import nodeMailerConfig from "../../config/nodeMailerConfig.js";
import { enviarEmailController } from "../email.Controller.js";

describe("Email Controller", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should send email successfully", async () => {
    const req = {
      body: {
        nome: "John Doe",
        email: "4kK0y@example.com",
      },
    };

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };

    await enviarEmailController(req, res);

    expect(nodeMailerConfig).toHaveBeenCalledWith(
      "4kK0y@example.com",
      "John Doe"
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Email enviado com sucesso",
      error: false,
      success: true,
    });
  });

  it("should return 400 if nome or email is missing", async () => {
    const req = { body: { nome: "", email: "" } };
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };

    await enviarEmailController(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Nome e email obrigatórios",
      error: true,
      success: false,
    });
  });
});
