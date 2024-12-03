export default function AchievementCard({ name, from, description, visible }) {
    if (visible) {
      return (
          <div className="flex flex-col p-4 rounded-xl bg-slate-50">
              <h6 className="text-xl font-bold text-left">{name}</h6>
              <h6 className="pb-2 text-xl font-bold text-left">{from}</h6>
              <p className="text-xl text-left text-wrap">{description}</p>
          </div>
      );
    }
  }
  