import Livro from "../components/livros"
import React from "react"

export default class HomePege extends React.Component{
    state = {list: [], loading: true}

    async componentDidMount(){
        var url = 'http://localhost:8000/livro/'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        this.setState({list:data, loading:false})
    }

    render(){
        const listApi = this.state.list;
        return (
            <div>
                <h2>Minha lista</h2>
                <ul>
                    {listApi.map(item => <Livro item={item}/>)}
                </ul>
            </div>
        )
    }
}