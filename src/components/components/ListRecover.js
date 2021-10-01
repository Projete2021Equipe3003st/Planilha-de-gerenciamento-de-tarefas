import Calendario from './CalendarRecover';


export default function ListRecover(props){
const {Atividades} = props
    return(
        <div>
        {Atividades.map((task) =>(
            <div key={task.id}>
              {task.Atividade}
              <div>
              <Calendario
              Value={task.Data}/>
              </div>
            </div>
          ))}
          </div>
        );
}
