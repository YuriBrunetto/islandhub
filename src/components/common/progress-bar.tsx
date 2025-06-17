type ProgressBarProps = {
  label: string
  percentage: string
}

export default function ProgressBar({ label, percentage }: ProgressBarProps) {
  return (
    <div className="flex items-center space-x-4 text-sm">
      <span className="font-medium w-3">{label}</span>
      <div className="w-full max-w-60 h-1.5 bg-zinc-200 rounded-full relative overflow-hidden">
        <span
          style={{ width: `${percentage}%` }}
          className={`h-1.5 bg-zinc-800 absolute left-0 top-0`}
        ></span>
      </div>
      <span className="text-zinc-500">{percentage}%</span>
    </div>
  )
}
