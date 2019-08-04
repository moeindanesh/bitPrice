let list = [];
class Prices extends React.Component{
    constructor(props){
        super(props);

        this.handlePrice = this.handlePrice.bind(this);
    }
     state = {
        currency: 'USD'
    }

    handlePrice(key){
        list[key] = {
            description: this.props.bpi[key].description,
            code: this.props.bpi[key].code,
            rate: this.props.bpi[key].rate
        };
    }
    render(){
        Object.keys(this.props.bpi).map(this.handlePrice);
        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Bitcoin rate for {list[this.state.currency].description}
                        : <span className="badge badge-primary">{list[this.state.currency].code}</span>
                        <strong>{list[this.state.currency].rate}</strong>
                        {this.state.currancy}
                    </li>
                </ul>
                <br/>
                <select className="form-control col-2" onChange={e => this.setState({currency: e.target.value})}>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        );
    }
}

export default Prices;