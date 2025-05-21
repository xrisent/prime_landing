"use client";
import { Button } from "@/shared/ui/Buttons/Button/Button";
import { WorkUsButtonsProps } from "@/shared/types/types";

export const WorkUsButtons = ({ workUsText }: WorkUsButtonsProps) => {
  return (
        <Button
          text={workUsText}
          onClick={() => {
            const section = document.getElementById("heroForm");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          variant="corner" 
          size="cornerSize"
        />
  );
};