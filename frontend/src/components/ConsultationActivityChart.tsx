import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement,PointElement,LinearScale,CategoryScale,Title,Tooltip,Legend,ChartOptions,ChartData,} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

interface ConsultationActivityChartProps {
  data: number[];
}

const ConsultationActivityChart: React.FC<ConsultationActivityChartProps> = ({ data }) => {
  const chartRef = useRef<ChartJS | null>(null); 

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const chartData: ChartData<"line"> = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Consultations in the Last 7 Days",
        data: data,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
      },
      y: {
        beginAtZero: true,
        ticks: {
            stepSize: 1,
            callback: (value) => Number(value).toFixed(0),
          },
      },
    },
  };

  return (
    <div className="relative h-64">
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default ConsultationActivityChart;
