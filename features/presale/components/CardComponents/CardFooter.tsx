interface CardFooterProps {
  footer?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ footer }) => {
  if (!footer) return null;

  return (
    <p className="text-[#0194FE] text-sm mt-2 hover:underline cursor-pointer">
      {footer}
    </p>
  );
};

export default CardFooter;
