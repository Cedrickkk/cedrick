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
      <h5 className="mb-3 text-lg font-medium">{title}</h5>
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {items.map((item) => (
          <div
            className="flex items-center gap-3 font-medium text-secondary"
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
