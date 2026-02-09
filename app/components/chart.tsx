import { useContext } from 'react';
import { Pie, PieChart, PieSectorShapeProps, Sector, Tooltip } from 'recharts';
import { ToDoContext } from './todo-context';
import { ToDo } from '../types';

const COLORS = ['#0088FE', '#00C49F'];

const MyCustomPie = (props: PieSectorShapeProps) => {
  return <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
};

export default function PieChartComp() {
  const { toDoList } = useContext(ToDoContext)!
  
  function transformToDoListToPieData(toDoList: ToDo[]) {
    const data = [
      {name: "is checked", value:0},
      {name:"isn't checked",value:0}
    ]
    for(const todo of toDoList) {
      if(todo.checked) {
        data[0].value += 1
      } else {
        data[1].value += 1
      }
    }
    return data
  }

  const pieData = transformToDoListToPieData(toDoList)

  return (
    <PieChart style={{ width: '15rem', aspectRatio: 1 , position: "absolute", right: '-12rem', top: '0'}} responsive>
      <Pie
        data={pieData}
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