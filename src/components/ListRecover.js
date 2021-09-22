import Calendario from './Calendar';


export default function ListRecover(props){
const {Atividades} = props
    return(
        <div>
        {Atividades.map((task) =>(
            <div key={task.id}>
              {task.Atividadade}
              <div>
              <Calendario/>
              </div>
            </div>
          ))}
          </div>
        );
}
