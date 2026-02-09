import { Pie, PieChart, PieSectorShapeProps, Sector, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F'];

const MyCustomPie = (props: PieSectorShapeProps) => {
  return <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
};

export default function PieChartWithCustomizedLabel({data}) {
  return (
    <PieChart style={{ width: '15rem', aspectRatio: 1 , position: "absolute", right: '-12rem', top: '0'}} responsive>
      <Pie
        data={data}
        labelLine={false}
        fill="#8884d8"
        dataKey="value"
        isAnimationActive={true}
        shape={MyCustomPie}
      />
      <Tooltip contentStyle={{backgroundColor: "#DAD3EB", border: "none", borderRadius: '1rem', textTransform: 'upperCase', fontSize:'.8rem'}} isAnimationActive={false}></Tooltip>
    </PieChart>
  )
}