export default function AchievementCard({ name, from, description, visible}: { name: string, from: string, description: string, visible: boolean }) {
    if (visible) {
      return (
          <div className="flex flex-col p-4 min-w-full rounded-xl snap-center snap-always bg-slate-50">
              <h6 className="font-bold text-left md:text-xl">{name}</h6>
              <h6 className="pb-2 italic font-bold text-left md:text-xl">{from}</h6>
              <p className="text-left md:text-xl text-wrap">{description}</p>
          </div>
      );
    }
  }
  