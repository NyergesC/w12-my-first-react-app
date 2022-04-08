import Beer from './Beer.jsx'

/* function Beers(props){
    console.log(props.list);
    return (
        <div className='beers'>
            {props.list.map(item => <Beer info={item} />)}
        </div>
    )
} */
function Beers({list}) {
    /* console.log(<Beer info={list[0]} randomNum={a} key={10}/>)
  */
    // Destructuring
    const a = 10
    return (
        <div className="beers">
             {list.map((item, index) => <Beer info={item} randomNum={a} key={index}/>)}
        </div>
        )
  }
export default Beers;