import { ChartBarIcon, FolderPlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import SectionTitle from "../common/SectionTitle";
import HorizontalRule from "../common/HorizontalRule";
const features = [
  {
    name: "Easy Course Creation",
    description:
      "Our intuitive course creation tools allow you to create and upload courses quickly and easily.",
    icon: FolderPlusIcon,
  },
  {
    name: "ujhhkjnjb uhj",
    description: "yuhj ujnuhk",
    icon: ChartBarIcon,
  },
];
export default function TutorAdvantages() {
  return (
    <>
      <SectionTitle
        title="Why Here?"
        description="Empower Your Teaching  with Learnt."
        tutor
      />
      <HorizontalRule />
    </>
  );
}
