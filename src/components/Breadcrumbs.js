import React, { Component } from 'react'; 
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


class Breadcrumbs extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Breadcrumb>
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb>
                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>Library</BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb>
                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                    <BreadcrumbItem active>Data</BreadcrumbItem>
                </Breadcrumb>
            </div>
         );
    }
}
 
export default Breadcrumbs;