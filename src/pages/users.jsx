import React, { useState, useEffect } from 'react'
import Nav from '../components/navbar/Navbar'
import { authAxios,authAxiosAdmin,authAxiosDefault,checkJWTVALID } from './axiosInstances';
import ActionCard from '../components/ActionAreaCard'
import '../styles/App.css';

const Users = () => {
    const [user, setUser] = useState([]);
    let count = 1;

    useEffect(() => {
    authAxiosAdmin.get(`/allusers`).then(response => {
        console.log(response.data.data)
        setUser(response.data.data)

    }).catch(error => console.log(error))
    }, [])

    return (
        <div>
            <Nav name="Users" />
          <div className="App">
            <header className="App-header">
              <h1>All Users</h1>
              {/* {
                            user.length > 0 && user.map(i => {
                                return (
                                    <div>
                                            <ActionCard name={i.username} description={i.nick} source={i.isAdmin} cardTrigger={cardInvis} setTrigger={setCardInvis}/>
                                            <button className="btn btn-warning" onClick={() => {
                                                setSelectedItem(i);
                                                setButtonPopup(true);
                                                setCardInvis(false);
                                            }}>
                                                View details</button>
                                    </div>
                                );
                            })
                        } */}
                        <table className="table">
                    <tr>
                        <th>S.No</th>
                        <th>Username</th>
                        <th>Nick</th>
                        <th>Is Admin</th>
                    </tr>
                    {/* <tr> */}
                        {
                        user.length > 0 && user.map(i => {
                            return (
                                <tr>
                                    <td>{count++}</td>
                                    <td>{i.users}</td>
                                    <td>{i.nickname}</td>
                                    <td>{`${i.isAdmin}`}</td>
                                </tr>
                            )
                        })
                        }
                        {/* <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td> */}
                    {/* </tr> */}
                    </table>
            </header>
          </div>
        </div>
  )
}

export default Users;