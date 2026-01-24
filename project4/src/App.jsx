import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state={data:{
      name:"Hansini",
      role:"Student",
      bio:"Software Architect",
      status:[{label:"Posts",Value:"84"},
        {label:"followers",value:"2.5k"},
        {label:"following",value:"190"}
      ]
    
    }};
  }

  render() {
    const{data}=this.state;
    const BASEURL =import.meta.env.BASE_URL;
    return (
      <div>
        <div className='app'>
                <div className='profile'>
                    <img src={BASEURL+"web png pic.png"} alt=''/>
                    <div className='info'>
                        <legend className='name'>{data.name}</legend>
                        <legend className='role'>{data.role}</legend>
                        <legend className='bio'>{data.bio}</legend>
                        <button className='follow'>Follow</button>
                        <button className='message'>Message</button>
                    </div>
                </div>
                <div className='status'>
                    {data.status.map((d)=>(
                        <div className='info'>
                            <legend className='value'>{d.value}</legend>
                            <legend className='label'>{d.label.toUpperCase()}</legend>
                        </div>
                    ))}
                </div>
            </div>
      </div>
    )
  }
}