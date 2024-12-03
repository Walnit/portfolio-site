export default function ProjectCard({ title, desc, img, selected, onClick } : { title : string, desc : string, img : string, selected : boolean, onClick : () => void }) {
  if (selected) {
    return (
      <button className="p-4 bg-red-50 rounded-xl" onClick={onClick}>
          <div className="flex flex-row">
            <img className="w-12 basis-1/5" src={img} alt={title} />
            <div className="flex flex-col justify-center pl-4 basis-4/5">
              <h6 className="text-xl font-bold text-left">{title}</h6>
              <p className="text-xl text-left text-wrap">{desc}</p>
            </div>
          </div>
      </button>
    );
  } else {
    return (
        <button className="p-4 rounded-xl bg-slate-50" onClick={onClick}>
          <div className="flex flex-row">
            <img className="w-12 basis-1/5" src={img} alt={title} />
            <div className="flex flex-col justify-center pl-4 basis-4/5">
              <h6 className="text-xl font-bold text-left">{title}</h6>
              <p className="text-xl text-left text-wrap">{desc}</p>
            </div>
          </div>
        </button>
    );
  }
  
}
