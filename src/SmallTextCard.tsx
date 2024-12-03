export default function SmallTextCard({ name, strong=false }) {
    return (
      <>
        <div className={strong ? "card-strong" : "card-shaded"}>
          <div className="flex flex-row">
          <h6 className="text-xl font-bold">{name}</h6>
          </div>
        </div>
      </>
    );
  }
  