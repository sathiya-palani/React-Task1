

import Card from "./component/Card";
import "./App.css";
function App() {

  let data = [
    {
      id :1,
      plan: "FREE",
      price: 0,
      user: "Single User",
      userCompleted: true,
      storage: "50GB Storage",
      storageCompleted: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsCompleted: true,
      communityAccess: "Community Access",
      communityAccessCompleted: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsCompleted: false,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportCompleted: false,
      subDomain: "Free Subdomain",
      subDomainCompleted: false,
      reports: "Monthly Status Reports",
      reportsCompleted: false,
      
    },
    {
      id:2,
      plan: "PLUS",
      price: 9,
      user: "5 Users",
      userCompleted: true,
      storage: "50GB Storage",
      storageCompleted: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsCompleted: true,
      communityAccess: "Community Access",
      communityAccessCompleted: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsCompleted: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportCompleted: true,
      subDomain: "Free Subdomain",
      subDomainCompleted: true,
      reports: "Monthly Status Reports",
      reportsCompleted: false,
      
    },
    {
      id: 3,
      plan: "PRO",
      price: 49,
      user: "Unlimited Users",
      userCompleted: true,
      storage: "50GB Storage",
      storageCompleted: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsCompleted: true,
      communityAccess: "Community Access",
      communityAccessCompleted: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsCompleted: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportCompleted: true,
      subDomain: "Free Subdomains",
      subDomainCompleted: true,
      reports: "Monthly Status Reports",
      reportsCompleted: true,
      
    },
  ];


      
      return(
             <div className='Container'>
                 {data.map(data => (
                     <Card
                         key={data.id}

                         userCompleted={data.userCompleted}
                         storageCompleted={data.storageCompleted}
                         publicProjectsCompleted={data.publicProjectsCompleted}
                         communityAccessCompleted={data.communityAccessCompleted}
                         privateProjectsCompleted={data.privateProjectsCompleted}
                         phoneSupportCompleted={data.phoneSupportCompleted}
                         subDomainCompleted={data.subDomainCompleted}
                         reportsCompleted={data.reportsCompleted}
                        

                         price={data.price}
                         plan={data.plan}
                         user={data.user}
                         storage={data.storage}
                         publicProjects={data.publicProjects}
                         communityAccess={data.communityAccess}
                         privateProjects={data.privateProjects}
                         phoneSupport={data.phoneSupport}
                         subDomain={data.subDomain}
                         reports={data.reports}
                        

                     />
                 ))}
             </div>
      )
  }

export default App;
