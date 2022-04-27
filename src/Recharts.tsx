import "./App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    ATLAS: 100,
    POLIS: 500,
  },
  {
    name: "Feb",
    ATLAS: 150,
    POLIS: 470,
  },
  {
    name: "Mar",
    ATLAS: 250,
    POLIS: 400,
  },
  {
    name: "Apr",
    ATLAS: 400,
    POLIS: 375,
  },
  {
    name: "May",
    ATLAS: 400,
    POLIS: 350,
  },
  {
    name: "April",
    ATLAS: 650,
    POLIS: 300,
  },
  {
    name: "Today",
    ATLAS: 700,
    POLIS: 200,
  },
];

const Recharts = () => {
  const CustomTooltip = ({ payload }: any) => {
    if (payload && payload.length) {
      return (
        <div>
          <h2>{`${payload[0].value} ATLAS`}</h2>
        </div>
      );
    }

    return (
      <div>
        <h2>This is test</h2>
      </div>
    );
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>RECHARTS</h2>
      <p style={{ textAlign: "center" }}>ATLAS Chart Demo:</p>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip
            position={{ x: 20, y: -50 }}
            content={<CustomTooltip />}
            cursor={true}
            isAnimationActive={true}
            active={true}
          />
          <XAxis
            dataKey="name"
            ticks={[data[0].name, data[data.length - 1].name]}
          />
          <Line
            type="monotone"
            dataKey="ATLAS"
            stroke="black"
            strokeWidth="4"
            dot={{
              fill: "transparent",
              stroke: "transparent",
              strokeWidth: 2,
              r: 5,
            }}
            activeDot={{
              fill: "black",
              r: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p style={{ textAlign: "center" }}>POLIS Chart Demo:</p>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="POLIS"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p style={{ textAlign: "center" }}>ATLAS/POLIS Chart Demo:</p>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="POLIS"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="ATLAS" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Recharts;
