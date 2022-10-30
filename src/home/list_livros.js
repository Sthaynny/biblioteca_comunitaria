import React from "react"

export default class ListLivros extends React.Component{
    state = {list: null}

    async componentDidMount(){
        var url = 'http://localhost:8000/livro/'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }

    render(){
        return (
            <div>
                <h2>Minha lista</h2>
                <ul>
                    <li>item 1</li>
                    <li>item 1</li>
                    <li>item 1</li>
                </ul>
            </div>
        )
    }
}