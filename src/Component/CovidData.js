import React, {useState, useEffect} from 'react'

const CovidData = () => {
    const [data, setData] = useState()

    useEffect(()=>{
        fetch('https://covidnigeria.herokuapp.com/api')
        .then(res=>res.json())
        .then(body=>{
            setData(body.data)
        })
        .catch(err=>console.log(err))
    },[])
    return (
        <div className="container">
            {data=== undefined || !data? <div className="loader">Loading Data...</div>:
                <div className="wrapper">
                    {console.log(data)}
                     <div className="header">
                         <h1>CovidTracker Nigeria</h1>
                     </div>
                     <div className="stats-summary">
                         <div className="confirmed-cases item">
                             <h3 className="number">{data.totalConfirmedCases}</h3>
                             <h3 className="text">Confirmed Cases</h3>
                         </div>
                         <div className="active-cases item">
                             <h3 className="number">{data.totalActiveCases}</h3>
                             <h3 className="text">Active Cases</h3>
                         </div>
                         <div className="tested item">
                             <h3 className="number">{data.totalSamplesTested}</h3>
                             <h3 className="text">Samples Tested</h3>
                         </div>
                         <div className="discharged item">
                             <h3 className="number">{data.discharged}</h3>
                             <h3 className="text">Discharged</h3>
                         </div>
                         <div className="death item">
                             <h3 className="number">{data.death}</h3>
                             <h3 className="text">Death</h3>
                         </div>
                     </div>
     
                     <div className="states-data">
                         <table>
                             <thead>
                                 <tr>
                                     <th>State</th>
                                     <th>Confirmed Cases</th>
                                     <th>Cases On Admission</th>
                                     <th>Discharged</th>
                                     <th>Death</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {data.states.map(state=>
                                    <tr key={state._id}>
                                         <td>{state.state}</td>
                                         <td>{state.confirmedCases}</td>
                                         <td>{state.casesOnAdmission}</td>
                                         <td>{state.discharged}</td>
                                         <td>{state.death}</td>
                                    </tr>

                                    )}
                                
                                
                             </tbody>
                         </table>
                     </div>
                 </div>
            }
        </div>
    )
}

export default CovidData
