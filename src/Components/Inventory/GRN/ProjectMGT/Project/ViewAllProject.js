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
        <div className='mx-16 mt-12'>
            {
                !createProjects ? <div>
                <div>
                    <i onClick={handleGetBack} class="fa-solid fa-arrow-left text-4xl left-arrow"></i>
                </div>
                <div className='flex items-center ms-12'>
                <h1 className='mb-10 text-3xl'>Project</h1>

                <div className='flex items-center justify-end mb-8 add-projects'>
                <input type="text" placeholder="Type here" class="input max-w-xs border border-info hover:border-error mr-12" />

                <button onClick={handleCreateProject} style={{ backgroundColor: '#7E76CA', width: '235px', marginTop: '60px', height: '50px', border: '0', borderRadius: '20px' }} class=" btn mb-14 text-white ">Add New</button>

                </div>
                </div>
                <div class="card flex justify-center shadow-2xl bg-white">
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