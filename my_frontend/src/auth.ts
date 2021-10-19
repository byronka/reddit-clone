import crypto from "crypto";

export const doHash = (input: string) => {
  return crypto.createHash("sha256").update(input).digest("hex");
};
