'use client'

import { useFormatter } from 'next-intl'
import { Pie, PieChart } from 'recharts'

import { WidgetsTokenUtility200DataItem } from '@/src/shared/api/model'
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent } from '@/src/shared/ui/Chart'

import { colors } from '../../_config'

export type IDiagramClientProps = {
  data: WidgetsTokenUtility200DataItem[]
}

const DiagramClient = ({ data }: IDiagramClientProps) => {
  const format = useFormatter()

  const chartConfig = data
    .map((item) => item)
    .reduce(
      (a, v, i) => ({
        ...a,
        [v.token_use]: {
          label: v.token_use,
          color: colors[i] ?? colors[0],
        },
      }),
      {},
    ) satisfies ChartConfig

  const chartData = data.map((item, i) => ({
    ...item,
    fill: colors[i] ?? colors[0],
  }))

  return (
    <ChartContainer
      config={chartConfig}
      className="ml-auto aspect-square max-h-[800px] max-lg:max-h-none max-lg:min-h-[700px] max-md:min-h-[500px] max-sm:min-h-[380px]"
    >
      <PieChart>
        <Pie
          labelLine={false}
          label={(entry) => format.number(entry.percent, 'percent')}
          isAnimationActive={false}
          data={chartData}
          dataKey="total_supply"
          nameKey="token_use"
          innerRadius="47%"
          paddingAngle={1}
          cornerRadius="10%"
        />
        <ChartLegend content={<ChartLegendContent />} />
      </PieChart>
    </ChartContainer>
  )
}

export default DiagramClient
