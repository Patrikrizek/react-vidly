import React, { Component } from 'react';

class Movies extends Component {
    render() {
        return (
            <React.Fragment>
                <p className='m-3'>Showing 9 movies in the database.</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td><button className='btn btn-danger m-2'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Movies;