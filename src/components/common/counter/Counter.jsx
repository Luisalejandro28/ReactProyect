// import { useState } from "react";

// export const Counter = () => {
//   const [count, setCount] = useState(1);

//   const agregar = () => {
//     setCount(count + 1);
//   };
//   const eliminar = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     } else {
//       alert("Carrito vacio");
//     }
//   };
// };
// return (
//   <div>
//     <button onClick={eliminar}>-</button>
//     <span>{count}</span>
//     <button onClick={agregar}>+</button>
//   </div>
// );


import { useState } from "react";

export const Counter = () => {

  const [contador, setContador ] = useState( 1 )

    const sumar= ()=>{
        setContador( contador + 1 )
    }

    const restar = ()=>{
        if(contador > 1 ){
            setContador( contador - 1 )
        }else{
            alert("no podes menos de 1")
        }
    }

  return (
    <div>
        <button onClick={restar}>restar</button>
        <h2>{contador}</h2>
        <button onClick={sumar}>sumar</button>
    </div>
  )
}
