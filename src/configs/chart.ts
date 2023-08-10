import { ApexOptions } from 'apexcharts'

const defaultConfigChart: ApexOptions = {
  noData: {
    text: 'No data is available!',
    align: 'center',
    verticalAlign: 'middle',
  },
  colors: ['var(--color-primary-300)', 'var(--color-secondary-300)'],
  chart: {
    type: 'line',
    background: 'var(--color-dark)',
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    curve: 'straight',
  },
  theme: {
    mode: 'dark',
  },
  grid: {
    position: 'back',
    yaxis: {
      lines: {
        show: false,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  tooltip: {
    shared: false,
    intersect: true,
    onDatasetHover: {
      highlightDataSeries: true,
    },
  },
  states: {
    normal: {
      filter: {
        type: 'none',
        value: 0,
      },
    },
    hover: {
      filter: {
        type: 'darken',
        value: 0.15,
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: 'darken',
        value: 0.35,
      },
    },
  },
  markers: {
    size: 6,
    shape: 'circle',
    radius: 0,
    strokeColors: ['var(--primary-color)'],
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: true,
    },
    type: 'category',
    categories: [
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
    ],
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
}

const dataChartSample = [
  {
    data: [148, 91, 82, 60, 41, 35, 51, 49, 34, 30, 26, 24],
  },
  {
    data: [128, 81, 42, 68, 21, 55, 31, 25, 24, 35, 15, 40],
  },
]

export { defaultConfigChart, dataChartSample }
