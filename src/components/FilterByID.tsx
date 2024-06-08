import { TextField } from "@mui/material";
import React from "react";

interface propstypes {
  userId: string;
  onUserIdChange: (value: string) => void;
}
export default function FilterById({ userId, onUserIdChange }: propstypes) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUserIdChange(event.target.value as string);
  };

  return (
    <>
      <TextField
        label="userId"
        size="small"
        className="w-32 "
        value={userId}
        onChange={handleChange}
      />
    </>
  );
}
