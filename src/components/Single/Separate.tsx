interface SepareteProps {
  classNames: string;
}

const Separete = ({ classNames }: SepareteProps) => {
  return <div className={`h-px bg-gradient ${classNames}`} />;
};

export default Separete;
