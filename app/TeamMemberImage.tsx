interface TeamMemberImageProps {
  name: string;
  image: string;
  zoom?: boolean;
}

export default function TeamMemberImage({ name, image, zoom = false }: TeamMemberImageProps) {
  return (
    <div className="mb-[1.125rem] h-40 w-40 overflow-hidden rounded-full border-[1.5px] border-dashed border-on-paper-dim">
      <img
        src={image}
        alt={`${name} profile`}
        className={`h-full w-full object-cover ${zoom ? "-translate-y-2 scale-[1.75]" : ""}`}
      />
    </div>
  );
}
