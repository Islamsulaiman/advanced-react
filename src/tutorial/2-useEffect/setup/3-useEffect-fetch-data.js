import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  let [users, setUsers] = useState([]);

  let gitData = async () => {
    let data = await fetch(url);
    let response = await data.json();
    setUsers(response);
  };
  useEffect(() => {
    gitData();
  }, []);
  {
    /*we should add the empty brackets to ensure that the fetch will run only one time at the first render */
  }

  return (
    <>
      <div className='container'>
        <h3>Github users</h3>
        <ul className='users'>
          {users.map((person) => {
            let { id, login, avatar_url, html_url } = person;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h3>{login}</h3>
                  <a href={html_url}>Profile</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default UseEffectFetchData;
