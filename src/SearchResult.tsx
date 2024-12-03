export default function SearchResult(props) {
  const info = props.info;
  const selected = props.selected;

  if (selected) {
    return (
      <a
        className="flex flex-row py-2 pl-24 font-bold bg-neutral-200 group"
        href={info.url}
      >
        <p className="group-hover:underline">{info.name}</p>
        <p className="pr-8 font-light text-right grow text-neutral-400">
          Press Enter to open...
        </p>
      </a>
    );
  } else {
    return (
      <a className="flex flex-row py-2 pl-24 text-black group" href={info.url}>
        <p className="group-hover:underline">{info.name}</p>
      </a>
    );
  }
}
