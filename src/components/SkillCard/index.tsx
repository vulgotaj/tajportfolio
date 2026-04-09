import type { ReactNode } from 'react'

interface SkillCardProps {
    title: string;
    icon?: ReactNode
}

function SkillCard({ title, icon }: SkillCardProps) {
    return (
        <div className="h-[240px] w-[180px] flex flex-col gap-7 justify-center items-center border-sky-400 border-2 rounded-lg">
          {icon &&
            <div className="text-7xl text-sky-400">
              {icon}
            </div>
          }

          <h3 className="text-xl text-sky-400">
            {title}
          </h3>
        </div>
    )
}

export default SkillCard