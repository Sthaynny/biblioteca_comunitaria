import React from "react"

export default class ListEmprestimos extends React.Component{
    state = {list: null, loading: true}

    async componentDidMount(){
        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token 57a9e1e162302803a53f6d391ea097f1d405f30f'
        var url = 'http://localhost:8000/emprestimo/'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        this.setState({list:data, loading:false})
    }

    render(){
        return (
            <div>
                <h2>Meus emprestimos</h2>
                <ul>
                    <li>item 1</li>
                    <li>item 1</li>
                    <li>item 1</li>
                </ul>
            </div>
        )
    }
}