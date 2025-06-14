type TechnologySectionProps = {
  title: string;
  items: string[];
};

export default function TechnologySection({
  title,
  items,
}: TechnologySectionProps) {
  return (
    <li>
      <h5 className="mb-3 text-base font-medium">{title}</h5>
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {items.map((item) => (
          <div
            className="flex cursor-pointer items-center gap-3 font-medium text-secondary transition duration-300 hover:scale-105"
            key={item}
          >
            <img src={`${item.toLowerCase()}.svg`} alt={item} />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </li>
  );
}
