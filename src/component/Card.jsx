import "./Card.css";

const  Card = (props) =>  {
  // console.log(props);

  return(
    <>
     
    <div className="card">
    <h6 className="plan">{props.plan}</h6>
      <h1 className="header">${props.price}/month</h1>
      <hr />
      <p className={props.userCompleted ? "complete" : "notComplete"}> {props.userCompleted ? "✔"  : "✘"  } {props.user}</p> 
      <p className={props.storageCompleted ? "complete" : "notComplete"}> {props.storageCompleted ? "✔"  : "✘"  } {props.storage}</p>
      <p className={props.publicProjectsCompleted ? "complete" : "notComplete"}> {props.publicProjectsCompleted ? "✔"  : "✘"  } {props.publicProjects}</p>
      <p className={props.communityAccessCompleted ? "complete" : "notComplete"}> {props.communityAccessCompleted ? "✔"  : "✘"  } {props.communityAccess}</p>
      <p className={props.privateProjectsCompleted ? "complete" : "notComplete"}> {props.privateProjectsCompleted ? "✔"  : "✘"  } {props.privateProjects}</p>
      <p className={props.phoneSupportCompleted ? "complete" : "notComplete"}> {props.phoneSupportCompleted ? "✔"  : "✘"  } {props.phoneSupport}</p>
      <p className={props.subDomainCompleted ? "complete" : "notComplete"}> {props.subDomainCompleted ? "✔"  : "✘"  }{props.subDomain}</p>
      <p className={props.reportsCompleted ? "complete" : "notComplete"}> {props.reportsCompleted ? "✔"  : "✘"  }{props.reports}</p>
       <button className="button"> BUTTON</button> 
      
        
      
    </div>
    </>
  ) 
  }

export default Card;

