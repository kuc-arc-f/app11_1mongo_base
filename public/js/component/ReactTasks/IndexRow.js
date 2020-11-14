class IndexRow extends React.Component {
    componentDidMount(){
//        console.log(this.props.obj)
    }
    render(){
        return (
        <tr>
            <td>
                {this.props.obj.id}
            </td>
            <td>
                <a href={"/react_tasks/show/"+ this.props.obj.id}>{this.props.obj.title}
                </a>
                <a href={"/react_tasks/edit/"+ this.props.obj.id}> [ edit ]
                </a>
            </td>
            <td>
            </td>
        </tr>
        )
    }
}

