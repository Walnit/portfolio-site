export default function ProjectCard({ title, desc, img, selected, onClick } : { title : string, desc : string, img : string, selected : boolean, onClick : () => void }) {
  if (selected) {
    return (
      <button className="p-2 min-w-full bg-red-50 rounded-xl md:p-4" onClick={onClick}>
          <div className="flex flex-row">
            <img className="object-contain w-12 aspect-square basis-1/5" src={img} alt={title} />
            <div className="flex flex-col justify-center pl-4 basis-4/5">
              <h6 className="font-bold text-left md:text-xl">{title}</h6>
              <p className="text-left md:text-xl text-wrap">{desc}</p>
            </div>
          </div>
      </button>
    );
  } else {
    return (
        <button className="p-2 min-w-full rounded-xl md:p-4 bg-slate-50" onClick={onClick}>
          <div className="flex flex-row">
            <img className="object-contain w-12 aspect-square basis-1/5" src={img} alt={title} />
            <div className="flex flex-col justify-center pl-4 basis-4/5">
              <h6 className="font-bold text-left md:text-xl">{title}</h6>
              <p className="text-left md:text-xl text-wrap">{desc}</p>
            </div>
          </div>
        </button>
    );
  }
  
}
