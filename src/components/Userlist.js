import React, { Component } from 'react';

class Userlist extends Component {
    render() { 
        return ( 
            <div>
                <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto@gmail.com</td>
                            <td></td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton@gmail.com</td>
                            <td></td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>Larry the Bird@gmail.com</td>
                            <td></td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
         );
    }
}
 
export default Userlist;