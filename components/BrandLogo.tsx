import Image from "next/image";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className={`brand-logo ${compact ? "compact" : ""}`}>
      <img
        src="/lowfareclick_logo.png"
        alt="Lowfare click"
 className="brand-logo-image"
      />
    </div>
  );
}
