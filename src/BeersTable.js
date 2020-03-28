import React, {Component} from 'react';

class BeersTable extends Component {

    constructor() {
        super();
        this.state = {
            beers: []
        }
    }


    getBeers = (page) => {
        fetch('https://api.punkapi.com/v2/beers?page='+ page +'&per_page=10')
        .then(resp=>resp.json())
        .then(beersData=>{
            this.setState({beers: beersData})
        })
    }


    getNextPage = (page) => {
        this.getBeers(page);
    }


    componentDidMount() {
        this.getBeers(1);
    }
    
    render() {


        let table = this.state.beers.map(beer=>{
            return (
                <div className="table-row" key={beer.id}>
                    <div>{beer.id}</div>
                    <div>
                        <img src={beer.image_url} alt={beer.name} />
                    </div>
                    <div>{beer.name}</div>
                </div>
            )
        });

        return (
            <div className="table">
                <header>
                    <h2>ID</h2>
                    <h2>Zdjęcie</h2>
                    <h2>Nazwa</h2>
                </header>
                <div className="table-list">
                    {table}
                </div>
                <div className="pagination">
                    <span onClick={()=>this.getNextPage(1)}>1</span>
                    <span onClick={()=>this.getNextPage(2)}>2</span>
                    <span onClick={()=>this.getNextPage(3)}>3</span>
                    <span onClick={()=>this.getNextPage(4)}>4</span>
                    <span onClick={()=>this.getNextPage(5)}>5</span>
                </div>
            </div>
        )
    }
}

export default BeersTable;