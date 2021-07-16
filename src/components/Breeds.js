import React, { useEffect, useState } from 'react';

const Breeds = (props) => {

    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        loadBreeds();
    }, []);

    const loadBreeds = () => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => {
            return response.json();
        }).then(json => {
            let breeds = [];
            Object.keys(json.message).forEach(key => {
                const count = json.message[key].length;
                breeds.push({'name': key, 'count': count});
            });
            console.log(breeds)
            return breeds;
        }).then(breeds => {
            setBreeds(breeds);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return ( 
        <div className="col-lg-4">
            <div className="bs-component">
                <ul className="list-group">
                    { breeds.map((breed) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                {breed.name} <span className="badge bg-primary rounded-pill">{breed.count}</span>
                            </li>)
                    }) }
                </ul>
            </div>
        </div>
     );
}

export default Breeds;
