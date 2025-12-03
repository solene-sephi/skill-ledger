export default function MilestoneProgress() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Débutant du quotidien</span>
        <span className="text-right">Chercheur d’élan</span>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-grey-900 text-white text-sm font-bold">
          1
        </div>
        <progress
          value={0.4}
          max={1}
          className="flex-1 h-2 bg-grey-500/60 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-grey-500/60 [&::-webkit-progress-value]:bg-orange-600"
        />
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-grey-900 text-white text-sm font-bold">
          2
        </div>
      </div>
      <div className="flex justify-end">
        <p className="text-xs text-grey-900/80">Encore 8 action(s)</p>
      </div>
    </div>
  );
}
