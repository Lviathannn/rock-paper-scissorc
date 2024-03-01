import React from "react";

type Props = {
  label: string;
};

export default function ChoicheLabel({ label }: Props) {
  return <p className="text-white font-medium">{label}</p>;
}
