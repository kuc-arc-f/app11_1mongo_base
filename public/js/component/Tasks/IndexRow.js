class IndexRow extends React.Component {
    componentDidMount(){
//        console.log(this.props.obj)
    }
    render(){
        return (
        <tr>
            <td>
                {this.props.obj._id}
            </td>
            <td>
                <a href={"/tasks/show/"+ this.props.obj._id}><h3>{this.props.obj.title}</h3>
                </a>
                <a class="btn btn-sm btn-outline-primary"
                 href={"/tasks/edit/"+ this.props.obj._id}>Edit
                </a><br />
                {this.props.obj.date_str}

            </td>
            <td>
            </td>
        </tr>
        )
    }
}

