import React from 'react';
import CreateProject from './CreateProject';
import './ViewAllProjects.css'; 
import {useState} from 'react'; 

const ViewAllProject = ({setRegister, setEdit, setCreate }) => {
  const [createProjects, setCreateProjects] = useState(''); 
  const handleCreateProject = () =>{
    setCreateProjects('setCreateProject'); 
}
    const handleGetBack = () => {
      setRegister('')
      setEdit('')
      setCreate('')
    }
    return (
        <div className='mt-8'>
            {
                !createProjects ? <div>
                <div>
                    <i onClick={handleGetBack} class="  fas text-3xl fa-long-arrow-alt-left left-arrow"></i>
                </div>
                <div className='flex items-center justify-between'>
                <div className='flex items-center ms-12'>
                    <h1 className='text-3xl mb-10'>Project</h1>

                </div>
                <div className='flex items-center mb-8'>
                        <input type="text" placeholder="Type here" class="input max-w-lg w-80 border border-info hover:border-error mr-16" />

                        <button onClick={handleCreateProject} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Add New</button>

                    </div>
                </div>
                <div class="card flex box-shadow justify-center box-shadow shadow-2xl bg-white">
                    <div class="card-body">
                        <div class="overflow-x-auto">
                            <table class="table w-full">

                                <thead>
                                    <tr>
                                        <th>S No.</th>
                                        <th>TP Code</th>
                                        <th>Date of Creation</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <th>1</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>2</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>3</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>4</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>5</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>6</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>7</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>8</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>9</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>10</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>11</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    <tr>
                                        <th>12</th>
                                        <td>46539</td>
                                        <td>01-06-2022</td>
                                        <td>Approved</td>
                                    </tr> 
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> : <div>
              {
                createProjects && <CreateProject setCreateProjects={setCreateProjects}></CreateProject>
              }
            </div>
            }
        </div>
    );
};

export default ViewAllProject;