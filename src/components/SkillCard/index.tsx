import type { ReactNode } from 'react'

interface SkillCardProps {
    title: string;
    icon?: ReactNode
}

function SkillCard({ title, icon }: SkillCardProps) {
    return (
        <div className="h-60 w-40 flex flex-col gap-7 justify-center items-center text-sky-400 border-sky-400 border-2 rounded-lg transition-all duration-500 hover:-rotate-6 hover:border-sky-300 hover:text-sky-300">
          {icon &&
            <div className="text-7xl">
              {icon}
            </div>
          }

          <h3 className="text-xl">
            {title}
          </h3>
        </div>
    )
}

export default SkillCard