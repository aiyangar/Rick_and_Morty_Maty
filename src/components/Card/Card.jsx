 import style from './Card.module.css'
 import { Link } from 'react-router-dom';



 const Card = ({id, name, status, species, gender, origin, image, onClose}) => {
  
   return (
      <div className={style.card}>
         
         <div>
            <button onClick={()=> {onClose(id)}}>Close</button>
         </div>
         
         <div>
            <img src={image} alt="" />  
            <p>Name: "{name}"</p>
         </div>
         
         <Link to={`/detail/${id}`}>
         <div className={style.contenido}>
            <p>Status: "{status}"</p>
            <p>Species: "{species}"</p>
            <p>Gender: "{gender}"</p>
            <p>Origin: "{origin}"</p>
         </div>
         </Link>
           
      
      </div>
   );
};

export default Card


