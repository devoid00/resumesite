type BrandProps = {
  className?: string;
  withTM?: boolean;
};

export default function Brand({ className = "", withTM = false }: BrandProps) {
  return (
    <div className={className}>
      <span className="tracking-[0.12em]">T.H.R</span>
    </div>
  );
}
