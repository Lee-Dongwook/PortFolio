import Chip from "@/components/ui/chip";

interface ChipContainerProps {
  textArray: string[];
}

export default function ChipContainer({ textArray }: ChipContainerProps) {
  return (
    <div className="flex flex-wrap my-3 gap-2">
      {textArray.map((text, index) => (
        <Chip key={index} content={text} />
      ))}
    </div>
  );
}
