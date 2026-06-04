import { Suspense } from "react";
import PortfolioContent from "./PortfolioContent";

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioContent />
    </Suspense>
  );
}